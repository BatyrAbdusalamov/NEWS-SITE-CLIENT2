import { Alert, Button, Grid2, TextField } from "@mui/material"
import { signInUserRequest, UserDataRequest } from "../../../ducks/auth/user"
import { Typography } from "../../../components/Typography"
import { ChangeEvent, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AuthNavigate } from "../../../constants/navigate"
import { LINK_APP } from "../../../route/config"
type FieldId = 'login' | 'password';

interface InputEvent extends HTMLInputElement {
  id: FieldId;
}

const initialRef: UserDataRequest = {login: "", password: ""}

export const SignIn = ()=>{
    const dispatch = useDispatch()
    const  navigate = useNavigate()
    const loginDataRef = useRef(initialRef)
  
    const [helperText, setHelperText] =useState('')
  
    const handleChangeInput = (event: ChangeEvent<InputEvent>) => {
      if(helperText) { setHelperText('') }
      loginDataRef.current[event.currentTarget.id] = event.currentTarget.value;
    }
  
    const handleSignIn = () => {
      if(loginDataRef.current.login && loginDataRef.current.password){
        dispatch(signInUserRequest(loginDataRef.current))
      }else{
        setHelperText("Заполните все поля")
      }
    }
    return(
        <>
        {helperText && <Alert severity="warning">{helperText}</Alert>}
      <Grid2 direction={"column"}  alignItems={"center"} container>
        <Grid2>
            <Typography variant="bodyText">Вход</Typography>
        </Grid2>
        <Grid2>
          <TextField
          id="login"
          label="Логин"
          maxRows={100}
          onChange={handleChangeInput}
        />
        </Grid2>
        <Grid2>
          <TextField
          id="password"
          label="Пароль"
          maxRows={100}
          onChange={handleChangeInput}
        />
        </Grid2>
        <Grid2>
          <Button onClick={handleSignIn}>Войти</Button>
          <Button onClick={()=>navigate(LINK_APP.AUTH+AuthNavigate.SIGN_OUT)}>От души <br/> зарегистрироваться</Button>
        </Grid2>
      </Grid2>
      </>
    )
}