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
        this.state = {
            user : undefined
        };
    }

    //마운트 전 쿠키 확인 및 state에 저장
    componentWillMount(){
        let userInfo = getCookie("userInfo");

        console.log("userInfo::::::");
        console.log(userInfo);

        if(typeof userInfo === "undefined") {
            alert("로그인이 필요합니다");
            browserHistory.push("/");
        }
        else{
            this.setState({
                user: JSON.parse(userInfo)
            });
        }
    }

    logout = () => {
        deleteCookie("userInfo");
        alert("로그아웃되었습니다");
        browserHistory.push("/");
    };

    render(){
        return (
            <div className="status">
                {this.state.user ? this.state.user.userId : ""} <Button color="danger" size="sm" onClick={this.logout}>Logout</Button>
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
            <div className="header">
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <div className="logo">
                    pickleAdmin
                    <LoginStatus/>
                </div>
            </div>
        )
    }
}

export default Header;