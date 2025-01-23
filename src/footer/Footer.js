import { useNavigate } from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();

    return(
        <div>
            <footer>
                <br/><br/><br/>
                <button onClick={()=>navigate("/")}>Go Home</button>
            </footer>
        </div>
    );
}