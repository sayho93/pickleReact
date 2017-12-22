import React from "react";
import {Nav, NavItem, NavLink} from "reactstrap";
import "./LeftMenu.css";
import IUser from "react-icons/lib/ti/user";
import INotice from "react-icons/lib/md/event-note";
import IStat from "react-icons/lib/ti/chart-bar";
import ISetting from "react-icons/lib/fa/cog";

class LeftMenu extends React.Component{
    render(){
        return (
            <div className="navArea">
                <Nav vertical>
                    <NavItem className="navItem"><IUser/>User Manage</NavItem>
                    <NavItem className="navItem"><INotice/>Notice Manage</NavItem>
                    <NavItem className="navItem"><IStat/>통계</NavItem>
                    <NavItem className="navItem"><ISetting/>관리자계정</NavItem>
                </Nav>
            </div>
        )
    }
}

export default LeftMenu;