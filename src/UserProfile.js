import React, { Component } from 'react'
import request from 'superagent';


export default class UserProfile extends Component {

    state = { 
    err: null,
    }

    fetch = async () => {
        const response = await request.get(`https://serene-temple-06405.herokuapp.com/api/userprofile/${searchedId}`)
        .set('Authorization', this.props.token)

        this.setState({ todos: response.body })
    } 

    componentDidMount = async () => {
        this.fetch();
    }


    
// -------------------------------------------------------------------------

    render() {
        return (
            <>
            <div>
                    Your search information  

                    <ul>
                        <li>lat lon</li>
                        <li>lat lon</li>
                        <li>lat lon</li>
                    </ul>
            </div>
            
            </>
        )
    }
}