import React from "react";
import { InputGroup, InputGroupAddon, Input, Button, Buttons } from 'reactstrap';
import Center from 'react-center';
import FaId from 'react-icons/lib/md/contacts'
import FaPass from 'react-icons/lib/md/lock';
import styles from "./Login.css";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }

    _handleKeyPress = (e) => {
        if (e.key === "Enter")
            this.onLogin();
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

        if(id.length === 0) {
            alert("아이디를 입력해 주세요");
            return;
        }
        if(pass.length === 0) {
            alert("비밀번호를 입력해 주세요");
            return;
        }

        alert("id: " + id + " pwd: " + pass);
        location.href="/home";
    };
}

export default Login