import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    // tratar de siempre hacer los eventos con arrow function, asi babel nos ayuda a evitar problemas undefined
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    // ALT: se puede hacer con arrow function en onSubmit en el form: event => this.onFormSubmit(event)
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label htmlFor="">Image Search</label>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
