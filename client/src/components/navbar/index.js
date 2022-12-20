import {
  StyledNavbarHeader,
  StyledNavbar,
  StyledNavItem
} from "../../Styles/Navbar.Styled";

const Navbar = () => {
  return (
    <>
      <StyledNavbarHeader >
        <h1>COMSATS Univeristy Islamabad Sahiwal Campus</h1>
      </StyledNavbarHeader>
      <StyledNavbar>
        <StyledNavItem to={'/'}>Home</StyledNavItem>
        <StyledNavItem to={'/about'} >About</StyledNavItem>
        <StyledNavItem to={'/contact'} >Contact</StyledNavItem>
      </StyledNavbar>
    </>

  )
}

export default Navbar;