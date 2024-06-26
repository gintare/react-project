import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../App";
import { useContext } from "react";

export default function Order() {
    const {useToken} = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
      } = useForm(
        {
          defaultValues: {
            description: ""
          }
        }
        );

    const submitClickHandler = async(data) => {
        console.log(data);
        console.log("useToken = "+useToken);
        try {
            const response = await axios.post(`http://localhost:8080/api/orders`, {...data}, {
                headers: {
                    'Authorization': 'Bearer ' + useToken 
                }
            });
            console.log(response);
            if(!response.status == 201)
              throw new Error("Upps! Something went wrong!");

            
            alert("Successifully created");  
            reset();
        } catch (error) {
          console.log(error.message);
        }
    }

    return (<><form onSubmit={handleSubmit(submitClickHandler)}>
        <label htmlFor="description">Description</label><br/>
        <textarea {...register("description")}></textarea><br/>
        <input type="submit" value="Submit" />
        </form></>)
}