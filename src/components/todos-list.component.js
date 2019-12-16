import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const Todo = props => (
    <tr>
        <td>
            <button className="btn" onClick={function() {
                console.log('clicked '+props.todo._id+' completed: '+props.todo.todoCompleted);
                
                const obj = {
                    todoDescription: props.todo.todoDescription,
                    todoResponsible: props.todo.todoResponsible,
                    todoPriority: props.todo.todoPriority,
                    todoCompleted: !props.todo.todoCompleted
                };

                axios.post('http://localhost:4000/todos/update/'+props.todo._id, obj)
                .then(res => document.location.reload());
            }}>
                <FontAwesomeIcon icon={props.todo.todoCompleted ? faCheckCircle : faCircle} />
            </button>
        </td>
        <td className={props.todo.todoCompleted ? 'completed' : ''}>{props.todo.todoDescription}</td>
        <td className={props.todo.todoCompleted ? 'completed' : ''}>{props.todo.todoResponsible}</td>
        <td className={props.todo.todoCompleted ? 'completed' : ''}>{props.todo.todoPriority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos')
            .then(response => {
                this.setState({todos: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, index) {
            return <Todo todo={currentTodo} key={index} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Complete</th>   
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}