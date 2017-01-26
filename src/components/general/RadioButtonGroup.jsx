import React from 'react';

class RadioButtonGroup extends React.Component { // TODO this could be a pure function

    render() {
        const buttons = this.props.buttons.map(b => 
            <label>
                <input type="radio" selected={b.isSelected} onChange={this.props.onSelected(b.value)} /> {b.label}
            </label>
        );
        return <div>{buttons}</div>;
    }

}

RadioButtonGroup.propTypes = {
    buttons: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onSelected: React.PropTypes.func.isRequired
};

export { RadioButtonGroup as default }