import { Alert, Button, Grid2, TextField } from "@mui/material"
import { signOutUserRequest, UserCreateDataRequest } from "../../../ducks/auth/user"
import { Typography } from "../../../components/Typography"
import { ChangeEvent, FC, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

type FieldId = 'login' | 'password' | 'firstName' | 'lastName';

interface InputEvent extends HTMLInputElement {
  id: FieldId;
}
interface UserCreateData extends UserCreateDataRequest {
    repeatePassword: string;
}

const initialRef: UserCreateData = {login: "", password: "",firstName: "", lastName: "", repeatePassword: ""}

export const SignOut: FC = ()=>{
    const dispatch = useDispatch()
    const userDataRef = useRef(initialRef)
  
    const [helperText, setHelperText] =useState('')
  
    const handleChangeInput = (event: ChangeEvent<InputEvent>) => {
      if(helperText) { setHelperText('') }
      userDataRef.current[event.currentTarget.id] = event.currentTarget.value;
    }
  
    const handleSignOut = () => {
      if(userDataRef.current.login && userDataRef.current.password && userDataRef.current.firstName && userDataRef.current.lastName){
        if(userDataRef.current.password !== userDataRef.current.repeatePassword) {setHelperText('Пароль не совпадает')}
        dispatch(signOutUserRequest(userDataRef.current))
      }else{
        setHelperText("Заполните все поля")
      }
    }
    return(
        <>
        {helperText && <Alert severity="warning">{helperText}</Alert>}
      <Grid2 direction={"column"}  alignItems={"center"} container>
        <Grid2>
            <Typography variant="bodyText">Регистрация</Typography>
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
          <TextField
          id="repeatePassword"
          label="Повторите Пароль"
          maxRows={100}
          onChange={handleChangeInput}
        />
        </Grid2>
        <Grid2>
          <TextField
          id="firstName"
          label="Имя"
          maxRows={100}
          onChange={handleChangeInput}
        />
        </Grid2>
        <Grid2>
          <TextField
          id="lastName"
          label="Фамилия"
          maxRows={100}
          onChange={handleChangeInput}
        />
        </Grid2>
        <Grid2>
          <Button onClick={handleSignOut}>Зарегистрироваться</Button>
        </Grid2>
      </Grid2>
      </>
    )
}