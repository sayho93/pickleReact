import React from "react";
import {browserHistory} from "react-router";
import {Table} from 'reactstrap';
import PageNav from "../PageNavigation/PageNav";
import styles from "../globalStyle.css";
import FaNum from "react-icons/lib/md/format-list-numbered";

import BreadCrumb from "../BreadCrumb/BreadCrumb";

import * as service from "../../svc/company";
import {formatPhone} from "../../utils/utils";

class UserList extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.params.id);
        this.state = {
            list: null,
            pageInfo: null
        };
        this.fetchCompanyList = this.fetchCompanyList.bind(this);
    }

    componentWillMount(){
        this.fetchCompanyList(this.props.params.id);
    }

    fetchCompanyList = async (page) => {
        const list = await service.getCompanyList(page);
        const listData = list.data.data.list;
        const pageInfo = list.data.data.pageInfo;

        console.log(pageInfo);
        this.setState({
            list: listData,
            pageInfo: pageInfo
        });
    };

    listClickListener = (key) => {
        // alert("number " + key + " element clicked");
        browserHistory.push("/user/userInfo/" + key);
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
                            // console.log(info);
                            // console.log(rowNum);
                            return(
                                <tr className="listItem" key={info.id} onClick={() => this.listClickListener(info.id)}>
                                    <th scope="row">{rowNum + 1}</th>
                                    <td>{info.name}</td>
                                    <td>{formatPhone(info.phone)}</td>
                                    <td>{info.corporateRN}</td>
                                    <td>{info.uptDate.substring(0, info.uptDate.length - 2)}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                    <PageNav url="/user/userList" currentPage={this.state.pageInfo.page} totalPage={this.state.pageInfo.totalPage}
                        pageBlock={this.state.pageInfo.pageBlock} pagePerBlock={this.state.pageInfo.pagePerBlock}
                    />
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