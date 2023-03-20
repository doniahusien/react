import React from 'react'
import { useState, useEffect } from 'react'
import style from '../compnents/home/FoodsAll/Foods.module.css'
import FoodsData from '../compnents/home/FoodsData/FoodsData'
import netImg from 'E:/food/src/assets/images/network.png'
import user from 'E:/food/src/assets/images/ava-2.jpg'
import BurgerImg from 'E:/food/src/assets/images/hamburger.png'
import PizzaImg from 'E:/food/src/assets/images/pizza.png'
import BreadImg from 'E:/food/src/assets/images/bread.png'
import locImg from 'E:/food/src/assets/images/location.png'
import Footer from '../compnents/Shared/Footer/Footer'
import Nav from '../compnents/Shared/NavBar/Nav'
import Header from '../compnents/home/Header/Header'
import Category from '../compnents/home/Category/Category';
import Foods from '../compnents/home/FoodsAll/Foods'
import { Container, Row, Col } from 'react-bootstrap'
import { BsCheckCircle } from 'react-icons/bs'
const Home = () => {
  const [hotPizza, setPizza] = useState([])
  const [allFoods, setAllFoods] = useState(FoodsData);
  const [category, setCategory] = useState("All");


  useEffect(() => {
    const filtered = FoodsData.filter((item) => item.catagory === "Pizza");
    const slicePizza = filtered.slice(0, 4);
    setPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "All") {
      setAllFoods(FoodsData);
    }
    else {
      const filter = FoodsData.filter((item) => {
        if (item.catagory == category)
          return item;
      })
      setAllFoods(filter)
    }
  }, [category]);
  return (
    <div>
      <Nav />
      <Header />
      <Category />
      
      <section className='popularFoods'>
        <Container>
          <Row>
            <Col lg="13">
              <h2 className='fw-bold text-center py-5 '  >Popular Foods</h2>
            </Col>
            <Col lg='13' className='bg-danger p-3'>
              <div className='d-flex justify-content-center gap-5' >
                <button onClick={() => setCategory("All")} className={` ${category === "All" ? `${style.active}` : ""} `}>
                  All
                </button>
                <button onClick={() => setCategory("Burger")} className={` ${category === "Burger" ? `${style.active}` : ""} `} >
                  <img src={BurgerImg} alt="" className={style.foodImg} /> Burger
                </button>
                <button onClick={() => setCategory("Pizza")} className={` ${category === "Pizza" ? `${style.active}` : ""} `}>
                  <img src={PizzaImg} alt="" className={style.foodImg} /> Pizza
                </button>
                <button onClick={() => setCategory("Bread")} className={` ${category === "Bread" ? `${style.active}` : ""} `}>
                  <img src={BreadImg} alt="" className={style.foodImg} /> Bread
                </button>
              </div>
            </Col>
            {
              allFoods.map((item, index) => (
                <Foods item={item} FoodsData={FoodsData} />
              ))
            }
          </Row>
        </Container>
      </section>

      <section className='whyTasty py-5'>
        <Container>
          <Row className='py-5'>
            <Col lg="5" md="10" sm="12" >
              <img src={locImg} alt="" className='img-fluid ' />
            </Col>
            <Col lg="6" md="12" sm="12">
              <h1 className='fw-bold'>Why <span className='text-danger'>Tasty Treat?</span></h1>
              <p className='lh-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni vitae et reprehenderit impedit, placeat commodi laudantium incidunt voluptas molestias sequi sed iste ratione sapiente?</p>
              <h6 className='fw-bold'><BsCheckCircle className='text-danger' /> Fresh and tasty foods</h6>
              <p className='pb-3'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, labore.</p>
              <h6 className='fw-bold'><BsCheckCircle className='text-danger' /> Quality support</h6>
              <p className='pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolorum.</p>
              <h6 className='fw-bold'><BsCheckCircle className='text-danger' />Order from any location</h6>
              <p className='pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, ratione!</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pizza py-5'>
        <Container>
          <Row>
            <Col lg='12'>
              <h1 className='text-center'>Hot Pizza</h1>
            </Col>
            {
              hotPizza.map((item,index) => (
                <Foods item={item} />
              ))
            }
          </Row>
        </Container>
      </section>

      <section className='testimonials py-5'>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='py-5'>
                <h4 className='text-danger'>Testimonials</h4>
                <h1 className='pb-3 fw-bold'>What our <span className='text-danger'>customer</span></h1>
                <p className='lh-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deleniti nobis laboriosam perspiciatis nulla saepe amet impedit nemo quasi! Officiis saepe ullam cum dignissimos aspernatur inventore, neque vel architecto doloribus!</p>
                <div className='d-flex gap-4 align-items-center py-3'>
                  <img src={user} alt="" style={{"width":"70px", "height":"50px"}}/>
                  <h6>Haneen Adel</h6>
                </div>
              </div>
            </Col>
            <Col lg='6' >
              <div>
                <img src={netImg} className='img-fluid ' alt="" />
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  )
}

export default Home