import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "../auth/useAuth";

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from;

    const auth = useAuth();
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/dashboard")
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={handleLogin}>
                Signin
            </button>            
        </div>
    )
}
