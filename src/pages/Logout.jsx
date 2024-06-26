import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Logout() {
  const { setUseToken } = useContext(UserContext);

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

  const onClickHandler = (data) => {
    localStorage.removeItem("token");
    setUseToken(null);
  };

  return (
    <>
      <div className="logout-form-content">
        <form onSubmit={handleSubmit(onClickHandler)}>
          <input type="submit" value="Logout" />
        </form>
      </div>
    </>
  );
}
