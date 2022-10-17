import axios from "axios";

const getNarnia = async (url: string, token: string) => {
    const config = { headers: { Authorization: `${token}` } }
    const response = await axios.get(url, config);

    if (response.status != 200) throw new Error("Du har glemt token");

    return response.data;
}


const NarniaServices = {
    getNarnia
}

export default NarniaServices;