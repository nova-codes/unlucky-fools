import React from 'react';
import './Input.css';

class Input extends React.Component {
    state = {
        nameValue: []
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log('Submitted! Value: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='input-container'>
                <h1 className='uf-title'> Enter Their Names </h1>
                
                <form onSubmit={this.handleSubmit}>
                    <input id='names' className='input-field' type='text' placeholder='Each name separated by a comma' value={this.state.nameValue} onChange={this.handleChange} />

                    <button id='fate' className='he-btn btn-round btn-indigo'>seal their fate</button>
                </form>
            </div>
        )
    }
}

export default Input;