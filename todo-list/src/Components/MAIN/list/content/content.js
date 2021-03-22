import React, {useState} from 'react';

const Content = (props) => {
    const [contentChecked, setContentChecked] = useState(false);

    const onClickContent = () =>{
        if(contentChecked){
            setContentChecked(false);
        }
        else {
            setContentChecked(true);
        }
    };

    return(
        <li onClick={onClickContent} style={contentChecked ? {textDecorationLine: 
        'line-through'} : null}>{props.value}</li>
    );
}

export default Content;