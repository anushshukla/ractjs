import { Link } from 'react-router-dom'
import React from 'react';
export const LeftSideMenu = () => (
	<ul>
	    <li><Link to="/">Home</Link></li>
	    <li><Link to="/about">About</Link></li>
	    <li><Link to="/topics">Topics</Link></li>
  	</ul>
)