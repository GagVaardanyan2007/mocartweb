import React from 'react'

import { aboutinfo } from '../../data/aboutinfo'
import AboutInfo from './homepage/AboutInfo'
import News from './homepage/News'


export default function Conteiners() {
  return (
    <div className='w-[85%] space-y-10 mx-auto my-20'>
        <AboutInfo data={aboutinfo}/>
        <News/>
    </div>
  )
}
