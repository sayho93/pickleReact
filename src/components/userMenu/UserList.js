import React from "react";
import {browserHistory} from "react-router";
import {Table} from 'reactstrap';
import styles from "../globalStyle.css";
import FaNum from "react-icons/lib/md/format-list-numbered";

import BreadCrumb from "../BreadCrumb/BreadCrumb";

import * as service from "../../svc/company";

class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: null,
            pageInfo: null
        };
        this.fetchCompanyList = this.fetchCompanyList.bind(this);
    }

    componentWillMount(){
        this.fetchCompanyList();
    }

    fetchCompanyList = async (page) => {
        const list = await service.getCompanyList(page);
        const listData = list.data.data.list;
        const pageInfo = list.data.data.pageInfo;

        this.setState({
            list: listData,
            pageInfo: pageInfo
        });
    };

    listClickListener = (key) => {
        alert("number " + key + " element clicked");
        browserHistory.push("/user/userList/" + key);
    };

    render() {
        console.log(this.state);
        if(this.state.list){
            return (
                <div className="bodyArea">
                    <BreadCrumb first={"User Manage"} second={"User Info"}/>

                    <Table striped>
                        <thead>
                        <tr>
                            <th><FaNum/></th>
                            <th>이름</th>
                            <th>전화번호</th>
                            <th>사업자등록번호</th>
                            <th>등록일시</th>
                        </tr>
                        </thead>

                        <tbody>
                        {this.state.list.map((info, rowNum) => {
                            console.log(info);
                            console.log(rowNum);
                            return(
                                <tr key={info.id} onClick={() => this.listClickListener(info.id)}>
                                    <th scope="row">{rowNum + 1}</th>
                                    <td>{info.name}</td>
                                    <td>{info.phone}</td>
                                    <td>{info.corporateRN}</td>
                                    <td>{info.uptDate}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </div>
            )
        }

        return (
            <div className="bodyArea">
                <BreadCrumb first={"User Manage"} second={"User Info"}/>
            </div>
        )
    }
}

export default UserList;