"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const handleStoreSubmit = async (data: any) => {
    console.log(data);
    await axios
      .post("/api/store", data)
      .then((_res) => {
        console.log(_res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h4>hello world</h4>
      <form onSubmit={handleSubmit(handleStoreSubmit)}>
        <Input {...register("name")} placeholder="enter store Name" />
        <Input {...register("value")} placeholder="enter value Name" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
