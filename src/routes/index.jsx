import {Route, Switch} from 'react-router'
import Home from '../pages/Home'
import Singup from '../pages/Singup'

function Routes(){

    return(
        
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/singup'>
                <Singup/>
            </Route>
        </Switch>
    )
}

export default Routes