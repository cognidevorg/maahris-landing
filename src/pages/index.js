import React, { useState } from "react"
import styled from "styled-components"
import Image from "../components/NetlifyCmsImage"
import Logo from "../images/assets/Logo.svg"
import MenuIcon from "../images/assets/MenuIcon.svg"
import ScrollIcon from "../images/assets/ScrollDown.svg"
import Content from "../components/Hompage/Content"
import Footer from "../components/Shared/Footer"
import MenuData from "../components/Shared/Menu"
import SEO from '../components/Shared/SEO'
import "animate.css/animate.css"
import "../styles/font.scss"

import HomeData from "../../site/content/home.json"

const Root = styled.div`
  display: block;
  overflow-x: hidden;
`
const ImgContainer = styled.div`
  & .gatsby-image-wrapper{
    height: 100vh;
  }
`
const LogoDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 6%;
`
const MenuDiv = styled.div`
  position: absolute;
  top: 10%;
  right: 6%;
  height: 56px;
  align-items: center;
  display: flex;
`
const ScrollDownDiv = styled.div`
  position: absolute;
  bottom: 10%;
  left: calc(50% - 24px);
`
const Menu = styled.div`
  position: absolute;
  right: ${props => (props.sown ? 0 : "-800px")};
  transition: right 0.5s;
  top: 0;
  height: 100vh;
  width: 467px;
  background-color: #14415a;
  z-index: 2;
  @media (max-width: 800px) {
    width: 100vw;
  }
`
const HeadTitle = styled.div`
  position: absolute;
  color: white;
  font-size: 68px;
  line-height: 90px;
  font-family: univia-pro;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: max-content;
  max-height: 200px;
  max-width: 1082px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 48px;
    line-height: 64px;
    max-width: 400px;
  }
  @media (max-width: 420px) {
    font-size: 28px;
    line-height: 37px;
    max-width: 245px;
  }
`
const IndexPage = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <SEO title="Investing in Heritage & Human Potential"/>
      <Root>
        <div className="max-h-screen relative center white">
          <ImgContainer>
          <Image
            imageUrl={HomeData.introHomePageBackground}
            className="object-cover"
            style={{ height: "100vh" }}
          />
          </ImgContainer>
          <LogoDiv>
            <Logo />
          </LogoDiv>
          <MenuDiv
            onClick={() => {
              setMenu(true)
            }}
          >
            <MenuIcon />
          </MenuDiv>
          <Menu sown={menu}>
            <MenuData setMenu={setMenu} home={true}/>
          </Menu>
          <ScrollDownDiv>
            <ScrollIcon className="animate__animated animate__bounce animate__repeat-2 animate__slow" />
          </ScrollDownDiv>
          <HeadTitle>{HomeData.intro}</HeadTitle>
        </div>
        <Content sections={HomeData.sections} />
        <Footer />
      </Root>
    </>
  )
}

export default IndexPage
