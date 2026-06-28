import api from "."

export const postContacts = async (body) => {
    
    const response = await api.post("/messages", body); 
    return response.data;
}