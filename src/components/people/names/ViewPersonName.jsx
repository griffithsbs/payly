import React from 'react';
import ViewTextField from 'components/general/textfields/ViewTextField';

const ViewPersonName = props =>
    <ViewTextField value={`${props.firstName} ${props.lastName}`} onEdit={props.onEdit} />;

ViewPersonName.propTypes = {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string.isRequired,
    onEdit: React.PropTypes.func.isRequired
};

export { ViewPersonName as default };
