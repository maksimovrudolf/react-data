import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
    const {onChange, value, options} = props;

    return <select className='custom-select' onChange={onChange} value={value}>
        {
            options.map((item, index) => <option value={item.value} key={index}>{item.label}</option>)
        }
    </select>;
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export {Select};