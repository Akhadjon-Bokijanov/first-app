import React from 'react';
import "./search-box.style.css";

export const SearchBox = ({ placeholder, eventHandler }) => (
    <input 
        type="search"
        className ="search" 
        placeholder={ placeholder }
        onChange={ eventHandler } 
    />
)