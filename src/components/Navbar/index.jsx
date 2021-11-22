import { useState } from 'react';
import NavBarContainer from './Container';
import Logo from './Logo';
import SearchBar from './Search';

const NavBar = ({ search = true }) => {


  return (
    <NavBarContainer>
      <Logo
        w='100px'
        color={['white', 'white', 'primary.500', 'primary.500']}
      />
      {search && <SearchBar />}
    </NavBarContainer>
  );
};

export default NavBar;
