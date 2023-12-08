import { prisma } from "@/libs/prismaDb"
import { IProjectTypes } from "@/types/types"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url)
        const imageLabel = url.searchParams.get('image') as string

        const project = await prisma.projectsList.findFirst({
            where: {
                projectLabel: imageLabel
            }
        }) as IProjectTypes

        if (!project) {
            return NextResponse.json({ message: "No any project" }, { status: 400 })
        }

        const image = project.projectImage

        return NextResponse.json({ image }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Project's image error", error }, { status: 500 })
    }
}