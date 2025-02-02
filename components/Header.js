import React from 'react'
import Image from 'next/image'
import Opensea from '/public/assets/icons/opensea.png'
import EtherScan from '/public/assets/icons/etherscan.png'
import Twitter from '/public/assets/icons/twitterw.png'
import Discord from '/public/assets/icons/dicordw.png'

function Header() {

  return (
    <div className='w-full h-20 flex justify-between logo items-center p-5 absolute top-0'>
    <div className='app_green'>
    <h1>
        canto: botanical mint
    </h1>
    </div>
    <div className='flex justify-center items-center gap-2'>
    <a className='social' href='https://opensea.io/FazelPejmanfar' target={'_blank'} rel='noreferrer'>
    <Image src={Opensea} width={30} height={30} alt={'Opensea'}/>
    </a>

    <a className='social' href='https://goerli.etherscan.io/address/0x9EE4490A25C674Faa300327925b453698c413A32' target={'_blank'} rel='noreferrer'>
    <Image src={EtherScan} width={30} height={30} alt={'EtherScan'}/>
    </a>

    <a className='social' href='https://twitter.com/PejmanfarFazel' target={'_blank'} rel='noreferrer'>
    <Image src={Twitter} width={30} height={30} alt={'Twitter'}/>
    </a>

    <a className='social' href='https://' target={'_blank'} rel='noreferrer'>
    <Image src={Discord} width={30} height={30} alt={'Discord'}/>
    </a>

    <a className='social' href='https://creativecommons.org/publicdomain/zero/1.0/' target={'_blank'} rel='noreferrer'>
    <Image src="/public/assets/cc_icon_white_x2.png" width={30} height={30} alt={'CC Public Domain'}/>
    </a>
    </div>
    </div>
  )
}

export default Header