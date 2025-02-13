import React from "react"
import { Button } from "@mui/material"
import css from "./NavBar.module.scss"
import { Typography } from "../Typography"
import { useNavigate } from "react-router-dom"
import { LINK_APP } from "../../route/config"
import { AuthNavigate } from "../../constants/navigate"
export const NavBar = () => {
  const navigate = useNavigate()
  const handleAuthPage = () => {navigate(LINK_APP.AUTH+AuthNavigate.SIGN_IN)}
  return(
    <div className={css.navbar}>
      <div>
        <img src="src\assets\logo.svg" alt="logotype" />
      </div>
      <div>
        <Typography variant="headerText">
          News
        </Typography>
      </div>
      <div>
        <Button onClick={handleAuthPage} variant="contained" className={css.button}>
          <Typography variant="buttonText">Войти</Typography>
        </Button>
      </div>
    </div>
  )
}