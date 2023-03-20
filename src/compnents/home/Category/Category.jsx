import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  './cat.css'
import fastimg from 'E:/food/src/assets/images/category-01.png'
import pizzaimg from 'E:/food/src/assets/images/category-02.png'
import asianimg from 'E:/food/src/assets/images/category-03.png'
import meatimg from 'E:/food/src/assets/images/category-04.png'
import servimg_1 from 'E:/food/src/assets/images/service-01.png';
import servimg_2 from 'E:/food/src/assets/images/service-02.png'
import servimg_3 from 'E:/food/src/assets/images/service-03.png';

const Category = () => {
    const cData = [
        {
            img: fastimg,
            p:"Fast Food",
        },
        {
            img: pizzaimg,
            p:"Pizza",
        },
        {
            img: asianimg,
            p:"Asian Food",
        },
        {
            img: meatimg,
            p:"Row meat",
    },
    ]
    const servInfo = [
        {
            img: servimg_1,
            head: "Quick delivery",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolorum, alias."
        },
        {
            img: servimg_2,
            head: "Super dine in",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolorum, alias."
        },
        {
            img: servimg_3,
            head: "easy pick up",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolorum, alias."
        }

    ]
return (
    <Fragment>
        <Container className='py-5'>
            <Row>
                {
                    cData.map((category, index )=> (
                        <Col lg="3" md="3" sm="6" key={index} className='py-2'>
                            <div className= 'cat d-flex align-items-center gap-4'>
                                <img src={category.img} alt="" />
                                <h6>{ category.p}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
            <Row>
                    <Col lg="13" className='text-center pt-5'>
                        <h5 className='text-danger pb-2'>What we serve</h5>
                        <h2 className='fw-bold'>just sit back at home </h2>
                        <h2 className='fw-bold'>we will <span className='text-danger'>take care</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, alias.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, alias.</p>
                    </Col>
                </Row>
                <Row>
                    {
                        servInfo.map((item, index) => (
                            <Col lg="4" key={index} >
                                <div className=' d-flex align-items-center gap-2 mt-5 flex-column text-center'>
                                    <img src={item.img} style={{"width":"50px"}} alt="" />
                                    <h5 className='fw-bold'>{item.head}</h5>
                                    <p style={{"width":"300px"}}>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
        </Container>    
    </Fragment>
)
}

export default Category