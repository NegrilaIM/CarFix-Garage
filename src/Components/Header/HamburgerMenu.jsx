import React, { useState } from 'react';
import '../Header/HamburgerMenu.scss'
import Logo from "../../Assets/logo.png"
import {
  MDBNavbarBrand,
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function HamburgerMenu() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);

  return (
  <>
    <div className='hide'>
      <MDBNavbar>
        <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
            <img
              src={Logo}
              height='40'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Service
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Spalatorie
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            Vulcanizare
          </MDBBtn>
        </div>
      </MDBCollapse>
    </div>
  </>
  );
}