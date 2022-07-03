import React,{useState,useEffect} from 'react';
import {SavedData} from '../../Context/DataContext';
import {Offcanvas} from 'react-bootstrap';
import PostsCard from '../PostsCard/PostsCard';
import useFetch from '../../Hooks/useFetch';
import './posts.scss';
import {getInitials} from '../../HelperFuncs/getInitials'

function Posts() {

    const {empId,showPosts,setShowPosts}= SavedData();
    const {data,dataLoaded} =useFetch(`https://jsonplaceholder.typicode.com/users/${empId}/posts`);
    const {data:user,dataloaded:userLoaded} = useFetch(`https://jsonplaceholder.typicode.com/users/${empId}`);
    const initials = getInitials(user?.[0]);
     
    // console.log(user?.[0])
    // const fullName = user?.[0].name.split('')
    // const initials = fullName?.shift().charAt(0) + fullName?.pop().charAt(0);

  return (
    <Offcanvas show={showPosts} placement="end" scroll={true} backdrop={false} className="posts-section">
        <Offcanvas.Header closeButton onHide={() => setShowPosts(!showPosts)}>
          <Offcanvas.Title>Posts</Offcanvas.Title>
        </Offcanvas.Header>
    <Offcanvas.Body>
        <div className='Avatar-section'>
        <div className='Avatar'>{initials && initials.toUpperCase()}</div>
        <p>{user?.[0].name}</p>
        </div>
        {/* {!dataLoaded && <p>Loading...</p>} */}
        {showPosts && data.map((item) =>{
            return(
                <PostsCard key={item.id} title={item.title} body={item.body}/>
            )
        })}
    </Offcanvas.Body>
</Offcanvas> 
  )
}

export default Posts