// @ts-nocheck
"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const dataGet = () => {
      axios
        .get("/api/health")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };
    dataGet();
  }, []);
  console.log(data);
  return (
    <div>
      <h4>hello world</h4>
      {data?.Products.map((_i: any) => (
        <Button key={_i.name}>{_i.name}</Button>
      ))}
    </div>
  );
}
