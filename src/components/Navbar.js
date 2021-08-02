import React from 'react'
import styled, { css }  from 'styled-components/macro'
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData'

const Nav = styled.div`
    height: 60px;

    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
`

const Logo = styled(Link)`
    ${NavLink}
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>Generasi Gigih</Logo>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
        </Nav>
    )
}

export default Navbar
