import Axios from "axios";

const fetchUsers = async () => {

    const response = await Axios.get("http://localhost:8000/users")

    
    return {
        type: "FETCH_USERS",
        payload: response.data
    }
}
export default fetchUsers