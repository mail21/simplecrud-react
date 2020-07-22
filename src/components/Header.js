import React from 'react';
import SearchInput from './SearchInput';
import logo from './../img/logo.png';
import data from './../data';
import ModalAdd from './ModalAdd';



class Header extends React.Component{

    render(){
        return(
            <div className="d-flex justify-content-around p-3 mb-2 bg-dark text-white">
                <img src={logo} width="40" alt="Gambar logo"/>
                <SearchInput onChangeEvent={this.onChangeEvent} />
                <ModalAdd />
            </div>
        );
    }
}

export default Header;
