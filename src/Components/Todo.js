import React, { Component } from 'react'

class Todo extends Component{
    constructor(){
        super();
        this.state={
            tasks : [{task : 'check emails',id : 1},{task : 'codeforces',id : 2},{task : 'dev',id  :3}],
            currTask : ""
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            currTask : e.target.value
        })
    }
    handleSubmit=(e)=>{
        this.setState({
            tasks : [...this.state.tasks,{task : this.state.currTask,id : this.state.tasks.length+1}],
            currTask : ""
        })
    }
    handleDelete=(id)=>{
        const newArr=this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id
        })
        this.setState({
            tasks : [...newArr]
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}> submit </button>
                <ul>
                {
                    this.state.tasks.map((taskObj)=>
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick={()=>this.handleDelete(taskObj.id)}>delete</button>
                        </li>
                    )
                }
                </ul>
            </div>
        )
    }
}
export default Todo

