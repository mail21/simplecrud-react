import React from 'react';
import SearchInput from './SearchInput';
import logo from './../img/logo.png';

class Header extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-around p-3 mb-2 bg-dark text-white">
                <img src={logo} width="40" alt="Gambar logo"/>
                <SearchInput />
                <button className="btn btn-light">ADD</button>
            </div>
        );
    }
}

export default Header;
