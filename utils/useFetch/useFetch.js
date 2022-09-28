// import {useState, useEffect} from 'react';

export default function useFetch(url, id = '', method = () => {}, type) {



        fetch(url + id)
        .then(res => res.json())
        .then(data => method({type: type, payload: data}))
}