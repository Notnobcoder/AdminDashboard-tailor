"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Login = () => {
  type FormData = {
    email: string;
    password: string;
  };

  const logiSchema = z.object({
    email: z.string().email({
      message: "Enter a valid email",
    }),
    password: z.string().min(1, {
      message: "Password is required",
    }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(logiSchema),
  });

  const handleLoginSubmit = async (data: FormData) => {
    await axios
      .post("/api/register", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <div>
          <h4>Enter Email</h4>
          <input
            id="email"
            {...register("email")}
            className="border border-black outline-none"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <h4>Password</h4>
          <input
            id="password"
            {...register("password")}
            className="border border-black outline-none"
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div>
          <h4>Not Registerd ? </h4>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
