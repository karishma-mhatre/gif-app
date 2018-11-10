import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="container header">
                <span className="logo">GIFLY</span>
                <form onSubmit={this.props.search} className="header-search">
                    <input className="header-search__input" type="text" name="searchText" placeholder="Search Text"></input>
                    <button className="btn header-search__btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
            </div>
        );
    }
}

export default Header;