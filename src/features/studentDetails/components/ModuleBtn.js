import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLock, faPlay } from '@fortawesome/free-solid-svg-icons'

const ModuleBtn = ({name, status}) => {

 if (status === "locked") {
  return (
    <li className='hscroll-li'><button className='bg-purple-300 rounded py-2 px-4 inline-flex space-x-4 items-center' disabled> <FontAwesomeIcon icon={faLock} /> <span>{name}</span></button></li>
  )
 } else if (status === "complete") {
    return (
        <li className='hscroll-li'><button className='bg-green-500 hover:opacity-90 rounded py-2 px-4 inline-flex space-x-4 items-center'> <FontAwesomeIcon icon={faCheck} /> <span>{name}</span></button></li>
      )
 } else {
    return (
        <li className='hscroll-li'><button className='bg-purple-600 hover:opacity-90 rounded py-2 px-4 inline-flex space-x-4 items-center'>     <FontAwesomeIcon icon={faPlay} /><span>{name}</span></button></li>
      )
 }

}

export default ModuleBtn