import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Courses.css'
const Courses = (props) => {
    const {name, author, description, price} = props.course
    return (
        <div className='courses-card'>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Img className='img-card' variant="top" src="https://www.jenyalestina.com/blog/wp-content/uploads/2019/05/web-development.jpg" />
                <Card.Body>
                    <Card.Title style={{fontSize:'40px'}}>{name}</Card.Title>
                    <Card.Text>
                        <p>By : <span style={{fontSize:'20px'}}>{author}</span></p>
                        <p style={{fontSize:'20px'}}>{description}</p>
                        <h4>Price : ${price}</h4>
                    </Card.Text>
                    <Button onClick={()=>props.handleCourse(price)} variant="primary"> <FontAwesomeIcon icon={faShoppingCart}/> Purchase</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;