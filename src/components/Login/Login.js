import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import {browserHistory} from "react-router";
import Center from 'react-center';
import FaId from 'react-icons/lib/md/contacts'
import FaPass from 'react-icons/lib/md/lock';
import styles from "./Login.css";
import AlertContainer from 'react-alert';
import {connect} from "react-redux";
import {setUserInfo} from "../../Actions/Actions";

import * as service from '../../svc/company';
import {setCookie} from "../../utils/utils";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }

    //enter handling
    _handleKeyPress = (e) => {
        if (e.key === "Enter")
            this.onLogin();
    };

    //custom alert
    alertOptions = {
        offset: 14,
        position: 'top center',
        theme: 'dark',
        time: 1000,
        transition: 'scale'
    };

    showAlert = (message, type) => {
        this.msg.show(message, {
            time: 1000,
            type: type,
            // icon: <img src="path/to/some/img/32x32.png" />
        })
    };

    //api test code
    fetchCompanyInfo = async () => {
        try{
            const info = await Promise.all([
                service.getCompanyList(),
                service.getComments(1)
            ]);

            console.log(info[0]);
        }
        catch(exception){
            console.log(exception);
        }
    };

    render(){
        let backgroundStyle = {
            height: "100%",
            backgroundColor: "#778899"
        };

        let boxStyle = {
            height: "20%",
            width: "40%",
            marginTop: "20%"
        };

        return (
            <div style={backgroundStyle}>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <Center>
                    <div style={boxStyle}>
                        <h1 style={{color: 'white'}}>PickleCode</h1>
                        <InputGroup>
                            <InputGroupAddon><FaId/></InputGroupAddon>
                            <Input placeholder="아이디" id="userId" onKeyPress={this._handleKeyPress}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon><FaPass/></InputGroupAddon>
                            <Input type="password" id="userPwd" placeholder="비밀번호" onKeyPress={this._handleKeyPress}/>
                        </InputGroup>
                        <Center>
                            <Button color="white" style={{marginTop: 20}}
                                    onClick={() => {this.onLogin()}}
                            >
                                로그인
                            </Button>
                        </Center>
                    </div>
                </Center>
            </div>
        );
    }

    onLogin = () => {
        let id = document.getElementById("userId").value;
        let pass = document.getElementById("userPwd").value;

        // this.fetchCompanyInfo();

        if(id.length === 0) {
            this.showAlert("아이디를 입력해 주세요", "error");
            return;
        }
        if(pass.length === 0) {
            this.showAlert("비밀번호를 입력해 주세요", "error");
            return;
        }

        this.showAlert("id: " + id + " pwd: " + pass, "success");

        let userInfo = {
            userId: id,
            userName: "슈퍼관리자",
            regDate: "2017-12-23"
        };
        // console.log(this.props.dispatch(setUserInfo(userInfo)));
        setCookie("user", userInfo);
        setTimeout(function(){
            browserHistory.push("/user/userList");
        }, 1100)
    };
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
};

// export default Login

export default connect(mapStateToProps)(Login)