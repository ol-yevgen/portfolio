import { NextRequest, NextResponse,  } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { IProjectTypes } from '@/types/types'

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url)
        const filter = url.searchParams.get("filter")

        const projects = (await prisma.projectsList.findMany()).reverse()

        const uniqFilters = Array.from(new Set(projects.map(project => {
            return project.projectFilter
        })))

        const filters = ['all', ...uniqFilters ]

        if (projects.length === 0) {
            return NextResponse.json({ message: 'No any projects'}, { status: 400 })
        }

        return NextResponse.json({ projects, filters }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Skills icons error', error }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as IProjectTypes
        const { projectLabel, projectImage, projectDemo, projectGit } = body

        const existProjectLabel = await prisma.projectsList.findUnique({
            where: {
                projectLabel,
            }
        })

        const existProjectImage = await prisma.projectsList.findUnique({
            where: {
                projectImage,
            }
        })

        const existProjectDemo = await prisma.projectsList.findUnique({
            where: {
                projectDemo,
            }
        })

        const existProjectGit = await prisma.projectsList.findUnique({
            where: {
                projectGit,
            }
        })

        if (existProjectLabel) {
            return NextResponse.json({ message: "Same project's label already exist" }, { status: 400 })
        }

        if (existProjectImage) {
            return NextResponse.json({ message: "Same project's image already exist" }, { status: 400 })
        }
        if (existProjectDemo) {
            return NextResponse.json({ message: "Same project's demo link already exist" }, { status: 400 })
        }
        if (existProjectGit) {
            return NextResponse.json({ message: "Same project's git link already exist" }, { status: 400 })
        }

        const project = body

        await prisma.projectsList.create({
            data: project
        })

        return NextResponse.json(
            { message: `Project ${projectLabel} created`},
            { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}