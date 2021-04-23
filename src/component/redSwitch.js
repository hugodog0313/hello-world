import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
function RedSwitch() {
    const [isSwitchOn, setIsSwitchOn] = useState({ isSwitchOn: true });


    // useEffect(() => {
    //     console.log("useEffect");
    // });
    return (
        <div>
            <Button id="rootButton" onClick={() => {
                setIsSwitchOn(!isSwitchOn)
                if (isSwitchOn) {
                    document.getElementById('root').style.backgroundColor = "#ff7474";
                    document.getElementById('rootButton').style.backgroundColor = "darkgray";
                } else {
                    document.getElementById('root').style.backgroundColor = "darkgray";
                    document.getElementById('rootButton').style.backgroundColor = "#f50057";
                }
            }} variant="contained" color="secondary">
                {isSwitchOn ? 'Red' : 'Darkgray'}
            </Button>
        </div>
    );
}
export default RedSwitch;