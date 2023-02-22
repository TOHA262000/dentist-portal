import React, { useState } from 'react';

const ToggleButton = () => {
    const [isDark,setIsDark]=useState(true);
    const handleToggle=()=>{
        setIsDark(!isDark);
        console.log(isDark);
    }
    return (
        <input onClick={handleToggle} type="checkbox" className="toggle"/>
    );
};

export default ToggleButton;