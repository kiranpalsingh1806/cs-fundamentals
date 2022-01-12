import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;

    @media (min-width : 700px) {
        height: 80px;
    }
`

export const LeftContainer = styled.nav`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    /* background-color: red; */
`

export const RightContainer = styled.nav`
    flex : 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    /* background-color: salmon; */
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;

`;

export const NavbarLink = styled(Link)`
    color : white;
    font-size : x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
        display: none;
    }
`

export const NavbarLinkEntended = styled(Link)`
    color : white;
    font-size : x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border : none;
    color : white;
    font-size: 45px;
    cursor : pointer;

    @media (min-width : 700px) {
        display: none;
    }
`

export const NavbarExtendedContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width : 700px) {
        display: none;
    }
`;