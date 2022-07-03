import React from 'react';
import './userprofile.scss';
import {SavedData} from '../../Context/DataContext';
import UserProfileCard from '../UserProfileCard/UserProfileCard';
import useFetch from '../../Hooks/useFetch';
import {getInitials} from '../../HelperFuncs/getInitials';
import {Offcanvas} from 'react-bootstrap';


function UserProfile() {
    const {empId,showUser,setShowUser} = SavedData();
    const {data,dataLoaded} = useFetch(`https://jsonplaceholder.typicode.com/users/${empId}`);
    const initials = getInitials(data?.[0]);
  return (
    <Offcanvas show={showUser} placement="end" scroll={false} backdrop={false} className="posts-section">
    <Offcanvas.Header closeButton onHide={() => setShowUser(!showUser)}>
      <Offcanvas.Title>Profile</Offcanvas.Title>
    </Offcanvas.Header>
<Offcanvas.Body>
 <UserProfileCard data={data} initials={initials} />
</Offcanvas.Body>
</Offcanvas> 
  )
}

export default UserProfile