import React from "react"
import Styles from "./Body.css";

import Main from "../userMenu/UserList";
class Body extends React.Component {
    render() {
        return (
            <div className="bodyArea">
                <Main/>
            </div>
        )
    }
}

export default Body;