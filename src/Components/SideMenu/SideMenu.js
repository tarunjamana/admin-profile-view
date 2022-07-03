import React from 'react';
import {Offcanvas,Button} from 'react-bootstrap';
import './sidemenu.scss';
import {SavedData} from '../../Context/DataContext';


function SideMenu() {
  const {empId,showUser,setShowUser,showPosts,setShowPosts}= SavedData();
  let btnState=empId!== null?false:true;
  return (
    <Offcanvas show={true} placement="end" scroll={true} backdrop={false} className="side-menu">
    <Offcanvas.Body>
      <div className='side-btn'>
      <Button disabled={btnState} variant='link' onClick={() => {
                setShowUser(true)
                setShowPosts(false)
      }}  className="side__ctas">Profile</Button>
      <Button disabled={btnState}  variant='link' onClick={() => {
                setShowUser(false)
                setShowPosts(true)
      }}  className="side__ctas">Posts</Button>
      </div>
    </Offcanvas.Body>
   
    </Offcanvas> 
  )
}

export default SideMenu