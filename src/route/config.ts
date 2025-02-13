import { FC } from "react"
import { MainPage } from "../pages/main"
import { AuthPage } from "../pages/auth"

export const enum LINK_APP {
    MAIN = '/',
    AUTH = '/auth',
};

interface RouteConfig {
    path: LINK_APP,
    element: FC,
}
export const routeConfig:RouteConfig[] = [
    {
        path: LINK_APP.MAIN,
        element: MainPage,
    },
    {
        path: LINK_APP.AUTH+"/*",
        element: AuthPage,
    }
]