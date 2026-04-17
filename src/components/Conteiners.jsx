import React from 'react'

import { aboutinfo } from '../../data/aboutinfo'
import AboutInfo from './homepage/AboutInfo'


export default function Conteiners() {
  return (
    <div className='w-[85%] mx-auto my-20'>
        <AboutInfo data={aboutinfo}/>
    </div>
  )
}
