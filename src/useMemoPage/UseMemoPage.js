import { useMemo, useReducer, useState } from "react";

export default function UseMemo(){
    const reducer = (state, action) => {
        switch(action){
            case 'increment':
                return {value: state.value + 1};
            case 'decrement':
                return {value: state.value-1};
        }
    }



    const [a, dispatchA] = useReducer(reducer, {value: 1});
    const [b, dispatchB] = useReducer(reducer, {value: 11});

    const [sum, setSum] = useState(0);


    const calculate = (a, b) => {
        console.log("in the calculate function");
        setSum(a+b);
    }

    const memoizedValue = useMemo(()=>calculate(a,b), [a,b])

    return(
        <div>
            <h1>Use Memo Example</h1>
            <h4>A value: {a.value}</h4>
            <button onClick={()=>dispatchA('increment')}>Increment A</button>
            <button onClick={()=>dispatchA('decrement')}>Decrement A</button>

            <h4>B value: {b.value}</h4>
            <button onClick={()=>dispatchB('increment')}>Increment B</button>
            <button onClick={()=>dispatchB('decrement')}>Decrement B</button>

            <br/>
            <h4>Do something</h4>
            <button onClick={()=>console.log("do something")}>Click</button>

            <br/>
            <h4>Memoized Value: {sum}</h4>
            <button onClick={()=>calculate(a.value, b.value)}>Calculate sum</button>

        </div>
    );
}