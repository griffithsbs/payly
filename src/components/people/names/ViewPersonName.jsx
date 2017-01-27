import React from 'react';

import ViewTextField from '../../general/textfields/ViewTextField.jsx';

class ViewPersonName extends React.Component {

    render() {
        return <ViewTextField value={`${this.props.firstName} ${this.props.lastName}`} onEdit={this.props.onEdit} />;
    }

}

ViewPersonName.propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired,
    onEdit: React.PropTypes.func.isRequired
}

export { ViewPersonName as default }