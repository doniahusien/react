import React, { Fragment} from 'react'
import {  Col, Card, Button } from 'react-bootstrap';
import style from './Foods.module.css'

const Foods = ({ item }) => {
    return (
        <Fragment>
            <Col lg="3" g="4" md="6" sm="12" className="p-2"key={item.id} >
                <Card className='align-items-center text-center p-3 position-relative' >
                    <Card.Img variant="top" src={item.img} style={{ "width": "100px" }} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <div className='d-flex align-items-center justify-content-between pt-5 gap-5'>
                            <p className={` text-danger ${style.price}`}>{item.price}</p>
                            <Button variant="danger px-4">Add to cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Fragment>
    )
}

export default Foods