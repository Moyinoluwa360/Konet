import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
        <ShareBox>
            <div>
                <img src="/src/assets/user.svg" alt="" />
                <button>Start a post</button>
            </div>
            <div>
                <button>
                    <img src="/src/assets/picture-icon.png" alt="" />
                    <span>Photo</span>
                </button>
                <button>
                    <img src="/src/assets/video-icon.png" alt="" />
                    <span>Video</span>
                </button>
                <button>
                    <img src="/src/assets/event.png" alt="" />
                    <span>Event</span>
                </button>
                <button>
                    <img src="/src/assets/article-icon.png" alt="" />
                    <span>Write airticle</span>
                </button>
            </div>
        </ShareBox>
        <div>
            <Article>
                <SharedActor>
                    <a>
                        <img src="/src/assets/user.svg" alt="" />
                        <div>
                            <span>Title</span>
                            <span>Info</span>
                            <span>Dates</span>
                        </div>
                    </a>
                    <button>
                        <b>. . .</b>
                    </button>
                </SharedActor>
            </Article>
        </div>
    </Container>
  )
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
    div{
        button{
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;           
            min-height: 48px;
            background-color: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
            img{
                height: 25px;
                width: 25px;
            }
        }
        &:first-child{
            display: flex;
            align-items: center;
            padding: 8px 16px 0 16px;
            img{
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button{
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: #eeeeee;
                text-align: center;
            }
        }
        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button{
                img{
                    margin: 0 4px 0 -2px;
                }
                span{
                    color: #868686;
                }
            }
        }
    }
`
const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;

`
const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            width: 48px;
            height: 48px;
        }
        & > div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
    }
`


export default Main;