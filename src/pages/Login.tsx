import axios from "axios";
import "./Login.css"
import { FormEvent, useState } from "react";

export default function App () {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function login(){
        axios.post("/api/users/login", {}, {
            auth:{
                username: username,
                password: password
            }
        })
        .then(() => console.log("logged in"))
        .catch((e) => console.log(e));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        login();
    }

    return (
        <form onSubmit={handleSubmit}>
        <h1>Dock Dash</h1>
            <div className={"login-wrapper"}>
                <input placeholder={"Username"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder={"Passswort"} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="card">
                <button>
                    Login
                </button>
            </div>
        </form>
    );
}
