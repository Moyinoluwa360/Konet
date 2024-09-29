import styled from "styled-components";
import PostModal from "./postModal"
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getArticlesAPI } from "../actions";
import ReactPlayer from "react-player";

const Main = (props) => {
    const [showModal, setShowModal] = useState("close")

    useEffect(()=>{
        props.getArticles()
    },[])

    const handleClick= (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget){
            return;
        }

        switch(showModal){
            case "open":
                setShowModal("close")
                break;
            case "close":
                setShowModal("open")
                break;
            default:
                setShowModal("close")
                break;
        }
    }
  return (
    <>
        {
            props.articles.length === 0 ?
            <p>There are no Articles</p>
            :
            <Container>
                <ShareBox>
                    <div>
                    { props.user && props.user.photoURL ?
                    <img src={props.user.photoURL} alt=""/>:
                    <img src="/assets/user.svg" alt="" />
                        }
                        <button onClick={handleClick} 
                        disabled={props.loading? true: false}>Start a post</button>
                    </div>
                    <div>
                        <button>
                            <img src="/assets/picture-icon.png" alt="" />
                            <span>Photo</span>
                        </button>
                        <button>
                            <img src="/assets/video-icon.png" alt="" />
                            <span>Video</span>
                        </button>
                        <button>
                            <img src="/assets/event.png" alt="" />
                            <span>Event</span>
                        </button>
                        <button>
                            <img src="/assets/article-icon.png" alt="" />
                            <span>Write airticle</span>
                        </button>
                    </div>
                </ShareBox>
                <Content>
                    {
                        props.loading && <img src="/assets/infinite-spinner.svg" alt="" width={"100px"} height={"100px"} />
                    }
                    {props.articles.length > 0 && 
                    props.articles.map((article, key)=>(
                    <Article key={key}>
                        <SharedActor>
                            <a>
                                <img src={article.actor.image} alt="" />
                                <div>
                                    <span>{article.actor.title}</span>
                                    <span>{article.actor.description}</span>
                                    <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                                </div>
                            </a>
                            <button>
                                <b>. . .</b>
                            </button>
                        </SharedActor>
                        <Description>{article.description}</Description>
                        <SharedImg>
                            <a>
                                {
                                    !article.SharedImg && article.video
                                     ?
                                    <ReactPlayer width={"100%"} url={article.video} /> 
                                :
                                (
                                article.sharedImg && <img src= {article.sharedImg} alt="" />
                                )
                            }
                            </a>
                        </SharedImg>
                        <SocialCounts>
                            <li>
                                <button>
                                    <img src="/assets/thumb-up.svg" alt="" />
                                    <img src="/assets/heart.svg" alt="" />
                                    <span>75</span>
                                </button>
                            </li>
                            <li>
                                <a>
                                    0 comments
                                </a>
                            </li>
                        </SocialCounts>
                        <SocialActions>
                            <button>
                                <img src="/assets/thumb-up.svg" alt="" />
                                <span>Like</span>
                            </button>
                            <button>
                                <img src="/assets/comment.svg" alt="" />
                                <span>Comment</span>
                            </button>
                            <button>
                                <img src="/assets/share.svg" alt="" />
                                <span>Share</span>
                            </button>
                            <button>
                                <img src="/assets/send.svg" alt="" />
                                <span>Send</span>
                            </button>
                        </SocialActions>
                        
                    </Article>
                    ))}
                </Content>
                
                <PostModal showModal={showModal} handleClick={handleClick} />
            </Container>
        }
    </>
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
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            align-items: flex-start;
            span{
                text-align: center;
                &:first-child{
                    font-size: px;
                    font-weight: 700;
                    color:#000000;
                }

                &:nth-child(n + 1){
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button{
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`
const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0,0,0,0.9);
    text-align: left;
    font-size: 14px;
`
const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #838383;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;

    }
`
const SocialCounts =styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 0 16px;
    padding: 8px 0;
    border: 1px solid #e9e5df;
    list-style: none;
    li{
        margin-right: 5px;
        font-size: 12px;
    }
    button{
        display: flex;
        width: 70px;
        justify-content: center;
        align-items: center;
        img{
            height: 20px;
        }
    }
`
const SocialActions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    min-height: 40px;
    padding: 8px;
    button{
        display: inline-flex;
        padding: 8px;
        align-content: center;
        @media (min-width: 760px){
            span{
                margin-left: 8px;
            }
        }
        img{
            height: 15px;
            width: 15px;
        }
    }
`
const Content = styled.div`
    text-align: center;
    & > {
        width:30px;
    }
`

const mapStateToProps = (state)=>{
    return{
        loading: state.articleState.loading,
        user: state.userState.user,
        articles: state.articleState.articles,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticlesAPI())
})
export default connect(mapStateToProps,mapDispatchToProps)(Main)