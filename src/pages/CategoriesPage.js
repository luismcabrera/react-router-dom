import { useLocation, useHistory } from 'react-router-dom'

export default function CategoriesPage() {
    const location = useLocation();
    const history = useHistory();
    
    const query = new URLSearchParams(location.search)
    const skip = parseInt(query.get("skip")) || 0
    const limit = parseInt(query.get("limit")) || 15

    const handleNext = () => {
        query.set("skip", skip + limit)
        // query.set("limit", 200)

        history.push({search: query.toString() })
    }

    return (
        <div>
            <h1>CategoriesPage</h1>
            <h2>Skip: {skip}</h2>
            <h2>Limit: {limit}</h2>

            <button onClick={handleNext}>
                Next
            </button>
        </div>
    )
}
