import React from 'react';
import Button from "../Button";
import {useTelegram} from "../../../hooks/useTelegram";
import './Header.css';
const Header = () =>{
    const {user, onCLose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};
export default Header;