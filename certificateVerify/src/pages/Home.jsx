import React from 'react'
import Container from '../components/Container'


function Home() {

  // first - Hsl(214,25%,56%)
// second - hsl(208,31%,35%)

  return (
    <Container>
        <div className='flex flex-col flex-warp justify-center items-center mx-auto mt-9 '>
            <h1 className='p-4 font-bold text-neutral-700 text-5xl'>Blockchain Certificate Verification</h1>
            <p className='mx-auto p-4 max-w-3xl text-gray-600 text-lg text-center leading-relaxed'>Secure, tamper-proof academic credential verification powered by
                blockchain technology. Students, universities, and verifiers can trust our
                immutable certification system for authentic document validation.
            </p>
            <button onClick={ () => window.open("https://sepolia.etherscan.io/address/0x0cf5ffb83022f9c5a2b7417fea77e6c1009d79e6#code", "_blank") } class="inline-flex items-center gap-2 bg-blue-100 hover:bg-blue-50 mt-25 px-4 py-2 rounded-full cursor-pointer">
                <span class="relative flex w-3 h-3">
                <span class="inline-flex absolute bg-green-500 opacity-100 rounded-full w-full h-full animate-ping"></span>
                <span class="inline-flex relative bg-[hsl(102,100%,56%)] rounded-full w-3 h-3"></span>
                </span>
                <span class="font-medium text-sky-600 ">Blockchain Network Active</span>
            </button>
        </div>
    </Container>
  )
}

export default Home