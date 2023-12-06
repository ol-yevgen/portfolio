import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { ISkillsTextReqTypes, } from '@/types/types'

export async function GET() {
    try {
        const skillsText = await prisma.skillsText.findFirst()

        if (!skillsText) {
            return NextResponse.json({ message: 'No any skills text data' }, { status: 400 })
        }

        return NextResponse.json({ skillsText }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Skills text error', error }, { status: 500 })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json() as ISkillsTextReqTypes
        const { skillsText } = body

        const existText = await prisma.skillsText.findUnique({
            where: {
                skillsText,
            }
        })

        if (existText) {
            return NextResponse.json({ message: 'Same text already exist' }, { status: 400 })
        }

        if (!skillsText) {
            return NextResponse.json({ message: 'No any skills text data' }, { status: 400 })
        }

        const contacts = await prisma.skillsText.create({
            data: {
                skillsText
            }

        })

        return NextResponse.json({ contacts }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}