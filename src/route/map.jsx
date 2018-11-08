import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";
class RoutesMap extends React.Component{
    render(){
    const { Routes } = this.props;
    const defaultRoute = <Route key={1} exact path="/" component={()=>
        <Redirect to="/register" />
    }></Route>
        return <Switch>
            {
                Routes.length && Routes.map((itm,ind)=>{
                    return <Route  key={ind} path={itm.path} render={(api)=>{
                        return <itm.component  routes={itm.children} {...api}></itm.component>
                    }}></Route>
                }).concat([defaultRoute])
            }
        </Switch>
    }
}
export default RoutesMap;