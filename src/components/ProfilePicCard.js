import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsersLine, faToggleOff, faToggleOn, faCirclePlus, faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import { faSlack, faDropbox, faGithub} from '@fortawesome/free-brands-svg-icons'
import LoadingWheel from '../Icons/loadingWheel.png'

function ProfilePicCard({name = "Ayaat Khanna", followers = 40, following = 43, role = "UI/UX Designer"}) {
  const [isOn, setIsOn] = useState(true);
  return (
    <div className='PofilePicCard'>
      <div className='profileDesignation'>
        <span style={{fontFamily: "sans-serif", fontWeight: "bold"}}>{name}</span>
        <span style={{fontFamily: "sans-serif", fontSize: "small", marginTop: "3%", color: "grey"}}>{role}</span>
        <span style={{fontFamily: "sans-serif", fontSize: "smaller", marginTop: "3%"}}><FontAwesomeIcon icon={faUsersLine}/> {followers} followers {following} following</span>
      </div>
      <div className='innerProfileCard'>
        <span>Make my profile visible to employees</span>
        <span onClick={()=>{setIsOn(!isOn)}} style={{fontSize: "large", color: "blue"}}>
          {
            isOn ? <FontAwesomeIcon icon={faToggleOn}/>
            : <FontAwesomeIcon icon={faToggleOff}/>
          }
        </span>
      </div>
      <span className='thumbnails'>Your profile and carrier goals will appear when the employees go though our database</span>
      <div className='innerProfileCard'>
        <span>Online Links</span>
        <span style={{cursor: "pointer", color: "blue"}}><FontAwesomeIcon icon={faCirclePlus}/></span>
      </div>
      <span className='thumbnails'>Add your online Portfolio links to increase your profile Strength</span>
      <div className='profileLinksIconsContainer'>
        <span><FontAwesomeIcon icon={faDropbox}/></span>
        <span><FontAwesomeIcon icon={faGithub}/></span>
        <span><FontAwesomeIcon icon={faSlack}/></span>
      </div>
      <div className='loadingWheelContainer'>
        <span>Wheel of opportunities <FontAwesomeIcon icon={faCircleExclamation} style={{cursor: "pointer"}}/></span>
        <img src = {LoadingWheel}/>
      </div>

      <div className='ProfilesliderContainer'>
        <span style={{fontFamily: "sans-serif", fontWeight: "bold", color: "purple"}}>Your Ranking</span>
        <input type="range" value = {80} max={100} min = {0} style={{cursor: "pointer"}}/>
      </div>
      <div className='profileRankingFooter'>
        <span className='thumbnails'>Hooray you're in the top</span>
        <span style = {{fontSize: "medium", color: "purple", fontWeight: "bold"}}>27%</span>
      </div>
    </div>
  )
}

export default ProfilePicCard