import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
            <Nav>
                <a href="/">
                    <img src="/src/assets/konet.jpg" alt="" />
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
`;

export default Login