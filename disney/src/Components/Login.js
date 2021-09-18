import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    GET PREMIER DISNEY+ SUBSCRIPTION
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
            
        </Container>
    )
}

export default Login
const Container=styled.div`
display:flex;
align-items:top;
justify-content:center;
position:relative;
height:calc(100vh - 70px);
&::before{
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-image :url("/images/login-background.jpg");
    z-index:-1;
    opacity:0.7;
    content:"";

}
`
const CTA=styled.div`
max-width:650px;
padding: 150px 40px;
width:90%;
display:flex;
flex-direction:column;
align-items:center;
`
const CTALogoOne=styled.img`
`
const SignUp =styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;
&:hover{
    background:#0483ee;
}
`
const Description =styled.div`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5px
`
const CTALogoTwo=styled.img`
padding:20px 0 ;
width:90%
`


