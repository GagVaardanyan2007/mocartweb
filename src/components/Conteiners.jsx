import React from 'react'
import { aboutinfo } from '../../data/aboutinfo'
import AboutInfo from './homepage/AboutInfo'
import News from './homepage/News'
import { news } from '../../data/news'
import Allcakes from './homepage/Allcakes'
import { allcakes } from '../../data/allcakes'


export default function Conteiners() {
  return (
    <div className='w-[85%] space-y-10 mx-auto my-20'>
        <AboutInfo data={aboutinfo}/>
        <News data={news}/>
        <Allcakes data={allcakes}/>
    </div>
  )
}
