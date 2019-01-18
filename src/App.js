import React, {Component} from 'react';
import {Data, Spinner, Select, Info} from './components';
import {options, keys} from './constants';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isSelected: false,
            selectedItem: {},
            isLoading: false,
            selectValue: options[0].value
        };
    }

    componentDidMount() {
        this.loadDataAsync();
    }

    render() {
        const {data, isSelected, selectedItem} = this.state;

        return (
            <div className='container'>
                <div className='my-5'>
                    <div className='mb-3'>
                        <Select value={this.state.selectValue} options={options} onChange={this.handleSelectChange}/>
                    </div>
                    {
                        this.state.isLoading ? <Spinner/> : <div>
                            <Data data={data} keys={keys} onClick={this.handleClick}/>
                            {isSelected ? <Info {...selectedItem} key={Math.random()}/> : null}
                        </div>
                    }
                </div>
            </div>
        );
    }

    loadDataAsync = async () => {
        this.setState({isLoading: true});

        try {
            const rawResponse = await fetch(this.state.selectValue, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const data = await rawResponse.json();

            this.setState({data});
        } catch (e) {
            console.log(e);
        }

        this.setState({isLoading: false});
    };

    handleClick = (data) => {
        this.setState({selectedItem: data, isSelected: true});
    };

    handleSelectChange = (event) => {
        this.setState({
            selectValue: event.target.value,
            isSelected: false,
            selectedItem: {}
        }, () => {
            this.loadDataAsync();
        });
    };
}

export default App;