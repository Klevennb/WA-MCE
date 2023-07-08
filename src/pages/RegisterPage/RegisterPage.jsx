import { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '../../components/Basic/Button/Button';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
    this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div className="flex flex-col gap-y-12 mt-12">
        {this.props.errors.registrationMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form className="flex flex-col justify-center gap-y-12 items-center">
          <Typography variant="h4">Register User</Typography>
          <div className="flex justify-center">
            <label htmlFor="username">
              <TextField
                id="usernmame-input"
                label="Username"
                variant="outlined"
                onChange={this.handleInputChangeFor('username')}
                value={this.state.username}
                className="flex-grow"
              />
            </label>
          </div>
          <div>
            <TextField
              id="password-input"
              label="Password"
              variant="outlined"
              onChange={this.handleInputChangeFor('password')}
              value={this.state.password}
              className="flex-grow"
            />
          </div>
        </form>
        <center>
          <Button type="submit" label="Register" onClick={this.registerUser} />
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);
