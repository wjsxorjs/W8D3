"use client"

import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemData from "@/component/ItemData";
import ItemCard from "@/component/ItemCard";
import ItemOnlyCard from "@/component/ItemOnlyCard";

export default function Home() {

  const api_url = "/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=528KjHbHGy9mCKDYxlXAan09GfBI4mVvwUhKE2q2jIVcBQa%2B5wUYNZK1ZyTrWRiRziQlGQuJy5VKnGWTmwxHLA%3D%3D&returnType=json&numOfRows=20&stationName=강남구&dataTerm=DAILY&ver=1.0";

  const [list, setList] = useState([]);

  const getData = () => {
    axios.get(
      api_url
    ).then(res => {
      console.log(res);
      setList(res.data.response.body.items);
    })
  };

  // 최초 한 번만 호출하기 위해 사용함!
  useEffect(() => {
    getData();
  },[]);
  // 데이터를 주고받고변경하므로 client component여야한다.

  return (
    <main className={styles.main}>
        <ItemData itemList={list}/>
        {/* <ItemCard itemList={list}/> */}
        {list.map((item,index)=>(
          <ItemOnlyCard item={item} index={index}/>
        ))}
    </main>
  );
}
