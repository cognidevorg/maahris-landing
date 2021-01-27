import React from "react"
import styled from "styled-components"
import Image from "../../components/NetlifyCmsImage"

const Main = styled.div`
    display: block;
`
const Root = styled.div`
   display: flex;
   flex-direction: column;
   padding: 80px;
   background-color: #F5F5F5;
   @media (max-width: 500px){
    padding: 30px
    }
`
const Content = styled.div`
    margin: auto;
    max-width: 1608px;
`
const First = styled.div`
    display: flex;
    font-size: 24px;
    color: #AAA599;
    font-family: Nunito Sans;
    @media (max-width: 800px){
        flex-direction: column;
    }
    @media (max-width: 500px){
        font-size: 18px;
    }
`
const Title = styled.div`
    flex: 1;
    font-weight: 700;
    @media (max-width: 800px){
        margin-top: 20px;
        margin-bottom: 20px;
    }

`
const Description = styled.div`
    flex: 1;
`
const Second = styled.div`
    display: flex;
    font-size: 24px;
    color: #AAA599;
    margin-top: 60px;
    margin-bottom: 60px;
    justify-content: space-between;
    @media (max-width: 800px){
        flex-direction: column;
    }
    @media (max-width: 500px){
        font-size: 18px;
    }
`
const Pic = styled.div`
    flex: 1;
    font-size: 48px;
    line-height: 64px;
    font-family: univia-pro;
    flex-direction: column;
    max-width: 350px;
    @media (max-width: 1180px){
        max-width: 25vw;
        font-size: 35px;
        line-height: 47px;
    }
    @media (max-width: 800px){
        min-width: 350px;
        margin: auto;
        margin-bottom: 35px;
    }
    @media (max-width: 450px){
        min-width: 65vw;
        margin: auto;
        margin-bottom: 35px;
    }
`
const Design = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px;
    @media (max-width: 500px){
        padding: 30px
    }
`
const TitleDetail = styled.div`
    margin-top: 40px;
    font-weight: 500;
    line-height: 40px;
    margin-right: 80px;
    @media (max-width: 500px){
        line-height: 25px;
        margin-right: unset;
        margin-top: 30px;
    }
`
const DesignDescription = styled.div`
    flex: 1;
    font-size: 48px;
    line-height: 64px;
    color: #14415A;
    font-family: univia-pro;
    @media (max-width: 800px){
        font-size: 40px;
        line-height: 55px;
    }
    @media (max-width: 500px){
        font-size: 28px;
        line-height: 35px;
    }
    
`
const DesignImg = styled.div`
    display: flex;
    @media (max-width: 800px){
        flex-direction: column;
    }
`
const ImgC = styled.div`
    flex: 1;
`
const Projects = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px;
    @media (max-width: 500px){
        padding: 30px
    }
`
const ProjectTitle = styled.div`
    font-size: 24px;
    line-height:34px;
    font-weight: 700;
    font-family: Nunito Sans;
    margin-top: 30px;
    margin-bottom: 75px;
    color: #AAA599;
    @media (max-width: 500px){
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 30px;
    }
`
const ProjectDetail = styled.div`
    display: flex;
    @media (max-width: 800px){
        flex-direction: column;
    }
`
const ProjectDetailone = styled.div`
    flex: 1;
`
const ProjectDetailtwo = styled.div`
    flex: 1;
`
const D1 = styled.div`
    margin-left: 15%;
    font-size: 24px;
    line-height: 40px;
    font-family: Nunito Sans;
    color: #AAA599;
    @media (max-width: 800px){
        margin-left: unset;
    }
    @media (max-width: 500px){
        font-size: 18px;
        line-height: 30px;
    }
`
const D1T = styled.div`
    font-size: 48px;
    font-family: univia-pro;
    line-height: 64px;
    color: #14415A;
    margin-bottom: 30px;
    @media (max-width: 800px){
        font-size: 40px;
        line-height: 53px;
        margin-top: 30px;
    }
    @media (max-width: 500px){
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 20px;
    }
`
const Footer= styled.div`
    display: block;
    max-height: 496px;
    position: relative;
    & .gatsby-image-wrapper{
        min-height: 496px;
        @media (max-width: 500px){
            min-height: 260px;
        }
    }
`
const FooterText= styled.div`
    position: absolute;
    color: white;
    font-size: 24px;
    line-height: 40px;
    font-family: Nunito Sans;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: max-content;
    max-height: 200px;
    text-align: center;
    max-width: 540px;
    @media (max-width: 800px){
        max-width: 70vw;
        font-size: 18px;
        line-height: 24px;
    }
`

const OurRoots = (props) => {
    const {content} = props
    return (
        <Main>
            <Root>
                <Content>
                    <First>
                        <Title>{content.sectionFirstTopic}</Title>
                        <Description>{content.sectionFirstTopicDetail}</Description>
                    </First>
                    <Second>
                        <Pic>{content.sectionFirstTopicHeading1}
                <Image imageUrl={content.sectionFirstTopicImg1} className="object-cover" />
                        </Pic>
                        <Pic>{content.sectionFirstTopicHeading2}
            <Image imageUrl={content.sectionFirstTopicImg1} className="object-cover" />
                        </Pic>
                        <Pic>{content.sectionFirstTopicHeading3}
            <Image imageUrl={content.sectionFirstTopicImg1} className="object-cover" />
                        </Pic>
                    </Second>
                </Content>
            </Root>
            <Design>
                <Content>
                    <First>
                        <Title>{content.sectionSecondTopic}
                    <TitleDetail>
                    {content.sectionSecondTopicDetail}                    
                    </TitleDetail>
                        </Title>
                        <DesignDescription>
                           {content.sectionSecondTopicPlan}
                </DesignDescription>
                    </First>
                </Content>
            </Design>
            <DesignImg>
                <ImgC><Image imageUrl={content.sectionBackgroundImg1} className="object-cover" /></ImgC>
                <ImgC><Image imageUrl={content.sectionBackgroundImg2} className="object-cover" /></ImgC>
            </DesignImg>
            <Projects>
                <Content>
                    <ProjectTitle>{content.sectionThirdTopic}</ProjectTitle>
                    <ProjectDetail>
                        <ProjectDetailone>
                        <Image imageUrl={content.sectionThirdTopicImg} className="object-cover" />
                        </ProjectDetailone>
                        <ProjectDetailtwo>
                            <D1>
                                <D1T>{content.sectionThirdTopicHeading}</D1T>
                                {content.sectionThirdTopicDetail}
                        </D1>
                        </ProjectDetailtwo>
                    </ProjectDetail>
                </Content>
            </Projects>
            <Footer>
            <Image imageUrl={content.sectionLastImg} className="object-cover" />
                <FooterText>{content.sectionLastImgText}</FooterText>
            </Footer>
        </Main>
    )
}

export default OurRoots;