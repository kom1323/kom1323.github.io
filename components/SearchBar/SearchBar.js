import React, { useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import "./SearchBar.css"


const SearchBar = () =>{
    const [searchValue, setSearchValue] = useState("")



    const handleInputChange =  (event) => {
        
        setSearchValue(event.target.value)
    }

    const shouldSendSearchRequest = searchValue.length >= 3
    console.log(searchValue)

    return (<div>
            <input type = "text" value={searchValue} onChange={handleInputChange}/>
            <SearchButton>{shouldSendSearchRequest ? searchValue : "___"}</SearchButton>
            </div>
    )
}


export default SearchBar