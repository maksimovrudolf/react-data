import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.description
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        const {firstName, lastName, address} = this.props;

        return (
            <div className='card mt-4'>
                <div className='card-body'>
                    <div className='mb-3'>
                        Выбран пользователь <b>{firstName + ' ' + lastName}</b>
                    </div>
                    <div className='mb-2'>Описание:</div>
                    <div>
                        <textarea value={this.state.value} onChange={this.handleChange} className='form-control'/>
                    </div>
                    <ul className='list-group mt-3'>
                        <li className='list-group-item'>Адрес проживания: <b>{address.streetAddress}</b></li>
                        <li className='list-group-item'>Город: <b>{address.city}</b></li>
                        <li className='list-group-item'>Провинция/штат: <b>{address.state}</b></li>
                        <li className='list-group-item'>Индекс: <b>{address.zip}</b></li>
                    </ul>
                </div>
            </div>
        );
    }
}

Info.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.shape({
        streetAddress: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
    }),
};

export {Info};