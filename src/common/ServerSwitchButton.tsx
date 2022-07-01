import { Button } from "@mui/material";

interface Prop {
    buttonName: string;
    viewType: string;
    switchMethod: Function;
};

const ServerSwitchButton: React.FC<Prop> = ({buttonName, viewType, switchMethod}) => {
    return(
        <Button onClick={() => {switchMethod(viewType)}} variant="outlined">
            {buttonName}
        </Button>
    )
};
 
export default ServerSwitchButton;