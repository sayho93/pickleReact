import React from 'react';
import Header from "./Header/Header";
import LeftMenu from "./LeftMenu/LeftMenu";

class App extends React.Component{
    render(){
        console.log("children::");
        console.log(this.props.children);

        return (
            <div style={{height: '100%'}}>
                <Header/>
                <LeftMenu/>
                {this.props.children};
            </div>
        )
    }
}
export default App;