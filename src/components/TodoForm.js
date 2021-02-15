import React,{useState, useEffect, useRef} from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() =>{
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();         //prevents the page from reloading when adding a todo

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                className="todo-input" 
                onChange={handleChange} 
                type="text" 
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                ref={inputRef}
            />
            <button className="todo-button">Add todo</button>

        </form>
    )
}

export default TodoForm
