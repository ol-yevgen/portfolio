import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { ISkillsIconsListType} from '@/types/types'

export async function GET() {
    try {
        const skillsIcons = await prisma.skillsIconsList.findMany()

        if (!skillsIcons) {
            return NextResponse.json({ message: 'No any skills icons data' }, { status: 400 })
        }

        return NextResponse.json({ skillsIcons }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Skills icons error', error }, { status: 500 })
    }
}
export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json() as ISkillsIconsListType
        const { skillsList } = body

        skillsList.forEach(async (skill) => {
            const skillsLabel = skill.skillsLabel
            const existIcon = await prisma.skillsIconsList.findUnique({
                where: {
                    skillsLabel
                }
            })
            if (existIcon) {
                return NextResponse.json({ message: 'Same icon already exist' }, { status: 400 })
            }
        });

        await prisma.skillsIconsList.createMany({
            data: skillsList
        })

        return NextResponse.json({ message: 'Icons list created' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}