import React from 'react';

class ViewPersonName extends React.Component {

    render() {
        return (
            <div>
                <span>{this.props.firstName} {this.props.lastName} <button onClick={this.props.onEdit}>Edit</button></span>
            </div>
        );
    }

}

ViewPersonName.propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired,
    onEdit: React.PropTypes.func.isRequired
}

export { ViewPersonName as default }