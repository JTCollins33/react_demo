import { memo } from "react";

const Todos = (props)=>{
    console.log("in the todos child component")
    return(
        <div>
            <h2>This is the Todos page</h2><br/>
            {props.todos.map((todo, index)=> {
                return <p key={index}>{todo}</p>
            })}
            <button onClick={props.addTodo}>Add Todo</button>
        </div>
    );
}

export default memo(Todos);