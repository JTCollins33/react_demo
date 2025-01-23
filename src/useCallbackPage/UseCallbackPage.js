import { useCallback, useState } from "react";
import Todos from "./Todos";

export default function UseCallback(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const addTodo = useCallback(()=> {
        setTodos([...todos, "new todo"]);
    }, [todos]);

    const addCount = () => {
        setCount((count) => count+1);
    }

    return(
        <div>
            <h2>This is the useCallback Page</h2><br/>
            <Todos todos={todos} addTodo={addTodo}/>
            <br/><br/>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add count</button>
        </div>
    );
}