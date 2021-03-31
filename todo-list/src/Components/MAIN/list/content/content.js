import React, {useState} from 'react';
import * as s from './style';

const Content = (props) => {
    const [contentChecked, setContentChecked] = useState(false);

    const onClickContent = () =>{
        if(contentChecked){
            setContentChecked(false);
            return;
        }
        else {
            setContentChecked(true);
            return;
        }
    };

    return(
        <>
            <s.ListContainer>
                <li onClick={onClickContent} style={contentChecked ? {textDecorationLine: 
                'line-through'} : null}>{props.value}</li>
                <p>{contentChecked? "✅" : null}</p>
            </s.ListContainer>
        </>
    );
}

export default Content;