import styled from 'styled-components';

export const ContentCenter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MainContainer = styled.div`
    background: white;
    width: 512px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); /* 그림자 */ 
    margin: 0 auto; /* 페이지 중앙 정렬 */
    margin-top: 4rem;

    .title{
        padding: 2rem;
        font-size: 2.5rem;
        text-align: center;
        font-weight: 100;
        background: #22b8cf;
        color: white;
        margin: 0;
    }

    form{
        border-bottom: 1px solid #22b8cf;
    }

    .todolistInput{
        border: none;
        outline: none;
        font-size: 30px;
        margin-top: 20px;
        padding-left: 20px;
        margin-bottom: 20px;
    }

    .addBtn{
        cursor: pointer;
        margin-left: 20px;
        font-size: 20px;
        color: white;
        background-color: #22b8cf;
        border: none;
        padding: 5px 20px;
        outline: none;
    }
`

export const listContainer = styled.ul`
    width: 100%;
    list-style: none;
    font-size: 20px;
    height: 550px;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 0;
    }

    li{
        cursor: pointer;
        margin-bottom: 20px;
        width: 400px;
    }
`