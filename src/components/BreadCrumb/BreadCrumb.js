import React from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadCrumb = ({first, second}) => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem>{first}</BreadcrumbItem>
                <BreadcrumbItem active>{second}</BreadcrumbItem>
            </Breadcrumb>
        </div>
    )
};

export default BreadCrumb;