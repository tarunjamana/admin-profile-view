import React,{useEffect,useState} from  'react';
import Header from '../Header/Header';
import {SavedData} from '../../Context/DataContext';
import {Container,Row,Col,Button} from 'react-bootstrap';
import './datatable.scss';

function DataTable() {
    const {data ,dataLoaded,setEmpId,showUser,setShowUser,showPosts,setShowPosts}= SavedData();
  
    const [value,setValue] = useState('');
  
   const transformedData = () =>{
     let filteredData = data 
     if(value && data){
       filteredData = filteredData.filter((data) => {
        return   data.name.toLowerCase().includes(value);
       })
     }
     return filteredData
   }
    function handleChange(e){
      setValue(e.target.value);
    }
    if(!dataLoaded) return (
      <div>
        <h1>Loading Please Wait...</h1>
      </div>
    )
  return (
    <>
    <Header value={value} handleChange={handleChange} />
  
     <Container>
      <Row className='column-headers'>
        <Col>Name</Col>
        <Col>User Name</Col>
        <Col xs={4}>Email </Col>
        <Col>Phone</Col>
        <Col>Website</Col>
        <Col></Col>
        <Col></Col>
      </Row>
      {transformedData().map((item) =>{
        return (
           <Row key={item.id} className="data-columns">
        <Col>{item.name}</Col>
        <Col>{item.username}</Col>
        <Col xs={4}>{item.email}</Col>
        <Col>{item.phone}</Col>
        <Col>{item.website}</Col>
        <Col><Button 
          variant='link' 
          onClick={() => {
          setEmpId(item.id)
          setShowUser(true)
          setShowPosts(false)
          }} 
          className="row-ctas">View Profile</Button></Col>
        <Col><Button 
        variant='link' 
        onClick={() => {
          setEmpId(item.id)
          setShowPosts(true);
          setShowUser(false)
          }} 
          className="row-ctas">View Post</Button></Col>          
         </Row>
        )
      })}
     </Container> 
    </>
  )
}

export default DataTable