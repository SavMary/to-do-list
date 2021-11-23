import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";


function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={()=> toggleTask(todo.id)}>
                {todo.task}
            </div>
            
            <div className="item-delete" onClick={()=>removeTask(todo.id)}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </div>
            
        </div>
    )
}
export default ToDo;