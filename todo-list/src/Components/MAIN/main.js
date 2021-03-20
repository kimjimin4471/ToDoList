import React from 'react';
import * as s from './style';

const MainPage = () => {
    return(
        <s.ContentCenter>
            <s.MainContainer>
                <p className="title">오늘 할 일</p>
                <form>
                    <input placeholder="할 일을 입력하세요" className="todolistInput"></input>
                    <button className="addBtn">추가</button>
                </form>

                <s.listContainer>
                    <li>안녕</li>
                    <li>안녕</li>
                    <li>안녕</li>
                </s.listContainer>
            </s.MainContainer>
        </s.ContentCenter>
    );
};

export default MainPage;