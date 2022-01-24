import styled from 'styled-components'


export const ContainRetry = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h3,p,button{
        color:#273c75;
    }
    h3{
        font-size:35px;
        margin:40px 0 5px 0;
    }
    p{
        display:block;
        margin:5px 0 60px 0;
    }
    b{
        color:#44bd32;
        font-size:24px;
        margin:0 3px;
    }
`

export const TryAgain = styled.button`
    width: 180px;
    height: 50px;
    font-size:18px;
    outline: 1px solid #273c75;
    border-radius: 10px;
    background-color: transparent;
    border:none;
    cursor: pointer;
`