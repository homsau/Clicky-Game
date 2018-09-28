import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="title">
                <h2>Click the Super Smash Bros Characters!</h2>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Score</td>
                        <td>Wins</td>
                    </tr>
                    <tr>
                        <td>{this.props.score}</td>
                        <td>{this.props.wins}</td>
                    </tr>
                </tbody>
            </table>
        </nav>
        );
    }
}

export default Navbar;
