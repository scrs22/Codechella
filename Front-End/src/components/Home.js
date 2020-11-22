import React, { Component } from "react";
import {
  Form,
  Col,
  Row,
  Button,
  Badge
} from "react-bootstrap";
import TwitterLogin from "react-twitter-login";
const dummyOptions = ['Lose Weight', 'Quit Drinking','Get Employed']

const loseWeight = [{title:'#Dieting', status: false}, 
{title:'#MentalHealth', status: false},{title:'#Fitness', status: false}]
const quit = [{title:'#rehab', status: false}, 
{title:'#addiction', status: false},{title:'#alchoholism', status: false},{title:'#sobreity', status: false}]
const employed = [{title:'#HireMe', status: false}, 
{title:'#jobsearch', status: false},{title:'#Unemployed', status: false},{title:'#hiring', status: false}]
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      trends:[],
      trendSelected:'',
      image:null,
      goal:''
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
      if(e.target.value=='Lose Weight')
      {
        this.setState({trends:loseWeight, goal:e.target.value})
      }
      else if(e.target.value=='Quit Drinking')
      {
        this.setState({trends:quit,goal:e.target.value})
      }
      else{
        this.setState({trends:employed,goal:e.target.value})
      }
      
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

    console.log('Data saved goal and trend selected!!!!' , this.state.goal, this.state.trendSelected)
    this.props.history.push('/dashboard', {
        goal: this.state.goal,
        trend: this.state.trendSelected
    })
  };

  makeActive=(el)=>{
    let trends = this.state.trends;
    let trendSelected = el
    console.log('Here')
    for(var i=0;i<trends.length;i++)
    {
      if(trends[i].title==el)
      {
        trends[i].status = true;
        
      }
      else
      {
        trends[i].status = false;
      }
    }
    this.setState({
      trends: trends,
      trendSelected:trendSelected
    })
  }
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
                <Form.Label><h3>Choose Goal</h3></Form.Label>
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
            return  <div style={{marginLeft:'10px',cursor: 'pointer'}}  id={el} onClick={()=>this.makeActive(el.title)}><h3>{!el.status?<Badge variant="secondary">{el.title}</Badge>:<Badge variant="primary">{el.title}</Badge>}</h3></div>
          })}
        </div>

       
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Button variant="primary" onClick={this.saveData}>Next</Button>
        </div>
      </div>
    );
  }
}
export default Home;
