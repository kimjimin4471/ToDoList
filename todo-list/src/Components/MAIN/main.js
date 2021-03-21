import React, {useState, memo} from 'react';
import ListUl from './list/list';
import * as s from './style';

const MainPage = () => {
    const [ inputList, setInputList ] = useState("");
    const [ todolist, setTodolist ] = useState([]);

    const onChangeList = (e) => {
        setInputList(e.target.value);
    }

    const onSubmitList = (e) => {
        e.preventDefault();
        if(inputList !== "") {
            setTodolist([
                ...todolist,
                inputList,
            ], console.log(todolist));
        }
        else {
            alert("내용을 입력하세요.");
        }
    };

    return(
        <s.ContentCenter>
            <s.MainContainer>
                <p className="title">오늘 할 일</p>
                <form onSubmit={onSubmitList}>
                    <input placeholder="할 일을 입력하세요" className="todolistInput" onChange={onChangeList}></input>
                    <button className="addBtn">추가</button>
                </form>

                <s.listContainer>
                    <ListUl todolist = {todolist}></ListUl>
                </s.listContainer>
            </s.MainContainer>
        </s.ContentCenter>
    );
};

export default MainPage;