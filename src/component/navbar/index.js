import React from "react";
import { Link } from "react-router-dom";
import {NavBar,Logo,LogoText,UlList,ListItem,ALink} from "./style";
const Navbar=()=>{


    return (<NavBar>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                    
                <UlList>
                    <ListItem><Link to='/'>Home</Link></ListItem>
                    <ListItem><ALink href="#">Work</ALink></ListItem>
                    <ListItem><ALink href="#">Portfolio</ALink></ListItem>
                    <ListItem><ALink href="#">Resume</ALink></ListItem>
                    <ListItem><ALink href="#">About</ALink></ListItem>
                    <ListItem><Link  to='/contact'>Contact</Link></ListItem>
                </UlList>                
            </div>
            
        </NavBar>
        


    );


}

export default Navbar;