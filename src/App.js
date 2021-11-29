import React from 'react';
import image from './amen.jpg';
import './App.css';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={fullName:'Ben Jaafer Amen',bio:'éléve ingénieur en 2eme année génie informatique.je suis sérieux et motivé et je veux améliorer mes experiences et mes compétences',
     img:image, profession:'ingénieur',show:false,countMin:0,countH:0};
  }
  componentDidMount(){
    this.timeID = setInterval(()=>this.setState({countMin:this.state.countMin+1}),1000) ;
    
    this.timeID = setInterval(()=>this.setState({countH:this.state.countH+1}),60000);
    
    
                                         
    
  }
  componentWillUnmount(){
    this.setState({countMin:this.state.countMin=0});
    this.setState({countH:this.state.countH=0});
  }
 
  handleClick=()=>{this.setState({show: !this.state.show})}
  render(){
    
 
    return(
      
      
      <div className="App">
        
        <div className="d-grid gap-2" id="button">
      <Button variant="primary" size="lg" onClick={()=>{this.handleClick()}} id="btn" >
        {this.state.show ?<h1> show </h1>: <h1>hide</h1>} 
      </Button>
      <div className="time">
      <h2>{this.state.countH}<span>:</span>{this.state.countMin}</h2>
      </div>
        </div>
        {
          this.state.show &&
        <Card style={{ width: '18rem' }} className="card">
  <Card.Img variant="top" src={this.state.img} />
  <Card.Body>
    <Card.Title>Profile</Card.Title>
    <Card.Text>
      {this.state.bio}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{this.state.fullName}</ListGroupItem>
    <ListGroupItem>{this.state.profession}</ListGroupItem>
    
  </ListGroup>    
</Card>
  }
      </div>

    );
  }

}


export default App;
