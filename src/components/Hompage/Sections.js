import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "../NetlifyCmsImage"
import CTA from "../../images/assets/CTA.svg"

const Root = styled.div`
  padding: 180px 140px;
  display: flex;
  @media (max-width: 1210px) {
    padding: 180px 40px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 100px 40px;
    padding-right: 0px;
  }
  @media (max-width: 420px) {
    padding: 0px;
  }
`
const ImgContainer = styled.div`
  flex: 2;
  padding: 0px 110px;
  position: relative;
  display: block;
  @media (max-width: 1024px) {
    padding: 0px 40px;
  }
  @media (max-width: 800px) {
    padding-right: 0px;
    padding-bottom: 50px;
  }
  @media (max-width: 420px) {
    padding: 0px;
  }
`
const Detail = styled.div`
  flex: 1;
`
const Data = styled.div`
  max-width: 348px;
  margin: auto;
  font-size: 24px;
  line-height: 30px;
  height: 100%;
  font-family: Nunito Sans;
  color: #14415a;
  display: flex;
  flex-direction: column;
  @media (max-width: 1324px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media (max-width: 800px) {
    max-width: 60vw;
    font-size: 18px;
    line-height: 25px;
  }
  @media (max-width: 500px) {
    max-width: 80vw;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 25px;
  }
`
const Title = styled.div`
  position: absolute;
  font-size: 66px;
  line-height: 100px;
  font-family: univia-pro;
  color: #aaa599;
  max-width: 400px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  height: max-content;
  @media (max-width: 420px) {
    position: relative;
    font-size: 32px;
    line-height: 40px;
    max-width: 80vw;
    margin: 15px auto;
  }
`
const CTAIcon = styled(CTA)`
  @media (max-width: 420px) {
    width: 190px;
  }
`
const LinkMod = styled(Link)`
  text-decoration: none;
  margin-top: auto;
  @media (max-width: 800px) {
    margin-top: 30px;
  }
`

const FirstPageTemplate = ({ content }) => {
  const { title, description, photo, slug } = content
  return (
    <Root className="animate__animated animate__fadeInLeft">
      <ImgContainer>
        <Image imageUrl={photo} className="object-cover" />

        <Title>{title}</Title>
      </ImgContainer>
      <Detail>
        <Data>
          {description}

          <LinkMod to={`/${slug}`}>
            <CTAIcon />
          </LinkMod>
        </Data>
      </Detail>
    </Root>
  )
}

export default FirstPageTemplate
