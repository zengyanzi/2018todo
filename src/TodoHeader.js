import React,{Component} from 'react';
const ENTER_KEY=13;
export default class TodoHeader extends Component{
    constructor(props){
        super(props);
        this.state={title:''}
    }
    handleChange=(event)=>{
        this.setState({
            title:event.target.value
        })
    }
    handleKeyDown=(event)=>{
        event.preventDefault();
        if(event.keyCode ===ENTER_KEY && event.target.value.length>0) {
            let title =event.target.value;
            this.props.addTodo({title});
        };
    }
    render(){
        return(
            <form action="">
                <div className="form-group">
                    <input autoFocus={true} type="text" onChange={this.handleChange}  value={this.state.title}  onKeyDown={this.handleKeyDown} className="form-control"/>
                </div>
            </form>
        )
    }
}