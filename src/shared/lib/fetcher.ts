import { baseUrl } from "./constants"

export const fetcher = async (endpoint: string) => {
    try{
        const response = await fetch(`${baseUrl}${endpoint}`)
        return await response.json()
    }catch(error){
        console.error(error, 'network error')
        return error
    }
}