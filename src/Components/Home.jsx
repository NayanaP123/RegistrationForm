import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import images from '../assets/images.jpeg'
function Home({data}) {
  console.log(data);
  
  return (
   
<div style={{backgroundColor:'black',height:'100vh'}}>

    <div className="container" >
      <br/>

      <h3 style={{color:'wheat',textAlign:'center'}}>Hello, <em>{data.username}</em></h3>
      <p style={{color:'greenyellow',textAlign:'center'}}>Your registration is successful </p>


      <div style={{marginTop:'40px'}} className="row">
        <div className="col-md-4 col-sm-12"></div>
        <div className="col-md-4 col-sm-12" style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '19rem',backgroundColor:'goldenrod' }}>
      <Card.Img style={{height:'250px'}} variant="top" src={images} />
      <Card.Body>
        <Card.Title style={{textAlign:'center',color:'rebeccapurple'}}>{data.username}</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item style={{textAlign:'center',backgroundColor:'goldenrod'}}><em>{data.email}</em></ListGroup.Item>
        <ListGroup.Item style={{textAlign:'center',backgroundColor:'goldenrod'}}>DOB: {data.dob}</ListGroup.Item>
        <ListGroup.Item style={{textAlign:'center',backgroundColor:'goldenrod'}}>Phone Number: {data.phoneNumber}</ListGroup.Item>

       
      </ListGroup>
     
      </Card.Body>
    </Card>


    <br />
    
    </div>
    <div className="col-md-4 col-sm-12"></div>
      </div>
    </div>

   
    
    
    
    </div>
  )
}

export default Home