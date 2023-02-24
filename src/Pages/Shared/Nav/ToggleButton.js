import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ToggleButton = () => {
    const { isDark, setIsDark } = useContext(AuthContext);
    const handleThemeChange = () => {
        setIsDark(!isDark)
    }
    return (
        <div onClick={handleThemeChange} className=" form-control">
            <label className="label cursor-pointer">
                <input type="checkbox" className="toggle" />
            </label>
        </div>
    );
};

export default ToggleButton;