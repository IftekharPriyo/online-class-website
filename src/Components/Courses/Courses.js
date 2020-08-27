import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Courses.css'
const Courses = (props) => {
    const {name, author, description, price, category, image} = props.course
    return (
        <div className='courses-card'>
            <Card>
                <Card.Header as="h5">{category}</Card.Header>
                <Card.Img className='img-card' variant="top" src={image} />
                <Card.Body>
                    <Card.Title style={{fontSize:'40px'}}>{name}</Card.Title>
                    <Card.Text>
                        <p>By : <span style={{fontSize:'20px'}}>{author}</span></p>
                        <p style={{fontSize:'20px'}}>{description}</p>
                        <h4>Price : ${price}</h4>
                    </Card.Text>
                    <Button onClick={()=>props.handleCourse(price)} variant="primary"> <FontAwesomeIcon icon={faShoppingCart}/> Enroll Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;