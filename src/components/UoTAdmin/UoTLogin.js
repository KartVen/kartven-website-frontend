import "./UoTLogin.css"
import {useState} from "react";
import {AiFillBug} from "react-icons/ai";
import AuthService from "../../services/AuthService";

const UoTLogin = () => {
    const username = "kartven";
    const [password, setPassword] = useState("");

    const submitAuthForm = e => {
        e.preventDefault();
        AuthService.login(username, password)
            .then(() => window.location.reload());
    };

    return (
        <div className="login-box">
            <AiFillBug size={70} className="bug-ico"/>
            <form method="POST" className="auth-form">
                <div className="password-inp-box">
                    <input className="input-field"
                           type="text"
                           name="username"
                           placeholder="Enter username"
                           value={username}
                           onChange={() => {}}
                           style={{display: "none"}}
                    />
                    <input className="input-field"
                           type="password"
                           name="password"
                           placeholder="Enter password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value="GO"
                    onClick={e => submitAuthForm(e)}
                />
            </form>
        </div>
    );
}

export default UoTLogin;