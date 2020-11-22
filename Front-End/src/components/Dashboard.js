import React, { Component } from "react";
import {
  Form,
  Col,
  Row,
  Button,
  Badge
} from "react-bootstrap";
import TwitterLogin from "react-twitter-login";

let tweets=[{
user:'@Oleksandr_Ko',
tweet:'RT @ValiAxaviy: How will you know if you have a good life and a fit body? Find the answer today!\n\nClick on the link below:point_down:\nhttps://t.co/Ox9… https://twitter.com/twitter/statuses/1330463872092921857 '
},{
    user:'@100Ebay',
    tweet:'Men’s  Nike David and Goliath Training Shorts CJ2015-077 #Nike #Activewear https://t.co/wo1JiXVDqM via @eBay £24.99 nike #davidandgoliath #fitness #loungwear #fitnessfashion https://twitter.com/twitter/statuses/1330463859770056706'  
},{
    tweet:`RT @ur_sport: Men's Compression Running Tights\n\n$ 16.64\n\n #ursportchoice #active #style #fitness #fitspo #stretching #workout\n\nhttps://t.co… https://twitter.com/twitter/statuses/1330463596200026112`,
    user:'@Tyra_Ann7'
},{
    tweet:`Hi, I started trying these custom keto https://t.co/spXVoXwxSC was so fast that I lost 10 kg in 2 weeks and stopped there and… https://twitter.com/twitter/statuses/1330463360391974917`,
    user:'@h05308389'
},{
    tweet:`The latest from, Financial literacy Daily is out!  https://t.co/kVCwZ55czt Thanks to @SFLReporter @Harvard85 @JervisCapital #fitness #bodybuilding https://twitter.com/twitter/statuses/1330463306453311488`,
    user:'@johncfinancial'
}]


let groups=[{
    name:'@Stephanie S. Bolton Followers',
    followers:'1082',
    url:'https://twitter.com/HealingSoundsTx'
    },{
        name:'@ya boi retweet boss Followers',
        followers:'1203',
        url:'https://twitter.com/retweetbossman'
        },
        {
            name:'@WeSPARK',
            followers:'994',
            url:'https://twitter.com/weSPARKsupport' 
        },
        {
            name:'@SuzyWong',
            followers:'693',
            url:'https://twitter.com/SuzyWong1812' 
        },{
            name:'@MigraineQuebec',
            followers:'522',
            url:'https://twitter.com/MigraineQuebec' 
        }
    ]
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      trends:[],
      trendSelected:'',
      image:null,
      goal:'',
      trend:true,
      support:false,
      track:false,
      tweet:''
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


  getDate=()=>{
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${'-'}${month<10?`0${month}`:`${month}`}${'-'}${date}`    
    
  }

  uploadFile = (event) => {
    let file = event.target.files[0];
    console.log(file);
    this.setState({
        image:URL.createObjectURL(event.target.files[0])
    })
}

  saveImage= (imageSrc)=>{
    console.log('Image', imageSrc)
    this.setState({
      image:imageSrc
    })
  }
  saveData = (e) => {
    e.preventDefault();
    alert('Tweet successull!')
    this.setState({
        image:null,
        tweet:''
    })
    console.log('Data saved goal and trend selected!!!!' , this.state.goal, this.state.trendSelected)
  };

  makeActive=(el)=>{
if(el=='Trend')
{
    this.setState({
        trend:true,
        support:false,
        track:false
    })
}

else if(el=='Support')
{
    this.setState({
        trend:false,
        support:true,
        track:false
    })
}
else
{
    this.setState({
        trend:false,
        support:false,
        track:true
    })
}
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
          alignItems:'center'
        }}
      >
<div
          style={{ display: "flex", flexDirection:'row', justifyContent:'space-around'}}
        >
 
    <div style={{marginLeft:'10px',cursor: 'pointer'}}  onClick={()=>this.makeActive('Trend')}><h3>{!this.state.trend?<Badge variant="secondary">Trend</Badge>:<Badge variant="info">Trend</Badge>}</h3></div>
    <div style={{marginLeft:'10px',cursor: 'pointer'}}  onClick={()=>this.makeActive('Support')}><h3>{!this.state.support?<Badge variant="secondary">Support</Badge>:<Badge variant="info">Support</Badge>}</h3></div>
    <div style={{marginLeft:'10px',cursor: 'pointer'}}  onClick={()=>this.makeActive('Track')}><h3>{!this.state.track?<Badge variant="secondary">Track</Badge>:<Badge variant="info">Track</Badge>}</h3></div>
       
        </div>


        <div
          style={{ display: "flex", flexDirection:'row', justifyContent:'space-around'}}
        >
        <p>Goal:<b>{this.props.location.state.goal}</b></p>  
        <p style={{marginLeft:'50px'}}>HashTag:<b>{this.props.location.state.trend}</b></p> 
        </div>
        
       { this.state.trend?<h2>What's Trending?</h2>:''}
        
      {this.state.trend? tweets.map((el)=>{
          return  <div style={{display:"flex", backgroundColor:'lightgray', height:'60px', width:'80%', alignItems:'center', marginTop:'30px'}}>
          <div style={{marginLeft:'30px'}}><p><b>{el.user}</b> {el.tweet} </p></div>
              </div>
      }) :
          (this.state.support?<div style={{display:'flex',flexDirection:"row", width:'80%', justifyContent:'flex-start', alignItems:'center'}}>

        <div style={{display:'flex', flexDirection:'column', flex:2, width:'100%'}}>
      <div style={{flexDirection:'column', border: "1px solid rgb(6, 75, 96)"}}>
      <h3 style={{textAlign:'center'}}>Support Groups</h3>
      {groups.map((el)=>{
          return  <div style={{display:"flex", backgroundColor:'lightgray', width:'100%', alignItems:'center', justifyContent:'space-between', marginTop:'30px'}}>
          <div style={{marginLeft:'30px', display:'flex', flexDirection:'column', justifyContent:'center'}}><p style={{textAlign:'center'}}><b>{el.name}</b></p>
          <p>{el.followers} Followers</p>
          </div>
          <div>
          <a href={el.url} target='_blank'>Follow</a>
          </div>
              </div>
      })}
      
      </div>
        </div>
        <div style={{display:'flex', flexDirection:'column', flex:1, marginLeft:'20px', border: "1px solid rgb(6, 75, 96)", justifyContent:'flex-start', alignItems:'center'}}>

        <p>Support Chat</p>
        
</div>

          </div>:
    <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start", alignItems:'center'}}>
        <Button variant='warning'>View Previous Day</Button>
     <div><h4>Date: {this.getDate()}</h4>  </div>
     <br/> 
      <div style={{display:'flex', flexDirection:'row'}}>
        <p>Post Tweet: </p>  
      <textarea id="w3review" name="w3review" rows="4" cols="50" name='tweet' onChange={this.eventChangehandler}>
      
  </textarea>

      </div>
      <div style={{marginTop:'20px'}}>
      <label for="avatar">Choose a media:</label>
      <input type="file"
        name="myFile"
        onChange={this.uploadFile} />
       </div>
       {this.state.image!=null ?<div><p><b>Captured Photo</b></p>
              <img src={this.state.image} height='200px' width='200px'>
              </img></div>:<div style={{height:'200px', width:'200px', backgroundColor:'gray'}}><p>Selected Image</p>
              </div>}
      <div style={{display:'flex', width:'10%', marginTop:'50px', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <div><Button variant="primary" size="lg"  onClick={this.saveData}>Tweet</Button></div>
      </div>
</div>)
      }
        
       
        
      </div>
    );
  }
}
export default Dashboard;
