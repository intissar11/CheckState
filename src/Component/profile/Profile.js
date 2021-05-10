import React, { Component } from 'react'
import { Card, Image } from 'react-bootstrap';

export class Profile extends Component {
    //constructor(props){
        //super(props)
        //console.log("constructor()")
        //this.state={count:0,memory:null}
    //}
    //componentDidMount(){
        // console.log("componentDidMount()")
        //this.setState({ memory: setInterval(() => {
        //this.setState({ count: this.state.count+1 });
        //}, 1000) }) }
    //componentDidUpdate=()=>{
        // console.log("componentDidUpdate()")
        //}

//componentWillUnmount = () =>{
        //console.log("componentWillUnmount()")
        //clearInterval(this.state.memory)
        //}
state={
        fullName:"Mark Elliot Zuckerberg",
        bio:"Mark Elliot Zuckerberg (born May 14, 1984) is a former Harvard computer science student who along with a few friends launched Facebook, the world's most popular social network, in February 2004. Zuckerberg also has the distinction of being the world's youngest billionaire, which he achieved in 2008 at the age of 24. He was named 'Man of the Year' by Time magazine in 2010.",
        profession:"The chief executive officer and president of Facebook.",
        imgSrc: 'https://realestatemarket.com.mx/images/influencers/mark.jpg'}

render() 
{
console.log("render()")
return (
<div>
     <Card border="primary" style={{ width: "50%",marginTop:"10px",marginLeft:"25%"}}>
     <Card.Header>Profile Card</Card.Header>
     <Card.Body>
     <Card.Title style={{textAlign:"center",color:"#24629F",fontFamily:"Cursive"}}>{this.state.fullName}</Card.Title>
     <Card.Text>
     <Image style={{height:"250px",width:"250px",marginTop:"10px",marginBottom:"10px"}} className="logo"src={this.state.imgSrc} alt="logo1"  rounded  /> <br/>
     <h6>{this.state.profession}</h6>
     {this.state.bio}
    </Card.Text>
    </Card.Body>
    </Card>
</div>
    )
    }
    }
export default Profile
