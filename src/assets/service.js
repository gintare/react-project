
export const getDefaultToken = () =>{
    //const token = JSON.parse(localStorage.getItem("token"));
    const token = localStorage.getItem("token");
    if( !token){
      return null;
    }
    return token;
}