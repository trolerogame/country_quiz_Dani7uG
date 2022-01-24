import styled,{css} from 'styled-components';


export const ContainCard = styled.div`
    width: 375px;
    background-color:#fff;
    border-radius:15px;
    position: relative;
    padding:20px;
    padding-top:40px;
`

export const ImgAdventure = styled.img`
    position:absolute;
    right:0;
    top:-70px;
    width:140px;
    object-fit: cover;
`

export const Question = styled.b`
    display: block;
    color:#192a56;
    font-size:25px;
    margin:20px 0;
    font-weight:600;
    img{
        width: 100px;
    }
`

export const Title = styled.h1`
    position:absolute;
    font-size:40px;
    color:#fff;
    top:-80px;
    left:0;
`

export const ContainAnswers = styled.div`
    display: flex;
    flex-direction: column;
`

export const Answer = styled.button`
    border: none;
    width:100%;
    height: 50px;
    background:${props => !props.isTrue ? 'none' : props.isTrue};
    outline:${props => !props.isTrue ? '1px solid #273c75' : 'none'};
    cursor:pointer;
    color:${props => !props.isTrue ? '#273c75' : '#fff'};
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding:10px 20px;
    border-radius:15px;
    margin:15px 0;
    transition: all .2s linear;
    span{
        margin-right:30px;
        font-size:20px;
    }
    &:hover{
        background:orange;
        color:#fff;
        outline:none;
    }
`

export const ContainNext = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const Next = styled.button`
    border:none;
    outline:none;
    border-radius:10px;
    background:orange;
    font-size:18px;
    font-weight: 600;
    height:40px;
    color:#fff;
    width:80px;
    cursor:pointer;
`