import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="flex-container header">
                <span className="header-logo color-white">GIFLY</span>
                <form onSubmit={this.props.search} className="header-search">
                    <input className="gif-input large-font" type="text" name="searchText" placeholder="Search Text"></input>
                    <button className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        );
    }
}

export default Header;