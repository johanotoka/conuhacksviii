import React from 'react'
import './nav.css'
import { useState } from 'react'
import logo from '../../assets/Sun_Life_weblogo.svg'

const Nav = () => {
    const [active, setActive] = useState('#')
    return (
        <nav>
            <div className='yellow-stripe'></div>
            <div className='links'>
                <a href="#"><img src={logo} alt='logo' className='logo'/></a>
                <a href='#learn' onClick={() => setActive('#learn')} className={active === '#learn' ? 'active' : ''}>Learn</a>
                <a href='#tools' onClick={() => setActive('#tools')} className={active === '#tools' ? 'active' : ''}>Tools</a>
                <a href='#calculators' onClick={() => setActive('#calculators')} className={active === '#calculators' ? 'active' : ''}>Calculators</a>
                <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}>About</a>
            </div>
        </nav>
    )
}

export default Nav