import React,{useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    //console.log(todos);

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        //console.log(todo);
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div className="" key={todo.id} onClick={() => completeTodo(todo.id)} >
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine className="delete-icon" onClick={() =>removeTodo(todo.id)}/>
                <TiEdit className="edit-icon" onClick={() =>setEdit({id: todo.id, value: todo.text})}/>
            </div>
        </div>
    ))
    
}

export default Todo
