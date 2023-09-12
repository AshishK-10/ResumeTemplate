import React from 'react'
import Utils from '../Utils'
import Experience from './Experience';

function About() {
  const exps= Utils().Experience();
  return (
    <div>
      <span className='headlineReading'>
        The discovery made by the Richard McClintock, a professor of latin at Hampen-sydney college in Verginia,
        who faced the impetuous recurrance of the dark word consector in the text Lorem ipsum resurched to identifythem in sections
        1.10.32 and 1.10.33 of the aforementione.
      </span>
      <hr/>
      <div>
        <span>Experience</span>
        {
          exps.map((exp)=>{
            return <Experience id = {exp.id - 1} name = {exp.name} date = {exp.date} company = {exp.company} desc = {exp.desc}/>
          })
        }
      </div>
    </div>
  )
}

export default About