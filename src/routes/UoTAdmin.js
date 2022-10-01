import ProjectListAdmin from "../components/UoTAdmin/CategoryListAdmin";
import {useEffect, useState} from "react";
import AuthService from "../services/AuthService";
import UoTLogin from "../components/UoTAdmin/UoTLogin";
import {useCookies} from "react-cookie";

const UoTAdmin = () => {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [isAdminCredentials, setIsAdminCredentials] = useState(false);
    const [cookies, setCookies, removeCookies] = useCookies(['user']);

    useEffect(() => {
        let user = cookies['user'] && cookies['user'] !== "undefined" ? JSON.parse(cookies['user']):AuthService.getCurrentUser()
        if (user) {
            setCurrentUser(user);
            setIsAdminCredentials(user.roles.includes("ROLE_ADMIN"));
            !cookies['user'] && cookies['user'] === "undefined" && setCookies('user', user);
        }
    }, []);

    const logout = () => {
        AuthService.logout();
        removeCookies('user');
        window.location.reload();
    }

    return (
        <section style={{maxWidth: "unset"}}>
            {
                currentUser && isAdminCredentials ? (
                    <>
                        <a href="/uot" onClick={logout}
                           style={{
                               color: "var(--aqua-color)",
                               textDecoration: "none",
                           }}
                        >LOGOUT</a>
                        <h1>ProjectList Manegement</h1>
                        <ProjectListAdmin/>
                    </>
                ) : (
                    <UoTLogin/>
                )
            }
        </section>
    );
}

export default UoTAdmin;