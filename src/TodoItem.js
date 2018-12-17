import React,{Component} from 'react';
export default class TodoItem extends Component{
    render(){
        let todo =this.props.todo;
        return(
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1">
                        <input type="checkbox" checked={this.props.todo.completed} onChange={()=>this.props.toggle(todo.id)}/>
                    </div>
                    <div className="col-md-10" style={{textDecoration:todo.completed?'line-through':''}}>
                        {this.props.todo.title}
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-danger btn-sm" onClick={()=>this.props.remove(todo.id)}>X</button>
                    </div>
                </div>
            </li>
        )
    }
}