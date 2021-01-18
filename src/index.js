import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <div style={{content: "center"}}>
      <form onSubmit={this.handleSubmit}>
      <h1>Form {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your Phone No.:</p>
      <input
        type='number'
        name='PhoneNo.'
        onChange={this.myChangeHandler}
      />
      <p>Enter your password:</p>
      <input
        type='password'
        name='password'
        onChange={this.myChangeHandler}
      />
      <p>Enter your re-type password:</p>
      <input
        type='password'
        name='password2'
        onChange={this.myChangeHandler}
      />
          
      </form>
       <button type="submit">submit</button> 
       </div>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
