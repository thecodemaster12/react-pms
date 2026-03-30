import React from 'react'
import viteLogo from '../assets/favicon.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-purple-500'>
        <div className="container mx-auto py-6">
            <div className="flex justify-between items-center">
                <div className="logo">
                    <Link to="/" className='flex items-center gap-2'> 
                        <img src={viteLogo} alt="" />
                        <h3 className='text-2xl text-white hover:text-purple-200'>PMS</h3>
                    </Link>
                </div>
                <ul className="main-menu">
                    <li><a href="#" className='text-white text-lg hover:text-purple-200'>link 1</a></li>
                    <li><a href="#" className='text-white text-lg hover:text-purple-200'>link 2</a></li>
                    <li><a href="#" className='text-white text-lg hover:text-purple-200'>link 3</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav