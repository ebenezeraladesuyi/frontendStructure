import axios from "axios";

const instance = axios.create ({
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com",
    params: {term: 'wat'},
    headers: {
        'X-RapidAPI-Key': '94dbcfa91fmsh25f808f05b4aad9p170497jsnaa784278a15f',
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
},
}) 


export default instance