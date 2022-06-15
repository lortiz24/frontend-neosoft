import axios from "axios"
export const getBooks = async ()=>{
    const url = "https://backendneosoft.herokuapp.com/api/books";
    return axios.get(url).then((res,rej)=>{
        console.log(res.data.body)
    return res.data.body
   
}).catch((err)=>{
    console.log('TYPE ERR:',err);
})

}

export const crearLibro = async (body) =>{
    const url = "https://backendneosoft.herokuapp.com/api/books"
    let data = await axios.post(url,body);
    console.log(data)
}

export const getPrestamos = async ()=>{
    const url = "https://backendneosoft.herokuapp.com/api/prestamos";
    return axios.get(url).then((res,rej)=>{
    return res.data
   
}).catch((err)=>{
    console.log('TYPE ERR:',err);
})

}

export const crearPrestamo = async (body) =>{
    const url = "https://backendneosoft.herokuapp.com/api/prestamos"
    let data = await axios.post(url,body);
    console.log(data)
}