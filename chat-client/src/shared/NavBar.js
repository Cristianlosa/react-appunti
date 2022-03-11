import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <button>Home</button>
                    </Link>
                    <Link to="/who">
                        <button>Chi siamo</button>
                </Link>
                <Link to="/chat">
                    <button>Chat</button>
                </Link>
            </nav>
        );
    }
}

export default NavBar