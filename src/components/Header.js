import React from 'react'
import imageSllacker from './images/sllacker.png'
import userIcon from './images/149071.png'
import searchIcon from './images/1024px-Search_Icon.svg.png'

function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">

    <div class="shrink-0 h-16 w-32 ...">
        <img src={imageSllacker} alt="" />
    </div>
    <div class="absolute right-0 h-16 w-16 ... pr-4">
    <img src={userIcon} alt="" />
    </div>
    <div class="grid grid-cols-4 gap-10 content-center ...">
    
    <img src={searchIcon} alt="" class="shrink-0 h-6 w-6 ... "/>
        <input placeholder="Search"/>
    </div>
    </header>
    
  )
}

export default Header