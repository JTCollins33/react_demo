import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todos from "./Todos";

export default function UseCallback(){
    console.log("in the useCallback page")
    const navigate = useNavigate();

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

            <br/><br/>
            <button onClick={()=>navigate("/")}>Go Home</button>
        </div>
    );
}