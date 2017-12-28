import React from "react"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import styles from "../globalStyle.css";

class UserList extends React.Component {
    render() {
        return (
            <div className="bodyArea">
                <Breadcrumb>
                    <BreadcrumbItem>User Manage</BreadcrumbItem>
                    <BreadcrumbItem active>User List</BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
    }
}

export default UserList;