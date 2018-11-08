import React from "react";
import RouterMap from "./map";
import Routes from "./routes";
class RouterView extends React.Component{
    render(){
        const {routes} = this.props;

         return  <RouterMap Routes={routes ? routes : Routes} />
          
      
    }
}
export default RouterView;