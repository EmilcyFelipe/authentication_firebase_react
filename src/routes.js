import { BrowserRouter,Switch,Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Sign_up from "./pages/Sign_up/Sign_up";
import Sign_in from "./pages/Sign_in/Sign_in"

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signup' component={Sign_up}/>
                <Route path='/signin' component={Sign_in}/>
            </Switch>
        </BrowserRouter>
    )
}