import React, { useState } from 'react';
import {
  Container,
  Collapse,
  // Navbar,
  NavbarToggler
} from 'reactstrap';
import Navbar from './navbar'
import Link from './link'
import Navigation from 'reactstrap-json-nav'
import navigation from '../data/navigation';
import logo from '../assets/images/logo.svg'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar textColor='dark'>
    </Navbar>
  );
}

export default Header;
