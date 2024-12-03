
import { useEffect,useState } from "react";
import axios from "axios";


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(url);
            console.log(response)
            setData(response.data)
        } catch (error) {
            setError(true)
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [url])
    return { data, error, loading }
}

export { useFetch }