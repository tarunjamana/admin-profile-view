import React from 'react';
import './userprofilecard.scss';
import {Card,Form} from 'react-bootstrap';
import {getAddress} from '../../HelperFuncs/getAddress';

function UserProfileCard({data,initials}) {
    console.log(data,initials);
    let address = getAddress(data?.[0])
  return (
    <Card style={{ width: 'S' }} className="posts-card">
    <Card.Body>
      <Card.Title>
      <div className='Avatar-section'>
        <div className='Avatar'>{initials && initials.toUpperCase()}</div>
        <p>{data?.[0].name}</p>
      </div>
      </Card.Title>
      <Card.Text>
      <Form>
  <fieldset disabled>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="email">Email</Form.Label>
      <Form.Control id="email" placeholder="email" value={data?.[0].email} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="address">Address</Form.Label>
      <Form.Control id="address" placeholder="address" value={address} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="phone">Phone</Form.Label>
      <Form.Control id="phone" placeholder="phone" value={data?.[0].phone} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="website">Website</Form.Label>
      <Form.Control id="website" placeholder="website" value={data?.[0].website} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="company">Company</Form.Label>
      <Form.Control id="company" placeholder="company" value={data?.[0].company.name} />
    </Form.Group>
  </fieldset>
</Form>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default UserProfileCard