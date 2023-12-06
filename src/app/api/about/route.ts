import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { IAboutPageReqTypes,  } from '@/types/types'

export async function GET() {
    try {

        const about = await prisma.aboutPage.findFirst()
        
        if (!about) {
            return NextResponse.json({ message: 'No any about data' }, {status: 400})
        }

        return NextResponse.json({ about }, { status: 200 })
    } catch (error) {
        return NextResponse.json({message: 'About page error', error}, {status: 500})
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as IAboutPageReqTypes
        const { aboutText, aboutPhoto } = body 
        
        const existText = await prisma.aboutPage.findUnique({
            where: {
                aboutText,
            }
        })

        const existPhoto = await prisma.aboutPage.findUnique({
            where: {
                aboutPhoto,
            }
        })

        if (existText) {
            return NextResponse.json({ message: 'Same text already exist' }, { status: 400 })
        }

        if (existPhoto) {
            return NextResponse.json({ message: 'Same photo already exist' }, { status: 400 })
        }

        if (!aboutText) {
            return NextResponse.json({ message: 'No any about text data' }, { status: 400 })
        }

        if (!aboutPhoto) {
            return NextResponse.json({ message: 'No any about photo data' }, { status: 400 })
        }

        const about = await prisma.aboutPage.create({
            data: {
                aboutText,
                aboutPhoto,
            }

        })

        return NextResponse.json({ about }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}

