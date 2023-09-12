import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardUser, faVrCardboard, faUsersLine, faPaintBrush} from '@fortawesome/free-solid-svg-icons'

export default function CommunitiesFeed({name, members, id}) {
  const iconsArray = [faChalkboardUser, faVrCardboard, faUsersLine, faPaintBrush];

  return (
    <div className='communitiesFeedDiv'>
      <div style={{backgroundColor: id % 2 ? "lightpink" : "lightgreen"}} className='communitiesFeedInsideIcon'><FontAwesomeIcon icon={iconsArray[id]}/></div>
      <div className='communitiesFeedNameDiv'>
        <span style = {{fontFamily: "sans-serif", fontWeight: "bold", fontSize: "Medium"}}>{name}</span>
        <span style = {{fontFamily: "sans-serif", fontWeight: "bold", color: "grey"}}>{members} members</span>
      </div>
    </div>
  )
}
