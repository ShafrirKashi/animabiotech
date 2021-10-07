import Axios from "axios";

export const fetchUsers = () => {
    return async (dispatch, getState) => {
        const response = await Axios.get("http://localhost:8000/users");
    
        
        dispatch ({
            type: "FETCH_USERS",
            payload: response.data
        })
    }
   
}
