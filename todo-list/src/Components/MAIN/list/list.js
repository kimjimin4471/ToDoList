import React from 'react';

const ListUl = (props) =>{
    console.log(props.todolist);

    return(
        <>
            {props.todolist.map((v) => {
                return(
                    <li>{v}</li>
                )
            })}
        </>
    );
}

export default ListUl;