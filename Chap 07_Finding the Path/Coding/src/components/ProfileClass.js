import { Outlet } from 'react-router-dom';
import React from 'react';

class Profile extends React.Component() {

    constructor(props){
        super(props)
            this.state = {

                count:0,
            }
        
    }

    render(){
        return (
            <>
              <h1>This is a Profile Component</h1>
              <h2>Count: {this.props.count}</h2>
            </>
          );
    }


}


export default function Profile;