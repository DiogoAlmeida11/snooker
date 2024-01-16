import fetchMock from "fetch-mock"
import players from './mock/playerMock'
import news from './mock/newsMock'
import games from './mockgamesMock'

fetchMock.mock('http://localhost:4000/players', players)
fetchMock.mock('http://localhost:4000/news', news)
fetchMock.mock('http://localhost:4000/dashboard', games)

/**
 * 
 * @param {string} apiBaseUrl <- base URL from the API
 * @param {string} endpoint <- endpoint of the API
 * @returns a promise object with the response
 */


export async function get(apiBaseUrl, endpoint){
    try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}`)
        return handleResponse(response)
    } catch (error) {
        throw error    
    }
}

/**
 * 
 * @param {string} apiBaseUrl <- base URL from the API
 * @param {string} endpoint <- endpoint of the API
 * @param {string} data <- data that the API will receive
 * @returns 
 */

export async function post(apiBaseUrl, endpoint, data){
    try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },body: JSON.stringify(data)
        })
        return handleResponse(response)
    } catch (error) {
        throw error    
    }
}

/**
 * response handling
 * @param {object} response <- promise object with the response of the server
 * @returns the response from the server
 */

 async function handleResponse(response){
        if(!response.ok){
            const errorMessage = await response.text()
            throw new Error(`API request failed with status ${response.status}: ${errorMessage}`)
        }
        const data = await response.json()
        return data
}