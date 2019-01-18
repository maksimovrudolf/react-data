import React from 'react';
import PropTypes from 'prop-types';

export default function Table(props) {
    const {keys, data, onClickRow, onClickColumn, orderBy, tableClass, graphicAsc, graphicDesc} = props;

    return (
        <table className={tableClass}>
            <thead>
            <tr>
                {
                    keys.map((item, index) => {
                        return <th key={index}>
                            <span className='link-sort' onClick={() => onClickColumn(item.key)}>
                                {item.value}
                                {item.key === orderBy.key ? (orderBy.type === 'ASC' ? graphicAsc : graphicDesc) : ''}
                            </span>
                        </th>;
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                data.map((tdValue, tdIndex) => {
                    return <tr key={tdIndex} onClick={() => onClickRow(tdValue)}>
                        {keys.map((keyValue, keyIndex) => <td key={keyIndex}>{tdValue[keyValue.key]}</td>)}
                    </tr>;
                })
            }
            </tbody>
        </table>
    );
}

Table.defaultProps = {
    graphicAsc: ' ▲',
    graphicDesc: ' ▼',
    tableClass: '',
};

Table.propTypes = {
    keys: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onClickRow: PropTypes.func.isRequired,
    onClickColumn: PropTypes.func.isRequired,
    orderBy: PropTypes.shape({
        key: PropTypes.string,
        type: PropTypes.oneOf(['ASC', 'DESC']),
    }).isRequired,
    tableClass: PropTypes.string.isRequired,
    graphicAsc: PropTypes.string.isRequired,
    graphicDesc: PropTypes.string.isRequired,
};