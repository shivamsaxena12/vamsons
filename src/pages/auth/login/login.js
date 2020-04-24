import React from 'react';
import './login.scss';

// Libraries
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import TextField from '../../../components/inputs/textField';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='login-wrapper'>
        <div className='logo-background'>
          <div className='logo-background-filter' />
          VAMSONS
        </div>

        <Container className='login-form' fluid='md'>
          <Row className='justify-content-md-center'>
            <Col sm={4}>
              <TextField
                className='login-form-input'
                placeholder='Phone Number'
              />
            </Col>
          </Row>
          <Row className='justify-content-md-center'>
            <Col sm={4}>
              <TextField className='login-form-input' placeholder='Password' />
            </Col>
          </Row>
          <Row className='justify-content-md-center'>
            <Col sm={4}>
              <PrimaryButton btnText='Login' isBlock />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
