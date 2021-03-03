import { useParams } from 'react-router-dom'

export default function ProfilePage() {
    const { username } = useParams();
    return (
        <div>
            <h1>ProfilePage: {username}</h1>            
        </div>
    )
}
