import { NextResponse } from 'next/server'

const DATA_URL = 'https://api.adviceslip.com/advice'

export async function GET(request){
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)
    const res = await fetch(`${DATA_URL}/${id}`)

    const advices = await res.json()

    return NextResponse.json(advices)
}
