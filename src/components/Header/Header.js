import React from "react";
import "./Header.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import {Button} from "reactstrap";
import {browserHistory} from "react-router";
import {getCookie, deleteCookie} from "../../utils/utils";
import AlertContainer from 'react-alert'

class LoginStatus extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let userInfo = getCookie("user");
        console.log(userInfo);
        if(typeof userInfo === "undefined"){
            alert("로그인이 필요합니다");
            browserHistory.push("/");
        }
    }

    logout = () => {
        deleteCookie("user");
    };

    render(){
        return (
            <div className="status">
                <Button color="danger" size="sm" onClick={this.logout}>Logout</Button>
            </div>
        );
    }
}

class Header extends React.Component{
    //custom alert
    alertOptions = {
        offset: 14,
        position: 'top center',
        theme: 'dark',
        time: 4000,
        transition: 'scale'
    };

    showAlert = (message, type) => {
        this.msg.show(message, {
            time: 2000,
            type: type,
            // icon: <img src="path/to/some/img/32x32.png" />
        })
    };

    render(){
        return (
            <div className="wrapper">
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <div className="logo">
                    pickleAdmin
                    <LoginStatus/>
                </div>
                <LeftMenu/>
            </div>
        );
    }
}

export default Header;