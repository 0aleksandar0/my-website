import React, {useState} from 'react'
import styled from "styled-components"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';
import { selectProject } from "../components/features/project/myProjects";
import { useSelector } from "react-redux";

/*function hideBtn() {
    const customMenu = document.getElementById("customMenu");
    var menuStatus = true;
    customMenu.addEventListener("click", function(){
        menuStatus = false;
        if (menuStatus === false){
            customMenu.style.display = "none";
        }
    });
}*/

function Header() {
    const [navStatus, setNavStatus] = useState(false);
    const projects = useSelector(selectProject);
    console.log(projects);
    
    return (
        <Container>
            <a>
                <img alt="logo" src="/img/logo.png"/>
            </a>
            <Menu>
                {projects && projects.map((project, index)=>(
                    <a key={index} href="https://reactjs.org/">{project}</a>
                ))}
                {/* <a href="#">React</a>
                <a href="#">Rest API</a>
                <a href="#">Projekt TypeScript</a>
                <a href="#">Contact</a> */}
            </Menu>
            <RightMenu>
                <a href="#">Offer</a>
                <a href="#">Account</a>
                <CustomMenu show={navStatus} onClick={()=>setNavStatus(true)} />
            </RightMenu>
            <MyNav show={navStatus}>
                <CloseWrapper onClick={()=>setNavStatus()}>
                    <CustomClose onClick={()=>setNavStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Aleksandar's Home</a></li>
                <li><a href="http://localhost:5500/aleks-website/src/app/games/dbzLeon/game.html" target="_blank">Aleksandar's Games</a></li>
                <li><a href="#">Aleksandar's Turtolias</a></li>
                <li><a href="#">Aleksandar's Projects</a></li>
                <li><a href="#">Aleksandar's Story</a></li>
                <li><a href="#">Aleksandar's Goals</a></li>
                <li><a href="#">Aleksandar's Family</a></li>
                {projects && projects.map((project, index)=>(
                    <li id="navProjects" key={index} href="#">{project}</li>
                ))}
            </MyNav>
            
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: #1E2428;
    opacity: 0.5;

    a {
        opacity: 1;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        /* transition: 0.3s ease;
        background: #3fa46a;
        color: #ffffff;
        font-size: 20px;
        text-decoration: none;
        border-top: 4px solid #3fa46a;
        border-bottom: 4px solid #3fa46a;
        padding: 20px 0; */
        
        margin: 0 20px;
        font-weight: 600px;
        font-size: 120%;
        text-transform: UPPERCASE;
        padding: 0 10px;
        flex-wrap: nowrap;
        color: #ffffff;

    }
    a:hover {
        transition: 0.5s ease;

        /* border-top: 4px solid #ffffff; */
        border-bottom: 4px inset #ffffff;
        font-size: 125%;
        padding: 6px 0; 
      }
    @media(max-width: 1068px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: felx;
    asign-items: center;
    a {
        font-weight: 600px;
        text-transform: UPPERCASE;
        margin-right: 10px;
        color: white;
    }
    a:hover {
        transition: 0.5s ease;

        /* border-top: 4px solid #ffffff; */
        border-bottom: 4px inset #ffffff;
        font-size: 125%;
        padding: 6px 0; 
      }
`

const CustomMenu = styled(MenuOpenIcon)`
    cursor: pointer;
    display: flex;
    background: white;
    border-radius: 20%;
    margin-left: 5px;
    opacity: ${props => props.show ? '0': '1'}
`

const MyNav = styled.div`
    position: fixed;
    top: 70px;
    bottom: 0;
    right: 0;
    background: #1E2428;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    opacity: 0.5;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.7s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
    li:hover {
        transition: 0.5s ease;

        border-top: 4px inset #ffffff;
        border-bottom: 4px inset #ffffff;
        background: grey;
        font-size: 125%;
        padding: 6px 0; 
    }
    a {
        color: white;
        font-weight: 600;
    }
    #navProjects{
        color: white;
        padding: 15px; 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2); 
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    background: white;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

