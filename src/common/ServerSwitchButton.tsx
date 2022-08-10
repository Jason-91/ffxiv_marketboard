import { Button } from "@mui/material";
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentView } from '../redux/features/counter/counterSlice'

interface Prop {
    buttonName: string;
    viewType: string;
};
// remove switch method argument, use dispatch inside onclick
const ServerSwitchButton: React.FC<Prop> = ({buttonName, viewType}) => {
    const dispatch = useDispatch()

    return(
        <Button onClick={() => dispatch(setCurrentView(viewType))} variant="outlined">
            {buttonName}
        </Button>
    )
};
 
export default ServerSwitchButton;