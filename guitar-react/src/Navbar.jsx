import React,{useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { Button } from "semantic-ui-react";


function NavbarHeader() {
   
 const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
  <div>
    <Navbar  style={{backgroundColor : "#cbe1ef"}} light expand="md">
      <NavbarBrand style={{margin: "0.5rem 0rem 0.5rem 2rem"}} href="#">guitar</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink style={{margin: "0.5rem 1.5rem 0.5rem 0rem"}} href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{margin: "0.5rem 1.5rem 0.5rem 0rem"}} href="#">Contribute</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{margin: "0.5rem 1.5rem 0.5rem 0rem"}} href="#">About Us</NavLink>
          </NavItem>
          <NavItem>
             <Button style={{margin: "0.5rem 1.5rem 0.5rem 0rem"}} basic color='blue' content='Sign Up' />
          </NavItem>
          <NavItem>
                <Button style={{margin: "0.5rem 1.5rem 0.5rem 0rem"}} color='blue'>LogIn</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div>
    )
}

export default NavbarHeader; 