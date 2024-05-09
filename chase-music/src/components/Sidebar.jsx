import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to='./components/About'>About</Link></li>
        <li><Link to='./components/ContactUs'>COntactus</Link></li>
        <li><Link to='./components/Register'>COntactus</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;