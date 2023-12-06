import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { IAboutPageReqTypes, IContactsPageReqTypes, IContactsPageTypes, } from '@/types/types'

export async function GET() {
    try {
        const contactsText = await prisma.contactsPage.findFirst() as IContactsPageReqTypes

        if (!contactsText) {
            return NextResponse.json({ message: 'No any contact text data' }, { status: 400 })
        }

        return NextResponse.json({ contactsText }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as IContactsPageReqTypes
        const { contactsText } = body

        const existText = await prisma.contactsPage.findUnique({
            where: {
                contactsText,
            }
        })

        if (existText) {
            return NextResponse.json({ message: 'Same text already exist' }, { status: 400 })
        }

        if (!contactsText) {
            return NextResponse.json({ message: 'No any contacts text data' }, { status: 400 })
        }

        const contacts = await prisma.contactsPage.create({
            data: {
                contactsText
            }

        })

        return NextResponse.json({ contacts }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}