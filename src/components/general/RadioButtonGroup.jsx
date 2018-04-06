import React from 'react';

class RadioButtonGroup extends React.Component { // TODO this could be a pure function

    render() {
        const buttons = this.props.buttons.map(b => 
            <label key={b.key}>
                <input type="radio" checked={!!b.isSelected} onChange={() => !b.isSelected && this.props.onSelected(b.key)} /> {b.label}
            </label>
        );
        return <div>{buttons}</div>;
    }

}

RadioButtonGroup.propTypes = {
    buttons: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onSelected: React.PropTypes.func.isRequired
};

export { RadioButtonGroup as default };
