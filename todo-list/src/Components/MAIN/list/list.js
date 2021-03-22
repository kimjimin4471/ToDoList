import React, {memo} from 'react';
import Content from './content/content';

const ListUl = memo((props) =>{
    console.log(props.todolist);

    return(
        <>
            {props.todolist.map((v, i) => {
                return(
                    <Content key={i} value = {v}></Content>
                )
            })}
        </>
    );
});

export default ListUl;