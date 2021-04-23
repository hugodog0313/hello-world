import { connect } from "react-redux";
import { Component } from 'react';

class Title extends Component {
    render() {
        console.log(this.props.currentContent);
        return (
            <div>
                <p style={{ color: this.props.currentColor, fontSize: this.props.currentContent }}>
                    目前顏色:{this.props.currentColor}
                </p>
            </div >
        );
    }
}
function mapStateToProps(state) {
    return {
        currentColor: state.colorEditer,
        currentContent: state.contents
    }
}
export default connect(mapStateToProps)(Title);