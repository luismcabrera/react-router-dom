import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export default function useAuth() {
    return  useContext(AuthContext);
}
