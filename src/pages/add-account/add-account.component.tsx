import React, {useState, useEffect} from 'react';
import AddAccountMobile from "./add-account.mobile";
import AddAccountDesktop from "./add-account.desktop";
import {onlyActive} from "../../guards/active.guard";
import {useWindowSize} from "../../hooks/window-size.hook";

const AddAccount = () => {
    const {width} = useWindowSize();
    return width < 1200 ? <AddAccountMobile/> : <AddAccountDesktop/>;
};

export default onlyActive(AddAccount);