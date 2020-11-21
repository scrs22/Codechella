import React, { Component } from "react";
import {
  Form,
  Col,
  Row,
  Button,
  Badge
} from "react-bootstrap";

const dummyOptions = ['Lose Weight', 'Rehabs','Job Seekers']
const dummyTrends = ['Dienting', 'Exercise']
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      trends:[],
      image:null
    };
    this.eventChangehandler = this.eventChangehandler.bind(this);
  }
  componentWillMount() {

    //API end point to
    this.setState({
      goals: dummyOptions,
    });
  }

  eventChangehandler = (e) => {
    console.log('Event', e.target.name,'valye', e.target.value)
    if(e.target.name=='goal')
    {
      //API end point to hit for trending tweetws
      this.setState({trends:dummyTrends})
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveImage= (imageSrc)=>{
    console.log('Image', imageSrc)
    this.setState({
      image:imageSrc
    })
  }
  saveData = (e) => {
    e.preventDefault();
    console.log('Data saved first is now!!!!' , this.state)
  };
  render() {
    console.log('This goals', this.state.goals)
    return (
      <div
        style={{
          display: "flex",
          flexDirection:'column',
          marginTop: "100px",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{ display: "flex", flexDirection:'row', justifyContent:'center'}}
        >
          
            <Form>
              <Form.Group controlId="select">
                <Form.Label>Goal:</Form.Label>
                <Form.Control as="select" name='goal' custom onChange={this.eventChangehandler}>
                <option value='Select'>Select Goal</option> 
                {
                  this.state.goals.map(el=>{
                    return <option value={el}>{el}</option>
                  })
                }  
                </Form.Control>
              </Form.Group>
            </Form>
          
        </div>
        
        <div
          style={{
            display: "flex",
            flexDirection:'row',
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          {this.state.trends.map(el=>{
            return  <div style={{marginLeft:'10px'}}><h3><Badge variant="secondary">#el</Badge></h3></div>
          })}
        </div>

       
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Button variant="primary" onClick={this.saveData}>SAVE</Button>
        </div>
      </div>
    );
  }
}
export default Home;
