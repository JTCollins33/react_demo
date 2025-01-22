import { useReducer } from "react";

export default function Page1(){

    const reducer = (state, action)=>{
        console.log(state)
        switch(action){
            case 'increment':
                return {count: state.count+1}
            case 'decrement':
                return {count: state.count-1}
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0});

    return(
        <div>
            <h3>This is page1</h3>
            <button onClick={()=> dispatch('increment')}>increment</button>
            <button onClick={()=> dispatch('decrement')}>decrement</button>
            <p>State: {state.count}</p>
        </div>
    );
}