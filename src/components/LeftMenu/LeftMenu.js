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
                    <NavItem className="navItem" onClick={() => this.toggle("user")}><IUser/> User Manage</NavItem>
                    <Collapse isOpen={this.state.user}>
                        <Link to="/user/userList"><NavItem className="navItem subItem">User List</NavItem></Link>
                        <Link to="/user/managerList"><NavItem className="navItem subItem">Manager List</NavItem></Link>
                    </Collapse>

                    <NavItem className="navItem" onClick={() => this.toggle("notice")}><INotice/> Notice Manage</NavItem>
                    <Collapse isOpen={this.state.notice}>
                        <NavItem className="navItem subItem">Notice Menu1</NavItem>
                        <NavItem className="navItem subItem">Notice Menu2</NavItem>
                        <NavItem className="navItem subItem">Notice Menu3</NavItem>
                    </Collapse>

                    <NavItem className="navItem" onClick={() => this.toggle("statistics")}><IStat/> 통계</NavItem>
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