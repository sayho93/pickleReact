import React from "react";
import {browserHistory} from "react-router";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import BreadCrumb from "../BreadCrumb/BreadCrumb";

class UserInfo extends React.Component{
    render() {
        return (
            <div className="bodyArea">
                <BreadCrumb first={"User Manage"} second={"User Info"}/>
                <InputGroup>
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input placeholder="username" />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon>
                        <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupAddon>
                    <Input placeholder="Check it out" />
                </InputGroup>
                <br />
                <InputGroup>
                    <Input placeholder="username" />
                    <InputGroupAddon>@example.com</InputGroupAddon>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon>$</InputGroupAddon>
                    <InputGroupAddon>$</InputGroupAddon>
                    <Input placeholder="Dolla dolla billz yo!" />
                    <InputGroupAddon>$</InputGroupAddon>
                    <InputGroupAddon>$</InputGroupAddon>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon>$</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" />
                    <InputGroupAddon>.00</InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default UserInfo;