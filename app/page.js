'use client'
import Image from 'next/image'
import dividerdesk from '../public/pattern-divider-desktop.svg'
import dividermob from '../public/pattern-divider-mobile.svg'
import buttonimage from '../public/icon-dice.svg'

const url = "https://api.adviceslip.com/advice"

export async function getAdvice() {
  const res = await fetch(url, {
    cache: "no-cache"
  });
  const data = await res.json();
  
  const adviceID = document.querySelector('#adviceID');
  const advice = document.querySelector('#advice');

  if(data.slip.id != 203){
    adviceID.innerHTML = "ADVICE #" + (data.slip.id + 1);
    advice.innerHTML = "\"" + data.slip.advice + "\"";
  }

  return data.slip.id;
}

export default function Home() {
  getAdvice();

  return (
    <main>
      <div className='flex flex-justcont-c flex-alignit-c home'>
        <div className='home-block'>
          <div className='flex flex-dir-col flex-alignit-c'>
            <p id='adviceID' className='home-number'></p>
            <div className='flex flex-dir-col flex-justcont-c flex-alignit-c home-main-text'>
              <p id='advice' className='home-advice'></p>
              <Image src={dividerdesk} alt='' className='home-divider mobile'/>
              <Image src={dividermob} alt='' className='home-divider desktop'/>
            </div>
          </div>
          <button onClick={() => getAdvice()} class="home-button">
            <Image src={buttonimage} alt='' className='home-button-image' />
          </button>
        </div>
      </div>
    </main>
  )
}
