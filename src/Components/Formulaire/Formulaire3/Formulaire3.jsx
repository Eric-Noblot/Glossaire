import "./formulaire3.scss"
import { useState } from "react"

 export default function Formulaire3()  {

    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        setTodos(currentTodos => {
            return [
                ...currentTodos,
                {id: crypto.randomUUID(), title: newItem, completed: false }
            ]
        })
        setNewItem("")
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                }
                return todo   
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })

    }

    return (
        <div className="form-cont">
        <form onSubmit = {handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor = "form-item">New Item</label>
                <input 
                value={newItem} 
                onChange={e => setNewItem(e.target.value)}
                type="text" id="form-item" />
            </div>
            <button className="btn-add">Add</button>
        </form>
        <h1 className="form-header">To do List</h1> 
        <ul className = "form-ul">
            {todos.length === 0 && "No todos"}
            {todos.map(todo => {
                return (
                    <li key={todo.id} className="form-li">
                    <label>
                        <input 
                        onChange = {e => toggleTodo(todo.id, e.target.checked)} type="checkbox" checked={todo.completed} className="form-check" />
                        {todo.title}
                    </label>
                    <button onClick= {() => deleteTodo(todo.id)} className="btn-delete">Delete</button>
                </li>
                )
            })}
        </ul>
        </div>
    )
}


