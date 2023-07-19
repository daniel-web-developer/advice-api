import { NextResponse } from 'next/server'

const DATA_URL = 'https://api.adviceslip.com/advice'

export async function GET(){
    const res = await fetch(DATA_URL)

    const advices = await res.json()

    return NextResponse.json(advices)
}
