import { NextRequest, NextResponse } from "next/server"
import { prisma } from '@/libs/prismaDb'
import { ICvDataType } from '@/types/types'

interface IDownloadReqType {
    download: string
}

export async function GET(request: NextRequest) {
    try {
        // const body = await request.json() as IDownloadReqType
        // const { download } = body

        const cv = await prisma.myCV.findFirst()

        return NextResponse.json({ cv }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'About page error', error }, { status: 500 })
    }
}

// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json() as ICvDataType
//         const { aboutCV } = body

//         const existCV = await prisma.myCV.findUnique({
//             where: {
//                 aboutCV
//             }
//         })

//         if (existCV) {
//             return NextResponse.json({ message: 'Same cv already exist' }, { status: 400 })
//         }

//         if (!aboutCV) {
//             return NextResponse.json({ message: 'No any cv' }, { status: 400 })
//         }

//         const cv = await prisma.myCV.create({
//             data: {
//                 aboutCV
//             }

//         })

//         return NextResponse.json({ cv }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: 'About page error', error }, { status: 500 })
//     }
// }
