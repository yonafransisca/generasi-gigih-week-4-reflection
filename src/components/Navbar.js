import React, { useState, useEffect } from 'react'
import styled, { css }  from 'styled-components/macro'
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData'
import { Link as LinkScroll } from 'react-scroll'

const Navlink = css`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
`

const Logo = styled(Link)`
    ${Navlink}  
`;

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    justify-content: space-between;
    padding: 0 4em;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;  
    justify-content: space-evenly;
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    ${Navlink}
`

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 60) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <Nav scrollNav={scrollNav}>
            <Logo to='/'>Generasi Gigih</Logo>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavItem>
                        <NavLinks 
                            to={item.link} 
                            key={index}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={100}
                        >
                            {item.title}
                        </NavLinks>
                    </NavItem>
                ))}
            </NavMenu>
        </Nav>
    )
}

export default Navbar
