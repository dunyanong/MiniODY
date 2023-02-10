import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

import { FaRocket } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MiniODY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className="flex-1 mt-10 mx-auto sm:mt-12 md:mt-16 lg:mt-20 pb-48 xs:overflow-hidden md:overflow-visible">
          <div className='flex justify-center'>
            <h1 className="text-3xl mx-auto font-extrabold tracking-tight text-white sm:text-4xl pb-4 sm:pb-4">Hand Detector🖐</h1>
          </div>
          <h1 className="text-xl mx-auto font-extrabold tracking-tight text-white sm:text-2xl">Tech Stack:</h1>
          <p className="text-base text-gray-500 sm:text-lg mx-auto md:text-xl lg:mx-0 pb-4 sm:pb-4">Tech Stack: tensorflow.js, React, pre-trained COCO SSD model</p>

          <div className='flex justify-center'>
          <Link href='/projects/objectdetector/demo' legacyBehavior>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold my-3 py-2 px-4 rounded flex items-center w-32 sm:w-32 md:w-32 lg:w-32">
              <FaRocket className="fill-current w-4 h-4 mr-2" />
              Explore
            </button>
          </Link>
          </div>     
        </main>
        <Footer />
      </div>
    </div>
  )
}