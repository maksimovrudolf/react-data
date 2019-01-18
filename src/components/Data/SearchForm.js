import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm(props) {
    const {value, onChange, onClick} = props;

    return <div className='input-group mb-3'>
        <input value={value} onChange={onChange} type='text' className='form-control'/>
        <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={onClick}>Найти</button>
        </div>
    </div>;
}

SearchForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};