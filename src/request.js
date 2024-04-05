import axios from 'axios'

export const apiCall = () => {
    axios.get('http://localhost:8080/hello').then((data) => {
        console.log(data)
    })
}