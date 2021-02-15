import React,{useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


function TodoList() {

    const [todos, setTodos] = useState([]);

    /*---------------- ADD TODO------------------------------ */
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {    //regex to no count spaces(spacebar/tab)
            return
        }
    

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    //console.log(todo,...todos);
    };

    /*---------------- UPDAATE TODO------------------------------ */
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {    //regex to no count spaces(spacebar/tab)
            return
        }

        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)));
    }

    /*---------------- REMOVE TODO------------------------------ */
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)   //find the todo to remove

        setTodos(removeArr);
    }

    
    /*---------------- COMPLETE TODO------------------------------ */
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;         //toggle true and false
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    

    return (
        <>
            <h1>TODO</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </>
    )
}

export default TodoList
