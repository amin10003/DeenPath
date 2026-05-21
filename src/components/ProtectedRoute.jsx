import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/context/AppContex";


function ProtectedRoute({ children }) {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();
  const user = state.user

  // If NO user exists in global state, cleanly boot them to login
  useEffect(() => {
    if (!user) {
      navigate("/login", {replace:true});
    }
  }, [user, navigate]);

  if(!user){
    return null
  } else {
   return children
  }
}

export default ProtectedRoute;
