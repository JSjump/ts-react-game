import React,{Component} from 'react';

interface IProps {
    name:string;
    age:number;
}
interface IState {
    name:string;
    age:number;
    [key:string]:string | number;
}

// class Form extends Component <{},IState>//若是没有props则将该参数设为空 {}；                           
class Form extends Component <IProps,IState>{
    state = {
        name:'zhhhh',
        age:13,
    }
    onChange = (e:React.FormEvent<HTMLInputElement>) => {
        const {name,value } =e.currentTarget;
        this.setState({
            [name]:value,
        })
    }
    render (){
        return (
            <div>
                detail
                {this.props.name}+{this.props.age}
                <p>{this.state.name}+{this.state.age}</p>
                <input onChange={this.onChange} type="text" name="name" value={this.state.name}/>
                <input onChange={this.onChange} type="text" name="age" value={this.state.age}/>
            </div>
        )
    }
}
export default Form;