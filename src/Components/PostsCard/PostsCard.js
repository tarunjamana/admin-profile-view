import React from 'react';
import {Card} from 'react-bootstrap';
import './postscard.scss';

function PostsCard({title,body}) {
  return (
    <Card style={{ width: '100%' }} className="posts-card">
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {body}
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default PostsCard