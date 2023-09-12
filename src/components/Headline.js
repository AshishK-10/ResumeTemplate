import React from 'react'
import About from './About'

function Headline({name, id}) {
  if(id === 1){
    return (
      <div>
        <span>{name}</span>
        <hr style={{height: "2px", background: "blue", width: '100%'}}/>
      </div>
    )
  }else{
    return (
      <div>
        <span>{name}</span>
      </div>
    )
  }
}

export default Headline