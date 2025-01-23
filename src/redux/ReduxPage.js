import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function ReduxPage(){
    const navigate = useNavigate();

    const userName = useSelector((state)=>state.name);
    const userAge = useSelector((state)=>state.age);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>This is the Redux page</h2><br/><br/>

            <p>User Name: {userName}</p>
            <button onClick={()=>dispatch({type: "CHANGE_NAME"})}>Change name</button><br/>

            <p>User Age: {userAge}</p>
            <button onClick={()=>dispatch({type: "CHANGE_AGE"})}>Change age</button>

            <br/><br/>
            <button onClick={()=>navigate("/")}>Go Home</button>
        </div>
    );
}