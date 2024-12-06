import React from 'react'
import Link from 'next/link'
import { FcFeedback } from 'react-icons/fc'

const Header = () => {
  return (
    <header className="header">
        <h1 className="logo">PSM-EDUCATION-DEPARTMENT</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="About">About</Link>
            <Link href="Institutes">Institutes</Link>
            <Link href="Contact">Contact</Link>
          <FcFeedback style={{color:'white',fontSize: '25px'}} />
            
        </nav>
    </header>
  )
}

export default Header
