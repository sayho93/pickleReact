import React from "react";
import "./Header.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import {Button} from "reactstrap";
import Auth from "../Login/Auth";

class LoginStatus extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        Auth.signin();
        if(Auth.isAuthenticated === false){
            alert("로그인이 필요합니다.");
            location.href = "/";
        }

        return (
            <div className="status">
                <Button color="danger" size="sm">Logout</Button>
            </div>
        );
    }
}

class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userId: ""
        });
        //adminId: cookie.load('adminId'),
    }

    onLogin(userId){
        this.setState({
            userId:userId
        });
        //cookie.save('adminId',adminId, { path: '/'});
    }

    onLogout(){
        this.setState({
            userId:''
        });
        //cookie.remove('adminId', { path: '/'});
    }

    render(){
        return (
            <div className="wrapper">
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


