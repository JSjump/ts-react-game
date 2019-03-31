import React,{Component} from 'react';

interface IProps {
    name:string;
    age:number;
}
interface IState {
    name:string;
    age:number;
}


class Form extends Component <IProps,IState>{
    state = {
        name:'zhhhh',
        age:13,
    }
    render (){
        return (
            <div>
                detail
                {this.props.name}+{this.props.age}
                <p>{this.state.name}+{this.state.age}</p>
            </div>
        )
    }
}
export default Form;