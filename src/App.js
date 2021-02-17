import logo from './logo.svg';
import React from "react"
import styled, { keyframes } from 'styled-components'

const Continer = styled.div`
text-align: center;
`
const Header = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

`


const StyledLogo = styled.img`
height: 40vmin;
pointer-events: none;
animation: ${AppLogoSpin} infinite 20s linear;
`

// const Img = () => {
//   return <img src={logo} alt="logo" />
// }
const AppLink = styled.a``

const StyledAppLink = styled(AppLink)`color: #fff;`


function App() {
  return (
    <Continer>
      <Header>
        <StyledLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StyledAppLink href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >Learn React</StyledAppLink>
      </Header>
    </Continer>
  );
}

export default App;
