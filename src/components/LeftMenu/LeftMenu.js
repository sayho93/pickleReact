import React from "react";
import {
    Nav,
    NavItem,
    NavLink,
    Collapse
} from "reactstrap";
import {Link} from "react-router";
import "./LeftMenu.css";
import IUser from "react-icons/lib/ti/user";
import INotice from "react-icons/lib/md/event-note";
import IStat from "react-icons/lib/ti/chart-bar";
import ISetting from "react-icons/lib/fa/cog";

import FaRight from "react-icons/lib/fa/angle-right";
import FaLeft from "react-icons/lib/fa/angle-left";
import FaDown from "react-icons/lib/fa/angle-down";

class LeftMenu extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            user: false,
            notice: false,
            statistics: false,
        };
    }

    toggle = (type) => {
        switch(type){
            case "user":
                this.setState({user: !this.state.user});
                break;
            case "notice":
                this.setState({notice: !this.state.notice});
                break;
            case "statistics":
                this.setState({statistics: !this.state.statistics});
                break;
        }
    };

    render(){
        return (
            <div className="navArea">
                <Nav vertical  className="flex-column">
                    <NavItem className="navItem" onClick={() => this.toggle("user")}>
                        <IUser/> User Manage
                        <div className="iconRight">{this.state.user ? <FaDown/> : <FaRight/>}</div>
                    </NavItem>
                    <Collapse isOpen={this.state.user}>
                        <Link to="/user/userList"><NavItem className="navItem subItem">User List</NavItem></Link>
                        <Link to="/user/managerList"><NavItem className="navItem subItem">Manager List</NavItem></Link>
                    </Collapse>

                    <NavItem className="navItem" onClick={() => this.toggle("notice")}>
                        <INotice/> Notice Manage
                        <div className="iconRight">{this.state.notice ? <FaDown/> : <FaRight/>}</div>
                    </NavItem>
                    <Collapse isOpen={this.state.notice}>
                        <NavItem className="navItem subItem">Notice Menu1</NavItem>
                        <NavItem className="navItem subItem">Notice Menu2</NavItem>
                        <NavItem className="navItem subItem">Notice Menu3</NavItem>
                    </Collapse>

                    <NavItem className="navItem" onClick={() => this.toggle("statistics")}>
                        <IStat/> 통계
                        <div className="iconRight">{this.state.statistics ? <FaDown/> : <FaRight/>}</div>
                    </NavItem>
                    <Collapse isOpen={this.state.statistics}>
                        <NavItem className="navItem subItem">Statistic Menu1</NavItem>
                        <NavItem className="navItem subItem">Statistic Menu2</NavItem>
                        <NavItem className="navItem subItem">Statistic Menu3</NavItem>
                    </Collapse>

                    <NavItem className="navItem"><ISetting/> 관리자계정</NavItem>
                </Nav>
            </div>
        )
    }
}

export default LeftMenu;