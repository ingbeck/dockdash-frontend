import axios from "axios";
import { FormEvent, useState } from "react";
//import { useNavigate } from "react-router-dom";

export default function RegisterPage () {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    //const navigate = useNavigate();

    function register(){
        axios.post("api/users/register", {
            "username": username,
            "password": password,
            "firstName": firstName,
            "lastName": lastName
        })
        .then(() => {
            setUsername("");
            setPassword("");
            setFirstName("");
            setLastName("");
            console.log("registered")
        })
        .catch((e) => {
            setUsername("");
            setPassword("");
            setFirstName("");
            setLastName("");
            console.log(e);
        })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        register();
    }

    return (
        <>
        <h1>Registrierung</h1>
        <form onSubmit={handleSubmit}>
            <div className={"form-input-wrapper"}>
                <input placeholder={"Vorname"} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input placeholder={"Nachname"} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <input placeholder={"Benutzer"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder={"Passswort"} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button>Speichern</button>
        </form>
        </>

    );
}
