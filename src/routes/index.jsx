import {Route, Switch} from 'react-router'
import Home from '../pages/Home'
import Singup from '../pages/Singup'
import Login from '../pages/Login'

function Routes(){

    return(
        
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/singup'>
                <Singup/>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
        </Switch>
    )
}

export default Routes