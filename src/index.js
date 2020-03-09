import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Text from "./components/contactList/contactlist";
import Text from "./components/contactList/contactlist"

const App = () => {
    return (
<div className="container">
          <h2>Contact List</h2>
        <div  >
            <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" >
            <h1>ContactItem</h1>

            </div>
            <Text />
        </div></div>

    )
}


ReactDOM.render(<App />, document.getElementById("root"));
