"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Item from "@/component/Item";

export default function page({params}) {

    // const id = params.id;
    const id = `${params.id}`;
    const API_URL = `/api/v1/products/${id}.json`
    const [item,setItem] = useState({});
    const router = useRouter();

    function getData(){
        axios.get(API_URL).then((res)=>{
            console.log(res.data);
            setItem(res.data);
        })
    }

    useEffect(()=>{
        if(id && id>0){
            getData();
        }
    },[id]);


    return (
        <Item item={item}/>
    )
}
