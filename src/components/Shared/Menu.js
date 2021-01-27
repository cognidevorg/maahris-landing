import React from "react"
import {Link} from 'gatsby'
import styled from "styled-components"
import Facebook from "../../images/assets/facebook.svg"
import Instagram from "../../images/assets/instagram-glyph-1.svg"
import Twitter from "../../images/assets/twitter.svg"
import MenuClose from "../../images/assets/MenuCloseIcon.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const MenuCloseIcon= styled(MenuClose)`
    position: absolute;
    right: 122px;
    top: 8%;
    @media (max-width: 420px){
        right: 40px;
        top: 5%;
        height: 24px;
    }
`
const Content= styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 145px;
    padding-left: 122px;
    padding-right: 50px;
    font-family: Nunito Sans;
    @media (max-width: 420px){
        padding-top: 150px;
        padding-left: 30px;
        padding-right: 30px;
    }
    @media (max-width: 360px){
        padding-top: 110px;

    }
`
const B = styled(AnchorLink)`
    margin-bottom: 65px;
    font-size: 28px;
    color: white;
    font-family: univia-pro;
    @media (max-width: 420px){
        font-size: 24px;
        margin-bottom: 40px;
    }

    &.active {
        color: #707070;
        text-decoration: none;
  }
`

const Icons= styled.div`
    display: flex;
    @media (min-width: 700px) and (max-width: 800px){
        padding-right: 15px;
    }
`
const Social= styled.a`
    padding-right: 25px;
`
const Phone= styled.div`
    margin-top:20px;
    color: white;
    font-size: 20px;
    @media (min-width: 700px) and (max-width: 800px){
        margin-top:0px;
        margin-right: 30px;
    }
    @media (max-width: 420px){
        font-size: 18px;
    }
`
const Detail= styled.div`
    margin-top: 150px;
    @media (min-width: 700px) and (max-width: 800px){
        display: flex;
    }
    @media (max-width: 420px){
        margin-top: 80px;
    }
`
const Footer =(props)=>{
   
    
    return(
        <div>
            <MenuCloseIcon onClick={()=>{props.setMenu(false)}}/>
            <Content>
                <B onAnchorLinkClick={()=>{props.setMenu(false)}} to="/" activeClassName="active">Home</B>
                <B onAnchorLinkClick={()=>{props.setMenu(false)}} to={`/restoration`}  activeClassName="active">Restoration</B>
                <B onAnchorLinkClick={()=>{props.setMenu(false)}} to={`/#research`}  activeClassName="active">Research</B>
                <B onAnchorLinkClick={()=>{props.setMenu(false)}} to={`/#visual-story-telling`}  activeClassName="active">Visual Story Telling</B>
                <Detail>
                <Icons>
                    <Social target="_blank" href="https://www.twitter.com"><Twitter/></Social>
                    <Social target="_blank" href="https://www.instagram.com"><Instagram/></Social>
                    <Social target="_blank" href="https://www.facebook.com"><Facebook/></Social>
                </Icons>
                <Phone>786-245-3590</Phone>
                <Phone>info@maahris.com</Phone>
                </Detail>
            </Content>
            
        </div>
    )
}
export default Footer