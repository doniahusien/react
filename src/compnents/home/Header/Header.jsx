import React, { Fragment,useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Col, Row } from 'react-bootstrap';
import style from './Header.module.css'
import { AiOutlineCar } from 'react-icons/ai'
import { HiOutlineShieldCheck } from "react-icons/hi";
import heroImg from 'file:///E:/food/src/assets/images/hero.png'

const Header = () => {
    
    
    return (
        <Fragment>

            <Container style={{ "padding-top": "8em" }}>
                <Row className='p-5'>
                    <Col lg="6" md="10" sm="12" >
                        <div>
                            <h4 className="mb-3" >Easy Way to make an order</h4>
                            <h1 className='fw-bold ' ><span className={style.span2}>HUNGRY? </span>Just wait food at <span className={style.span2}>your door</span></h1>
                            <p className='lh-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minima eos in, suscipit placeat modi unde corrupti et impedit illo, vitae corporis neque inventore at! Culpa repellendus rem hic sapiente.</p>
                            <div className='order d-flex flex-wrap gap-4 bd-highlight'  >
                                <Button variant="danger" >Order Now</Button>
                                <Button variant="outline-danger">
                                    <Link className={style.order_link }to="/foods">See all foods</Link>
                                </Button>
                            </div>
                            <div className='d-flex flex-wrap gap-4 mt-5' >
                                <p><AiOutlineCar className={style.icon} /> No Shipping Fees</p>
                                <p><HiOutlineShieldCheck className={style.icon} /> 100% secure checkout</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="1">
                        <img src={heroImg} alt="" style={{width:"300px"}} />
                    </Col>
                </Row>
            </Container>
            
        </Fragment>
    )
}

export default Header