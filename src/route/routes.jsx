import Wrapper from "view/wrapper";
import Jd from "view/jd";
import Register from "view/register";
import Login from "view/login";
import JdList from "view/jdList";
import JdTages from "view/jdTages";
const Routes = [
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login,
        children:[
            {
                path:'/login/list',
                component:JdList
            },
            {
                path:'/login/tages',
                component:JdTages
            }
        ]
    },
    {
        path:'/home',
        component:Wrapper
    },{
        path:'/jd',
        component:Jd
    }
]

export default Routes;