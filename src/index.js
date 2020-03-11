import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Text from "./components/contactList/contactlist";
import Contactlist from "./components/contactList/contactlist";
import '../node_modules/font-awesome/css/font-awesome.min.css' ;


class App extends React.Component {
state = {
    //masuv: ["Seth Fraziery", "Harm, Stepana Banderu Street", "(097) 555-55-12", "seth@i.ua","woman"]
list:[
    {
    id:1,
    name: "Seth Fraziery",
    address: "Harm, Stepana Banderu Street",
    phone: "(097) 555-55-12",
    email: "seth@i.ua",
    avatar: "25",
    gender: "men",
    starEmpty: "far fa-star fa-1x",
    starFull: "fas fa-star fa-1x",
    b: "true",
    star: "false"
},
{
    id:2,
    name: "Ivan Fraziery",
    address: "Harm, Stepana Banderu Street",
    phone: "(097) 555-55-12",
    email: "seth@i.ua",
    avatar: "66",
    gender: "men",
    starEmpty: "far fa-star fa-1x",
    starFull: "fas fa-star fa-1x",
    b: "true",
    star: "false"
},

{
    id:3,
    name: "Elena Fraziery",
    address: "Harm, Stepana Banderu Street",
    phone: "(097) 555-55-12",
    email: "seth@i.ua",
    avatar: "5",
    gender: "women",
    starEmpty: "far fa-star fa-1x",
    starFull: "fas fa-star fa-1x",
    b: "true",
    star: "false"
}
]
}

onStarChange = id => {
    console.log(id)
}
   render(){
        return (
<div className="container">
          <h2>Contact List</h2>
        <div  >
            <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" >
            <h1>ContactItem</h1>
<Contactlist list = {this.state.list} onStarChange= {this.onStarChange} ></Contactlist>
            </div>
            
        </div></div>

    )
}
}

ReactDOM.render(<App />, document.getElementById("root"));
