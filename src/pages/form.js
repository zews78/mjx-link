import React from 'react'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ['apple','mango']};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        //prevent the page from reloading
        event.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange} />
                <select multiple={true} value= {this.state.value} onChange={this.handleChange}>
                    <option value='grapes'>grapes</option>
                    <option value='mango'>mango</option>
                    <option value='apple'>apple</option>


                </select>
                
                <input type='submit' value="submit" />
            </form>
        )
    }
}

export default Form