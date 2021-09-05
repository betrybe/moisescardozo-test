import React from 'react';
import FormLogin from '../components/common/Forms/login';
import Box from '../components/layout/Box';

class Login extends React.Component {
  render() {
    return (
      <Box styleProp="LoginContainer">
        <FormLogin />
      </Box>
    );
  }
}

export default Login;
