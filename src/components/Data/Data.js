import React, {Component} from 'react';
import Table from './Table';
import Pagination from 'react-js-pagination';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';
import {getPartedData, getFiltredData, getSortedData} from './helpers';

class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            pages: Math.floor(props.data.length),
            data: getPartedData(props.data, props.perPage),
            orderBy: {
                key: null,
                type: 'ASC'
            },
            query: ''
        };
    }

    render() {
        const {page, pages, orderBy, query, data} = this.state;
        const {onClick: onClickRow, keys, perPage} = this.props;

        return (
            <div>
                <SearchForm
                    value={query}
                    onChange={this.handleSearchInputChange}
                    onClick={this.handleClickSearchButton}/>
                <Table
                    tableClass='table table-hover'
                    orderBy={orderBy}
                    keys={keys}
                    data={data[page]}
                    onClickRow={onClickRow}
                    onClickColumn={this.handleClickColumn}/>
                {
                    pages < perPage ? null : <Pagination
                        itemClass='page-item'
                        linkClass='page-link'
                        activePage={page + 1}
                        itemsCountPerPage={perPage}
                        totalItemsCount={pages}
                        pageRangeDisplayed={5}
                        onChange={this.handlePaginationChange}/>
                }
            </div>
        );
    }

    getData(key, type) {
        let data = this.props.data;

        if (this.state.query) {
            data = getFiltredData(this.props.data, this.props.keys, this.state.query);
        }

        return getSortedData(data, key, type);
    }

    handleClickColumn = (columnKey) => {
        let {type, key} = this.state.orderBy;

        if (columnKey === key) {
            type = (type === 'ASC') ? 'DESC' : 'ASC';
        }

        const data = this.getData(columnKey, type);

        this.setState({
            page: 0,
            orderBy: {
                key: columnKey,
                type,
            },
            data: getPartedData(data, this.props.perPage)
        });
    };

    handleClickSearchButton = () => {
        const data = this.getData(this.state.orderBy.key, this.state.orderBy.type);

        this.setState({
            data: getPartedData(data, this.props.perPage),
            page: 0,
            pages: data.length,
        });
    };

    handleSearchInputChange = (event) => {
        this.setState({query: event.target.value});
    };

    handlePaginationChange = (page) => {
        this.setState({page: page - 1});
    };
}

Data.defaultProps = {
    perPage: 50,
};

Data.propTypes = {
    perPage: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onClick: PropTypes.func.isRequired,
    keys: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })).isRequired,
};

export { Data };