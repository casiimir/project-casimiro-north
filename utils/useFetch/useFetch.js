// import {useState, useEffect} from 'react';
import * as React from 'react';

export default function useFecth(url, id="", method = () => {}, type) {


        fetch(url + id)
        .then(res => res.json())
        .then(data => method({type: type, payload: data}))
}