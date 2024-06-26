import { useForm } from "react-hook-form";
import axios from "axios";
import { getDefaultToken } from "../assets/service";
import { useState } from "react";

export default function SignupPage () {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm(
    {
      defaultValues: {
        name: "",
        username: "",
        email: "",
        password: ""
      }
    }
    );

  const formSubmitHandler = async (data) =>{
    console.log(data);
        try {
            const response = await axios.post(`http://localhost:8080/auth/signup`, {...data});
            console.log(response);
            if(!response.status == 200)
              throw new Error("Upps! Something went wrong!");
            const token = response.data.accessToken;
            console.log("token"+token);
            localStorage.setItem("token", token);

            
            alert("Successifully created");  
            reset();
        } catch (error) {
          console.log(error.message);
        }
  }

  return (
    <>
      
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <label htmlFor='name' >Name</label><br/>
        <input type="text" name="name" id='name' {...register("name")} /><br/>
        <label htmlFor='username'>User name</label><br/>
        <input type="text" name="username" id="username" {...register("username")} /><br/>
        <label htmlFor='email'>Email</label><br/>
        <input type="text" name="email" id="email" {...register("email")} /><br/>
        <label htmlFor='password'>Password</label><br/>
        <input type="password" name="password" id="password" {...register("password")} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}