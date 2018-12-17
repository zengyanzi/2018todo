import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';
import * as filterTypes from "./filter-types";

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[
                // {id:Math.random(),title:'Today to do list',completed:true},
                // {id:Math.random(),title:'Tomorrow to do list',completed:false}
            ],
            filterTypes:filterTypes.ACTIVE
        };// default state
    }
    addTodo=(todo)=>{
        // todo.id = Date.now();
        // todo.completed = false;
        todo =Object.assign({},{id:Date.now(),completed:false},todo);
        let todos=this.state.todos;
        todos.push(todo);
        this.setState({
            todos
        })
        // todo ={id:Date.now(),completed:false,...todo}
    }
    toggle=(id)=>{
        let todos=this.state.todos;
        todos.map(todo=>{
            if (todo.id ===id){
                todo.completed=!todo.completed;
            }
            return todo;
        })
        this.setState({todos});
    }
    remove=(id)=>{
        let todos=this.state.todos;
        let index =todos.findIndex(todo=>todo.id===id);
        todos.splice(index,1);
        this.setState({todos})
    }
    toggleAll=(event)=>{
       let checked = event.target.checked;
        let todos=this.state.todos;
        todos.map(todo=>{
            todo.completed=checked;
            return todo;
        });
        this.setState({todos})
    }
    changeFilterType=(filterType)=>{
        this.setState({filterType})
    }
    render(){
        let todos=this.state.todos;
        let activeTodoCount = todos.reduce((count,todo)=>
            count+(todo.completed?0:1),0);
        let showTodos =todos.filter((todo)=>{
            switch (this.state.filterTypes) {
                case filterTypes.ACTIVE:
                    return !todo.completed;
                case filterTypes.COMPLETED:
                    return todo.completed;
                default:
                    return true;
            }
        })
        let main =(
            <ul className="list-group">
                {
                    todos.length>0?<li className="list-group-item">
                        <input type="checkbox" checked={activeTodoCount===0} onChange={this.toggleAll}/>{activeTodoCount===0?'Cancel All':'Selected All'}
                    </li>:null
                }

                {showTodos.map((todo,index)=>
                    <TodoItem toggle={this.toggle} key={index} todo={todo} remove={this.remove}/>
                )}
            </ul>
        )
        return(
            <div className="container" style={{marginTop:20}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.addTodo} />
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">
                                <TodoFooter activeTodoCount={activeTodoCount} changeFilterType={this.changeFilterType}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}