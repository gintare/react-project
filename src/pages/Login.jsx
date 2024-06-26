import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Login() {
    const {setUseToken} = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onClickHandler = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(`http://localhost:8080/auth/authenticate`, {
        ...data,
      });
      console.log(response);
      if (!response.status == 200)
        throw new Error("Upps! Something went wrong!");
      const token = response.data.accessToken;
      console.log("token" + token);
      localStorage.setItem("token", token);
      setUseToken(token);

      alert("Successifully created");
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onClickHandler)}>
        <label htmlFor="username">User name</label>
        <br />
        <input type="text" id="username" {...register("username")} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" {...register("password")} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
