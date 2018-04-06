import React from 'react';

class EditTextField extends React.Component {

    constructor(props) {
        super(props);
        this._onSave = this._onSave.bind(this);
    }

    render() {
        return (
            <div>
                <input defaultValue={this.props.value} ref={i => { this.valueInput = i }} />
                <button onClick={this._onSave}>Save</button>
            </div>
        );
    }

    _onSave() {
        this.props.onSave({
            value: this.valueInput.value,
            key: this.props.listKey
        });
    }

}

EditTextField.propTypes = {
    value: React.PropTypes.string,
    onSave: React.PropTypes.func.isRequired,
    listKey: React.PropTypes.string.isRequired, // used to refer to the index of the component within a list
};

EditTextField.defaultProps = {
    value: '',
};

export { EditTextField as default };
