import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();

    const navigateUseCallbackPage = ()=>{
        navigate("/useCallbackPage")
    }

    const navigateUseMemoPage = ()=>{
        navigate("/useMemoPage")
    }

    const navigateUseReducerPage = ()=>{
        navigate("/useReducerPage")
    }

    const navigateUseContextPage = ()=>{
        navigate("/useContextPage")
    }
    const navigatePropDrillingSolutionPage = ()=>{
        navigate("/propDrillingSolutionPage")
    }


    return(
        <div>
            <h3>This is the home page</h3>
            <br/>
            <button onClick={navigateUseCallbackPage}>Go to Callback page</button>
            <button onClick={navigateUseMemoPage}>Go to Memo page</button>
            <button onClick={navigateUseReducerPage}>Go to Reducer page</button>
            <button onClick={navigateUseContextPage}>Go to Context page</button>
            <button onClick={navigatePropDrillingSolutionPage}>Go to prop drilling solution page</button>
        </div>
    );
}