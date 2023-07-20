'use client'
import Image from 'next/image'

const url = "https://api.adviceslip.com/advice"

export async function getSortedPostsData() {
  const res = await fetch(url, {
    cache: "no-cache"
  });
  const data = await res.json();
  console.log(data.slip.id);
  console.log(data.slip.advice);
}

export default function Home() {
  return (
    <main>
      <div className='flex flex-justcont-c flex-alignit-c home'>
        <div className='home-block'>
          <button onClick={() => getSortedPostsData()}>test</button>
        </div>
      </div>
    </main>
  )
}
