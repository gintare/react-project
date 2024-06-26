import { useRouteError } from "react-router-dom";


export default function ErrorPage () {
   const error = useRouteError();
   console.log(error);

   return (
    <>
    <div id="error_page">
        <h1>Upss!!!</h1>
        <p>Sorry, error occured</p>
        <p>
            <i>
                {error.statusText || error.message}
            </i>
        </p>
    </div>
    </>
   )
};