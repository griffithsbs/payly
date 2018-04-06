import React from 'react';

class EditPersonName extends React.Component {

    constructor(props) {
        super(props);
        this._onSave = this._onSave.bind(this);
    }

    render() {
        return (
            <div>
                <input defaultValue={this.props.firstName} ref={i => this.firstNameInput = i} /> 
                <input defaultValue={this.props.lastName} ref={i => this.lastNameInput = i} /> 
                <button onClick={this._onSave}>Save</button>
            </div>
        );
    }

    _onSave() {
        this.props.onSave({
            firstName: this.firstNameInput.value,
            lastName: this.lastNameInput.value,
            key: this.props.listKey
        });
    }

}

EditPersonName.propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired,
    onSave: React.PropTypes.func.isRequired,
    listKey: React.PropTypes.string // used to refer to the index of the component within a list of editable names
};

export { EditPersonName as default };
