import React from 'react';
import {SavedData} from  '../Context/DataContext';
import {Offcanvas,Button} from 'react-bootstrap';


function TestComponent() {
    const {data,storedData}= SavedData();
  return (
    <div>
      <Offcanvas show={true} placement="end" scroll={true} backdrop={false}>
      <Offcanvas show={true} placement="end" scroll={true} backdrop={false} className="side-menu">
    <Offcanvas.Body>
      <div className='side-btn'>
      <Button variant='link'  className="side__ctas">Profile</Button>
      <Button variant='link'  className="side__ctas">Post</Button>
      </div>
    </Offcanvas.Body>
   
    </Offcanvas> 
    <Offcanvas show={true} placement="end" scroll={true} backdrop={false} className="side-menu">
    <Offcanvas.Body>
      <div className='side-btn'>
      <Button variant='link'  className="side__ctas">Profile</Button>
      <Button variant='link'  className="side__ctas">Post</Button>
      </div>
    </Offcanvas.Body>
   
    </Offcanvas> 
      </Offcanvas>
    </div>
  )
}

export default TestComponent