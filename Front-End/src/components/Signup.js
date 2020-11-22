import React, { Component } from "react";
import {
  Form,
  Col,
  Row,
  Button,
  Badge
} from "react-bootstrap";
import TwitterLogin from "react-twitter-login";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      trends:[],
      trendSelected:'',
      image:null,
      status: true
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
    if(e.target.name=='goal')
    {
      //API end point to hit for trending tweetws
    //   this.setState({trends:dummyTrends})
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveData = (e) => {
    e.preventDefault();
    console.log('Data saved first is now!!!!' , this.state)
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
  <Form.Group controlId="formBasicEmail" onSubmit={this.saveData}>
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
  <Button variant="primary" type="submit">Signup</Button>
</Form>
          
        </div>
  {this.state.status?   <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
                 
<p><i>Next Step is to login using Twitter</i></p> <br/>
<div>
                 <TwitterLogin
      authCallback={this.authHandler}
      consumerKey='0j0ct8IgdolEg7y4TofjSaCY4'
      consumerSecret='i2CznMvMvpcPDeK83ZpxHs22p3FtrgXS13zSHLoCuwrkXE16Vy'
    />
       
   </div>
        </div>: null}
      </div>
    );
  }
}
export default Signup;
