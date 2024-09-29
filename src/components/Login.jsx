import styled from "styled-components";
import { connect } from "react-redux";
import { signInApi } from "../actions";
import { Navigate } from "react-router-dom";
const Login = (props) => {
    return(
        <Container>
            {
                props.user &&
                <Navigate to="/home"/>
            }
            <Nav>
                <a href="/">
                    <img src="src/assets/konet.jpg" alt="" />
                    <span className="logo">Konet</span>
                </a>
                <div>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>
                        Sign in
                    </SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to the <b>Konet</b> Professional community </h1>
                    <img src="src/assets/sign-in-img.jpg" alt="" />
                </Hero>
                <Form>
                    <Google onClick={()=>{
                        props.signIn()
                    }}>
                        <img src="src/assets/google.svg" alt="" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.nav`
    padding: 0px;
`;

const Nav = styled.nav`
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
    width:135px;
    height: 34px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bolder;
    @media (max-width:760px){
        padding: 0 5px;
    }
    }

    & > a > img{
        height: 34px;
        padding-left: 50px;
        @media (max-width:760px){
        padding: 0 5px;
    }
    }

    & > span{

    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    &:hover{
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
        border-radius: 4px;
    }
    @media (max-width:600px){
        display: none;
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #474545;
    color: #222121;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: white;
    &:hover{
        background-color:#ada7a7 ;
        color: #202020 ;
        text-decoration: none;
    }
    @media (max-width:760px){
        margin-right:10px;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start ;
    min-height: 700px;
    padding-bottom: 130px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    margin: auto;
    @media (max-width:760px){
        margin: auto;
        min-height: 0px;
        flex-direction: column;
    }
`
const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0%;
        width: 50%;
        margin-left: 30px;
        font-size: 60px;
        color: #5f5f5f;
        font-weight: 500;
        line-height: 70px;
        text-align: center;
        @media (max-width:760px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
            margin-left: 0%;
    }
    }
    img{
        width:1000px;
        height: 900px;
        position: absolute;
        bottom: -100px;
        right: -1%;
        border-radius: 50%;
        @media (max-width:760px){
            top: 230px;
            left: 0;
            width: 100%;
            height: 500px;
            border-radius: 50%;
            position: initial;
    }
    }
`
const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width:760px){
        margin-top: 20px;
    }

`
const Google = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dddddd;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60%), 
        inset 0 0 0 2px rgba(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    
    vertical-align: middle;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    margin-left: 45%;
    &:hover{
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
    }
    @media (max-width:760px){
        margin-top: 20px;
    }
`

const mapStateToProps = (state)=>{
    return{
        user: state.userState.user,
    }
}

const mapDispachToProps = (dispatch) => ({
    signIn: () => dispatch(signInApi())
})

export default connect(mapStateToProps,mapDispachToProps)(Login)