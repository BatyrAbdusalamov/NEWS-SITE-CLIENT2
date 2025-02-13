import css from "./AuthPage.module.scss"
import { useLocation } from "react-router-dom";
import { LINK_APP } from "../../route/config";
import { AuthNavigate } from "../../constants/navigate";
import { SignIn } from "./components/SignIn";
import { Alert } from "@mui/material";

export const AuthPage = () => {
  const location = useLocation();
  console.log(location)
  switch(location.pathname){
    case LINK_APP.AUTH+AuthNavigate.SIGN_IN:
    return (
    <div className={css.window}>
      <SignIn/>
    </div>)
    case LINK_APP.AUTH+AuthNavigate.SIGN_OUT:
      return (
      <div className={css.window}>
        
      </div>)
      default:
        return(
          <div className={css.window}>
            <Alert severity="error">No Content</Alert>
          </div>)
  }

}