import * as React from 'react';

interface Iprops {
    name:string;
}
const Func = (props:Iprops) => {
    return (
        <div>
            {props.name}
        </div>
    )
}
export default Func