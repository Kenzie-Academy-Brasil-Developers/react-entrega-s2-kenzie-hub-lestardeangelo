import {Route, Switch} from 'react-router'
import Home from '../pages/Home'
import Singup from '../pages/Singup'
import Login from '../pages/Login'
import { useEffect, useState } from 'react'
import Dashboard from '../pages/Dashboard'


function Routes(){

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        
        const token = JSON.parse(localStorage.getItem('USER_TOKEN'))

        if(token){
            return setAuthenticated(true)
        }

    }, [authenticated])

    return(
        
        <Switch>
            <Route exact path='/'>
                <Home authenticated={authenticated}/>
            </Route>
            <Route path='/singup'>
                <Singup authenticated={authenticated}/>
            </Route>
            <Route path='/login'>
                <Login
                 authenticated={authenticated}
                 setAuthenticated={setAuthenticated}/>
            </Route>
            <Route path='/dashboard'>
                <Dashboard 
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes