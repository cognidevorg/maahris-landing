import React,{useState} from "react"
import styled from "styled-components"
import Logo from "../images/assets/Logo.svg"
import MenuIcon from "../images/assets/MenuIcon.svg"
import ScrollIcon from "../images/assets/ScrollDown.svg"
import OurRoots from "../components/Page/OurRoots.js"
import Footer from "../components/Shared/Footer"
import MenuData from "../components/Shared/Menu"
import Swiper from "../components/Page/Swiper"
import 'animate.css/animate.css'
import '../styles/font.scss'

const Root= styled.div`
  display: block;
  overflow-x:hidden;
`
const LogoDiv= styled.div`
  position: absolute;
  top: 10%;
  left: 6%;
`
const MenuDiv= styled.div`
  position: absolute;
  top: 10%;
  right: 6%;
  height: 56px;
  align-items: center;
  display: flex;
`
const ScrollDownDiv =styled.div`
  position: absolute;
  bottom: 10%;
  left: calc(50% - 24px);
  @media (max-width: 800px){
    left: calc(85% - 24px);
    #Scroll{
      display: none;
    }
  }
`
const Menu= styled.div`
  position: absolute;
  right: ${props => props.sown ? 0 : '-800px'};
  transition: right .5s;
  top:0;
  height: 100vh;
  width: 467px;
  background-color: #14415A;
  z-index: 2;
  @media (max-width: 800px){
    width: 100vw;
  }
`
const HeadTitle= styled.div`
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
  max-width: 473px;
  text-align: center;
  @media (max-width: 800px){
    font-size: 48px;
    line-height: 64px;
    max-width: 400px;
  }
  @media (max-width: 420px){
    font-size: 28px;
    line-height: 37px;
    max-width: 245px;
  }
`
const ShortDetail= styled.div`
  font-size: 24px;
  line-height:40px;
  color: #AAA599;
  max-width: 801px;
  margin: auto;
  margin-top: 60px;
  font-family: Nunito Sans;
  margin-bottom: 60px;
  @media (max-width: 861px){
    max-width: unset;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 420px){
    font-size: 18px;
    line-height: 25px;
  }
`
const PageTemplate = ({data}) => {
  const [menu,setMenu]= useState(false)
   const content = data.markdownRemark.frontmatter;
  
  return(
  <Root>
    <div className="max-h-screen relative center white">
      <Swiper content={content}/>
      <LogoDiv><Logo/></LogoDiv>
      <MenuDiv onClick={()=>{setMenu(true)}}><MenuIcon/></MenuDiv>
      <Menu sown={menu}>
        <MenuData setMenu={setMenu}/>
      </Menu>
      <ScrollDownDiv><ScrollIcon/></ScrollDownDiv>
      <HeadTitle>{content.intro}</HeadTitle>
    </div>
    <ShortDetail>
      {content.description}
    </ShortDetail>
    <OurRoots content={content}/>
    <Footer/>
  </Root> 
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        intro
        slug
        sectionBackgroundImg1
        sectionBackgroundImg2
        sectionFirstTopic
        sectionFirstTopicDetail
        sectionFirstTopicHeading1
        sectionFirstTopicHeading2
        sectionFirstTopicHeading3
        sectionFirstTopicImg1
        sectionFirstTopicImg2
        sectionFirstTopicImg3
        sectionLastImg
        sectionLastImgText
        sectionSecondTopic
        sectionSecondTopicDetail
        sectionSecondTopicPlan
        sectionThirdTopic
        sectionThirdTopicDetail
        sectionThirdTopicHeading
        sectionThirdTopicImg
        sliderImage {
          sliderBackground
        }
        slug
      }
    }
  }
`
