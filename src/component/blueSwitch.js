import React from 'react';
import Button from '@material-ui/core/Button';

class BlueSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSwitchOn: true }
        this.handleFootClick = this.handleFootClick.bind(this);
    }

    handleFootClick() {
        this.setState(state => ({
            isSwitchOn: !state.isSwitchOn
        }));
        if (this.state.isSwitchOn) {
            document.getElementById('foot').style.backgroundColor = "#99daf7";
            document.getElementById('footButton').style.backgroundColor = "rgb(27 230 104)";
        } else {
            document.getElementById('foot').style.backgroundColor = "rgb(27 230 104)";
            document.getElementById('footButton').style.backgroundColor = "#3f51b5";
        }
    }

    render() {
        return (
            <div>
                <Button id="footButton" onClick={this.handleFootClick} variant="contained" color="primary">
                    {this.state.isSwitchOn ? 'Blue' : 'Green'}
                </Button>
            </div>
        );
    }
}
export default BlueSwitch;