import { useNavigate } from "react-router-dom";

export default function UseCallback(){
    const navigate = useNavigate();
    return(
        <div>
            

            <br/><br/>
            <button onClick={()=>navigate("/")}>Go Home</button>
        </div>
    );
}