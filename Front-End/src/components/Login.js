import React, { Component } from "react";
import {
  Form,
  Col,
  Row,
  Button,
  Badge
} from "react-bootstrap";
import TwitterLogin from "react-twitter-login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      image:null
    };
    this.eventChangehandler = this.eventChangehandler.bind(this);
  }
  componentWillMount() {

    //API end point to
    // this.setState({
    //   goals: dummyOptions,
    // });
  }

  eventChangehandler = (e) => {
    console.log('Event', e.target.name,'valye', e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveData = (e) => {
    e.preventDefault();
    console.log('Data saved first is now!!!!' , this.state)
    //API End {point}

    this.props.history.push('/home', {
        
      })
  };
   authHandler = (err, data) => {
    console.log(err, data);
  };

  render() {
    console.log('This goals', this.state.goals)
    return (
      <div
        style={{
          display: "flex",
          flexDirection:'column',
          marginTop: "150px",
          justifyContent: "center",
          alignItems:'center'
        }}
      >
        <div
         
        >
          {/* <h2>Login</h2> */}
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  required/>
  </Form.Group>
  <Button variant="primary" onClick={this.saveData}>Login</Button>
</Form>
          
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
                 

<p>New to the platform, <a href='/signup'>signup here</a></p>
       
   
        </div>
      </div>
    );
  }
}
export default Login;
