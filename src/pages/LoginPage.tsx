import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage () {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    function login(){
        axios.post("/api/users/login", {}, {
            auth:{
                username: username,
                password: password
            }
        })
        .then(() => {
            setPassword("");
            setUsername("");
            navigate("/dashboard");
        })
        .catch((e) => {
            setPassword("");
            console.log(e);}
        );
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        login();
    }

    return (
        <>
        <h1>Dock Dash</h1>
        <form onSubmit={handleSubmit}>
            <div className={"form-input-wrapper"}>
                <input placeholder={"Username"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder={"Passswort"} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>Login</button>
        </form>
        </>
    );
}
