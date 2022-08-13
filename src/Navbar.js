import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <div>
              
<Link to="/">Home |</Link>
<Link to="/create">Add New Blog |</Link>
        
    </div>
    </nav>
  )
}

export default Navbar
