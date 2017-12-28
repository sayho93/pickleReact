import React from "react";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

const PageNav = ({url, currentPage, totalPage, pageBlock, pagePerBlock}) => {
    let rows = [];
    let start = (parseInt(pageBlock) - 1) * parseInt(pagePerBlock) + 1;
    let end = pageBlock * pagePerBlock + 1;

    // console.log(start + "::" + end);
    if(pageBlock !== 1)
        rows.push(<PaginationItem><PaginationLink previous href={url + "/" + start - 1}/></PaginationItem>);

    for(let i=start; i<end; i++){
        if(i > totalPage)
            break;
        if(i === currentPage)
            rows.push(<PaginationItem key={i} active><PaginationLink href={url + "/" + i}>{i}</PaginationLink></PaginationItem>);
        else
            rows.push(<PaginationItem key={i}><PaginationLink href={url + "/" + i}>{i}</PaginationLink></PaginationItem>);
    }

    if(totalPage > end)
        rows.push(<PaginationItem><PaginationLink next href={url + "/" + end + 1}/></PaginationItem>);

    return (
        <div className="pagination">
            <Pagination size="sm">
                {rows}
            </Pagination>
        </div>
    )
};

export default PageNav;