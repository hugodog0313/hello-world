import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from 'react-redux';
import { addContent } from '../action/action'

function FloatingButton(props) {
    var size = 20;

    const changeSizeAdd = () => {
        size = size + 10;
        if (size <= 20) {
            size = 20;
        }
        props.addSize(size);
    }
    const changeSizeRemove = () => {
        size = size - 10;
        if (size <= 20) {
            size = 20;
        }
        props.addSize(size);
    }
    return (
        <>
            <div>
                <Fab color="secondary" aria-label="add" onClick={() => { changeSizeAdd() }}>
                    <AddIcon />
                </Fab>
            </div>
            <div>
                <Fab color="secondary" aria-label="4651" onClick={changeSizeRemove}>
                    <RemoveIcon />
                </Fab>
            </div>
        </>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addSize: (size) => {
            let action = addContent(size);
            console.log(action);
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(FloatingButton);