import React from "react";
import {browserHistory} from "react-router";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import * as service from "../../svc/company";
import {formatPhone} from "../../utils/utils";

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                name: "",
                phone: "",
                sidoTxt: "",
                gunguTxt: "",
                corporateRN: "",
                uptDate: "",
        };
        this.fetchCompanyInfo = this.fetchCompanyInfo.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount(){
        this.fetchCompanyInfo(this.props.params.id);
    }

    fetchCompanyInfo = async(id) => {
        const info = await service.getCompanyInfo(id);
        const data = info.data.data;

        if(data === null)
            return;

        this.setState({
                name: data.name,
                phone: data.phone,
                sidoTxt: data.sidoTxt,
                gunguTxt: data.gunguTxt,
                corporateRN: data.corporateRN,
                uptDate: data.uptDate
        });
    };

    onInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        // if(this.state.companyInfo.name !== ""){
            return (
                <div className="bodyArea">
                    <BreadCrumb first={"User Manage"} second={"User Info"}/>
                    <InputGroup>
                        <InputGroupAddon>이름</InputGroupAddon>
                        <Input placeholder="company name" name="name" value={this.state.name} onChange={this.onInputChange}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon>전화번호</InputGroupAddon>
                        <Input placeholder="company phone" name="phone" value={this.state.phone} onChange={this.onInputChange}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon>주소</InputGroupAddon>
                        <Input placeholder="company location" value={this.state.sidoTxt + " " +  this.state.gunguTxt
                        } readOnly/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon>주소</InputGroupAddon>
                        <Input placeholder="company location" name="corporateRN" value={this.state.corporateRN} onChange={this.onInputChange}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon>등록일시</InputGroupAddon>
                        <Input placeholder="company location" value={this.state.uptDate} readOnly/>
                    </InputGroup>
                </div>
            )
        // }
        // else
        //     return (
        //         <div className="bodyArea">
        //             <BreadCrumb first="User Manage" second="User Info"/>
        //         </div>
        //     )
    }
}

export default UserInfo;