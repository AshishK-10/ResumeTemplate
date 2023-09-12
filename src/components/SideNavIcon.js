import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faFileWaveform, faUser } from '@fortawesome/free-solid-svg-icons'
import { faWindows, faChrome} from '@fortawesome/free-brands-svg-icons'

const iconsArray = [faWindows, faEnvelopeOpenText, faFileWaveform, faUser, faChrome]
export default function SideNavIcon({name, id}) {
  return (
    <span className = {id === 0 ? 'selected' : 'unselected'}>
     <FontAwesomeIcon icon={iconsArray[id]}/> {name}
    </span>
  )
}
