import React from "react"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>User Manage</BreadcrumbItem>
                    <BreadcrumbItem active>User List</BreadcrumbItem>
                </Breadcrumb>
            </div>
        )
    }
}

export default Main;