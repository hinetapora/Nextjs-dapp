import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Mint from '../components/Mint';

export default function Home() {

  return (
    <div className={`flex flex-col min-h-screen justify-center App items-center bg-center bg-cover `}>
      <Head>
        <title>CantoArt Mint</title>
        <meta name="description" content="Created by David feat Fazel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <section className='w-full px-5'>
      <Mint/>
      </section>

     



      
    </div>
  )
}
