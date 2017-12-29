import React from "react";
import {browserHistory} from "react-router";
import { InputGroup, InputGroupAddon, Input, Label, Tooltip, Button } from 'reactstrap';
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import * as service from "../../svc/company";
import {formatPhone} from "../../utils/utils";

class TooltipContent extends React.Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            src: "",
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <div style={{marginLeft: '3%'}}>
                <a href="#" className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>미리보기</a>
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
                    <img src={this.props.info} style={{width: "100%", height: "100%"}}/>
                </Tooltip>
            </div>
        );
    }
}

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
                file: "",
                src: "",
        };
        this.fetchCompanyInfo = this.fetchCompanyInfo.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }

    componentDidMount(){
        this.fetchCompanyInfo(this.props.params.id).then(() => {
            // Do something after fetchCompanyInfo is successful.
        });
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

    onFileChange(event){
        let file = event.target.files[0];
        console.log(file);
        this.setState({
            file: file
        });

        let fileReader = new FileReader();
        const scope = this;
        fileReader.readAsDataURL(file);
        fileReader.onload = function(e){
            scope.setState({src: e.target.result});
        };
    }



    render() {
        console.log(this.state);
        // if(this.state.companyInfo.name !== ""){
            return (
                <div className="bodyArea">
                    <BreadCrumb first={"User Manage"} second={"User Info"}/>
                    <InputGroup>
                        <InputGroupAddon>이름</InputGroupAddon>
                        <Input placeholder="회사 이름" name="name" value={this.state.name} onChange={this.onInputChange}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon>전화번호</InputGroupAddon>
                        <Input placeholder="전화번호" name="phone" value={this.state.phone} onChange={this.onInputChange}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon>주소</InputGroupAddon>
                        <Input value={this.state.sidoTxt + " " +  this.state.gunguTxt
                        } readOnly/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon>사업자등록번호</InputGroupAddon>
                        <Input placeholder="사업자등록번호" name="corporateRN" value={this.state.corporateRN} onChange={this.onInputChange}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputGroupAddon>등록일시</InputGroupAddon>
                        <Input value={this.state.uptDate} readOnly/>
                    </InputGroup>
                    <br/>
                    <Label for="file" sm={2}>File</Label>
                    <Input type="file" name="file" id="file" style={{marginLeft: '10px'}} onChange={this.onFileChange}/>
                    <TooltipContent id="tooltip" info={this.state.src}/>
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