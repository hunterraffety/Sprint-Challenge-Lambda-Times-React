import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super(props);
    this.state = {
      user: '',
      isLoggedIn: false
    };
  }
}
