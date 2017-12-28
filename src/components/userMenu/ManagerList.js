import React from "react";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

class ManagerList extends React.Component{
    render() {
        return (
            <div className="bodyArea">
                <Breadcrumb>
                    <BreadcrumbItem>User Manage</BreadcrumbItem>
                    <BreadcrumbItem active>Manager List</BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
    }
}

export default ManagerList;