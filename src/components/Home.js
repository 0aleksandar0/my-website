import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                title="Welcome to my Website"
                description="I like fancy stuff but I even more like to see you happy!"
                leftBtnText="Who Am I"
                rightBtnText="My Project"
                background="me.jpg"
            />
            <Section 
                title="Current Projekt"
                description="Create my own Website"
                leftBtnText="Who Am I"
                rightBtnText="My Project"
                background="Projekte.jpg"
            />
                
            <Section 
                title="React"
                description="Create my own Website"
                leftBtnText="Who Am I"
                rightBtnText="My Project"
                background="react-logo.jpg"
            />
            
            <Section 
                title="Rest API"
                description="Create my own Website"
                leftBtnText="Who Am I"
                rightBtnText="My Project"
                background="dig.png"
            />

            <Section 
                title="TypeScript"
                description="Create my own Website"
                leftBtnText="Who Am I"
                rightBtnText="My Project"
                background="typeScript.png"
            /> 

            <Section 
                title="Contact"
                tel="Tel:0176/1234567"
                city="81735 Munich"
                address="Emil-Nolde-Strasse 9"
                leftBtnText="connect"
                background="myFoto.jpg"
            />
        </Container>

    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`