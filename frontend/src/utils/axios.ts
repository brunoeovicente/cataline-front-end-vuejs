import axios from "axios"; // importa

const axiosConfig = {
    baseURL: "http://localhost:3333" // especifica de onde vem o backend. endereço da API
}

export default axios.create(axiosConfig) // exporta uma instância do AXIOS com os dados do backend