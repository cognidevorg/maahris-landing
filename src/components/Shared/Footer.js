import React from "react"
import styled from "styled-components"
import Facebook from "../../images/assets/facebook.svg"
import Instagram from "../../images/assets/instagram-glyph-1.svg"
import Twitter from "../../images/assets/twitter.svg"

const Root= styled.div`
    display: flex;
    height: 320px;
    background-color: #14415A;
    color: white;
    padding: 150px 140px 100px 140px;
    @media (max-width: 800px){
        height: 268px;
        padding: 40px;
        flex-direction: column-reverse;
    }
    @media (max-width: 420px){
        padding: 20px;
        height: 214px;
    }
`
const W= styled.div`
    flex: 1;
    text-align: right;
    font-size: 24;
    font-family: Nunito Sans;
    font-weight: 600;
    display: flex;
    align-items: center;
    @media (max-width: 800px){
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    @media (max-width: 420px){
        font-size: 14px;
    }
`
const Address= styled(W)`
    justify-content: flex-end;

`
const Social= styled.a`
    padding-left: 15px;
    padding-right: 15px;
    @media (max-width: 420px){
        padding-left: 8px;
        padding-right: 8px;
    }
`
const Icons= styled.div`
    padding-left: 80px;
    display: flex;
    @media (max-width: 800px){
        padding-left: 0px;
    }
`
const Footer =()=>{
    const address= "786-245-3590   |   78 Park Way, Berkeley, RI" 
    
    return(
        <Root>
            <W>©2020 Maāhris
                <Icons>
                <Social target="_blank" href="https://www.twitter.com"><Twitter/></Social>
                <Social target="_blank" href="https://www.instagram.com"><Instagram/></Social>
                <Social target="_blank" href="https://www.facebook.com"><Facebook/></Social>
                </Icons>
            </W>
            <Address>{address}</Address>
            
        </Root>
    )
}
export default Footer