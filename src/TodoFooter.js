import React,{Component} from 'react';
import * as filterTypes from "./filter-types";
export default class TodoFooter extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-4 text-center">
                    There are {this.props.activeTodoCount}to do lists
                </div>
                <div className="col-xs-6 text-center">
                    <button className="btn btn-default btn-sm" style={{marginLeft:10}} onClick={()=>this.props.changeFilterType(filterTypes.ALL)}>All</button>
                    <button  className="btn btn-default btn-sm" style={{marginLeft:10}} onClick={()=>this.props.changeFilterType(filterTypes.ACTIVE)}>To do</button>
                    <button  className="btn btn-default btn-sm" style={{marginLeft:10}} onClick={()=>this.props.changeFilterType(filterTypes.COMPLETED)}>Completed</button>
                </div>
                <div className="col-xs-3 text-center">

                </div>
            </div>
        )
    }
}