import React from "react";
import "./Header.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import {Badge} from "reactstrap";

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
        {children}
    </div>
);

const LoginStatus = () => (
    <div className="status">
        <Badge color="danger">logout</Badge>
    </div>
);

class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userId: ""
        });
        //adminId: cookie.load('adminId'),
    }

    onLogin(userId){
        this.setState({
            userId:userId
        });
        //cookie.save('adminId',adminId, { path: '/'});
    }

    onLogout(){
        this.setState({
            userId:''
        });
        //cookie.remove('adminId', { path: '/'});
    }

    render(){
        return (
            <div className="wrapper">
                <div className="logo">
                    pickleAdmin
                    <LoginStatus/>
                </div>
                <LeftMenu/>
            </div>
        );
    }

// <div>
// <div className="logo">
// pickleAdmin
// <LoginStatus/>
// </div>
//
// <div className="menu">
// <MenuItem>회원관리</MenuItem>
// <MenuItem>게시물관리</MenuItem>
// <MenuItem>알림관리</MenuItem>
// <MenuItem>통계</MenuItem>
// <MenuItem>관리자계정</MenuItem>
// </div>
// </div>
}


export default Header;


