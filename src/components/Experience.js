import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap} from '@fortawesome/free-solid-svg-icons'


export default function Experience({name, company, desc, date, id}) {
  const iconsArray = [faBriefcase, faGraduationCap]
  return (
    <div className='outerContainerDiv'>
      <div className='experieceContainerDiv'>
        <FontAwesomeIcon icon={iconsArray[id]} className='ExperienceFeedInsideIcon'/>
        <div className='ExpeienceFeedNameDiv'>
          <span style = {{fontFamily: "sans-serif", fontWeight: "bold", fontSize: "Medium"}}>{name}</span>
          <span style = {{fontFamily: "sans-serif", fontWeight: "bold", color: "grey"}}>{date}</span>
          <span style = {{fontFamily: "sans-serif", color: "grey"}}>{company}</span>
        </div>
      </div>
      {desc && <span style = {{fontFamily: "sans-serif", color: "black", marginLeft: "7%", marginTop: "2%"}}>{desc}</span>}
      <hr/>
    </div>
  )
}
