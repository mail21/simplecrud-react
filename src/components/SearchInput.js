import React from 'react';

const SearchInput = ({onChangeEvent})=>{
    return(
        <>
            <input 
                type="text" 
                className="form-control" 
                style={{width:"70%"}} 
                placeholder="Seach"
                onChange={onChangeEvent}/>
        </>
    );
}

export default SearchInput;