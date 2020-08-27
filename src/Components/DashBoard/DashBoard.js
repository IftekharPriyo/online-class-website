import React, { useState } from 'react';
import './DashBoard.css'
import Courses from '../Courses/Courses';
import fakeData from '../../Fakedata';
import Cart from '../Cart/Cart';


const DashBoard = () => {

    const hasToShow = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(hasToShow);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }


    return (

        <div id='top-view' className='dashboard-container'>

            <div className='courses-container'>
                <h3 id='offer-text'>Courses Offered</h3>
                <div>
                    {
                        courses.map(courses => <Courses course={courses} handleCourse={handleAddCourse}></Courses>)
                    }

                </div>
            </div>

            <div className='cart-container'>
                <h3 id='order-text'>Order Summary</h3>
                <Cart cart={cart}></Cart>
            </div>


        </div>

    );
};

export default DashBoard;