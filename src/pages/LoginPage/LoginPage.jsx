import { TextField, Button } from '@mui/material';
import { Component } from 'react';
import { connect } from 'react-redux';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div className="flex justify-around">
        <div className="m-12">
          <center>
            {this.props.errors.loginMessage && (
              <h2 className="alert" role="alert">
                {this.props.errors.loginMessage}
              </h2>
            )}
            <form onSubmit={this.login}>
              <h1 className="text-2xl font-bold">Login</h1>
              <div className="mb-12 mt-4">
                <TextField
                  id="Username"
                  label="Username"
                  variant="filled"
                  onChange={this.handleInputChangeFor('username')}
                />
              </div>
              <div>
                <TextField
                  type="password"
                  name="password"
                  value={this.state.password}
                  variant="filled"
                  onChange={this.handleInputChangeFor('password')}
                />
              </div>
              <div>
                <input
                  className="log-in"
                  type="submit"
                  name="submit"
                  value="Log In"
                />
              </div>
            </form>
          </center>
        </div>
        <div className="bg-gray-400 m-12 rounded-lg w-8/12 h-96">
          <div className="justify-center flex">
            {' '}
            <p className="my-12 text-2xl font-bold">
              New here? Get registered and start writing!
            </p>
          </div>
          <div className="justify-center flex">
            {' '}
            <Button
              variant="contained"
              type="button"
              className="link-button "
              onClick={() => {
                this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' });
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
