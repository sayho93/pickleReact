import React from 'react';
import Header from "./Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";
import Body from "./Body/Body";

class Home extends React.Component{
    render(){
        return (
            <div style={{height: '100%'}}>
                <Header/>
                <LeftMenu/>
                <Body/>
            </div>
        )
    }
}
export default Home;