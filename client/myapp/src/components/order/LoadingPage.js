import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import './index.css';


const LoadingPage = () => {

    const [slides, setSlides] = useState(3);
    const [screen, setScreen] = useState(window.innerWidth);
    
   const handleList = ()=>{
    const list = document.getElementById("catagories-mobile");
    if(list.style.left === "100%"){
        list.style.left = "50%";
    } else {
        list.style.left = "100%";
    }
   }
    useEffect(() => {
        
        const handleResize = () => setScreen(window.innerWidth);
        if (screen <= "600") {
            setSlides(1);
           } else {
            setSlides(3);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className="slick-arrow"
                style={{ ...style,color:"salmon" ,position: "absolute", left: "96%",zIndex: "2", top:"45%", lineHeight:"0"}}
                onClick={onClick}
            >
                 <div className="slick-arrow bg-white" style={{borderRadius : "50%", }}>
                     <i role = "button" class="fs-3 bi bi-arrow-right-circle"></i>
                </div>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className="slick-arrow"
                style={{ ...style, color:"salmon" ,position: "absolute",left:"1%", top:"45%", zIndex: "2", lineHeight:"0"}}
                onClick={onClick}
        >
            <div className="slick-arrow bg-white" style={{borderRadius : "50%", }}>
                     <i role = "button" class="fs-3 bi bi-arrow-left-circle"></i>
                </div>
        </div>
        );
    }
    return (
        <>
        {/* catagories list for mobilke view */}
        <section id="catagories-mobile" style={{left:"100%"}}>
            <div className="col-lg-3 bg-white p-3 catagories shadow rounded-4 main-lg sticky-top">
                <div className="d-flex border-bottom pb-3">
                    <h2 className="m-0 fw-light" role="button" onClick={()=>{document.getElementById("catagories-mobile").style.left="100%"}} style={{width: "5%"}}><i class="bi bi-x"></i></h2>
                    <h2 className="text-start  d-inline mb-0 ms-1">Catagories</h2></div>
                    <ul className="p-0 mt-4">
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                    </ul>
                </div>
             </section>

             {/* head */}
            <section id="head">
                <div className="container row pe-0" id="content">
                    <div className="heading col-lg-12 mx-auto col-md-10 col-sm-8">
                        <h1 className="mb-5">Get your grocery delivery within 30 minutes</h1>
                    </div>
                    <div id="search" className="btn btn-group border row bg-white align-items-center col-md-12" >
                        <div className="col-1 col-lg-1 col-md-1 col-sm-1">
                            <i className="border-danger bi bi-search p-0"></i>
                        </div>
                        <div className="col-8 col-lg-9 col-md-9 col-sm-9 p-0">
                            <input type="email" className="form-control ps-2" placeholder="Searching for..." />
                        </div>
                        <div className="col-2 danger-btn col-lg-2 col-md-2 col-sm-2 btn btn-danger">
                            Search
                        </div>
                    </div>
                </div>
            </section>
            <section id="cards" className="container-lg " >
                <div className="row justify-content-center">

                    <div className="col-lg-3 col-md-6 col-sm-12 ps-4 pe-4">
                        <div className=" bg-white rounded-3 shadow row p-2 mt-3 mb-3 justify-content-center align-items-center">
                            <i className="bi bi-truck col-3"></i>
                            <div className="details col-9 ps-3">
                                <h5 className="mb-0">Fast delivery</h5>
                                <p className="mb-0">start from 10$</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ps-4 pe-4">
                        <div className=" bg-white rounded-3 shadow row p-2 mt-3 mb-3 justify-content-center align-items-center">
                            <i className="bi bi-coin col-3"></i>
                            <div className="details col-9 ps-3">
                                <h5 className="mb-0">Money gurantee</h5>
                                <p className="mb-0">7 days back</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ps-4 pe-4">
                        <div className="  bg-white rounded-3 shadow row p-2 mt-3 mb-3 justify-content-center align-items-center">
                            <i className="bi bi-alarm col-3"></i>
                            <div className="details col-9 ps-3">
                                <h5 className="mb-0">365 days</h5>
                                <p className="mb-0">for free return</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 ps-4 pe-4">
                        <div className="  bg-white rounded-3 shadow row p-2 mt-3 mb-3 justify-content-center align-items-center">
                            <i className="bi bi-alipay col-3"></i>
                            <div className="details col-9 ps-3">
                                <h5 className="mb-0">Payment</h5>
                                <p className="mb-0">secure system</p>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
            {/* catagories + cards */}
            <div className="row" style={{ margin: "0" }}>
                <div className="col-lg-3 bg-white p-3 catagories shadow rounded-4 main-lg sticky-top" id="catagories">
                    <h2 className="text-center border-bottom pb-3">Catagories</h2>
                    <ul className="p-0 mt-4">
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                        <Link to=""><li className="row fw-bold" style={{ opacity: "70%" }}><i className=" col-1 bi bi-emoji-heart-eyes"></i><p className="col-10 ms-1" >Catagory name</p> </li></Link>
                    </ul>
                </div>
                <section className=" col-lg-8 " id="maincontent" >
                    <div className="row justify-content-center align-items-center ms-2 me-2 mt-5 mb-2 container">
                        <div className="col-9">
                            <h3 className="mb-0">Popular Products</h3>
                            <p style={{ fontSize: "13px" }}>Best collection in 2021 for you!</p>
                        </div>
                        <div className="col-3 p-0">
                            <Link style={{ color: "black" }}>View all</Link>
                        </div>
                    </div>
                    <div className="row m-3  justify-content-center">
                        <Slider {...settings}>
                            <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card carder" >
                                <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                    <img src="./img/lime.webp" className="img-fluid" alt="" />
                                    <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                        <i className=" hoverBtn btn border bi bi-eye"></i>
                                        <i className=" hoverBtn btn border bi bi-heart"></i>
                                        <i className="hoverBtn btn border  bi bi-cart"></i>
                                    </div>
                                </div>
                                <div id="details" className=" shadow p-3 card-body">
                                    <h4>Title</h4>
                                    <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                    <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card carder">
                                <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                    <img src="./img/lime.webp" className="img-fluid" alt="" />
                                    <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                        <i className=" hoverBtn btn border bi bi-eye"></i>
                                        <i className=" hoverBtn btn border bi bi-heart"></i>
                                        <i className="hoverBtn btn border  bi bi-cart"></i>
                                    </div>
                                </div>
                                <div id="details" className=" shadow p-3 card-body">
                                    <h4>Title</h4>
                                    <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                    <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card carder">
                                <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                    <img src="./img/lime.webp" className="img-fluid" alt="" />
                                    <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                        <i className=" hoverBtn btn border bi bi-eye"></i>
                                        <i className=" hoverBtn btn border bi bi-heart"></i>
                                        <i className="hoverBtn btn border  bi bi-cart"></i>
                                    </div>
                                </div>
                                <div id="details" className=" shadow p-3 card-body">
                                    <h4>Title</h4>
                                    <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                    <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                                </div>
                            </div> 
                            <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card carder">
                                <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                    <img src="./img/lime.webp" className="img-fluid" alt="" />
                                    <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                        <i className=" hoverBtn btn border bi bi-eye"></i>
                                        <i className=" hoverBtn btn border bi bi-heart"></i>
                                        <i className="hoverBtn btn border  bi bi-cart"></i>
                                    </div>
                                </div>
                                <div id="details" className=" shadow p-3 card-body">
                                    <h4>Title</h4>
                                    <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                    <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card carder">
                                <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                    <img src="./img/lime.webp" className="img-fluid" alt="" />
                                    <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                        <i className=" hoverBtn btn border bi bi-eye"></i>
                                        <i className=" hoverBtn btn border bi bi-heart"></i>
                                        <i className="hoverBtn btn border  bi bi-cart"></i>
                                    </div>
                                </div>
                                <div id="details" className=" shadow p-3 card-body">
                                    <h4>Title</h4>
                                    <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                    <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card carder">
                                <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                    <img src="./img/lime.webp" className="img-fluid" alt="" />
                                    <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                        <i className=" hoverBtn btn border bi bi-eye"></i>
                                        <i className=" hoverBtn btn border bi bi-heart"></i>
                                        <i className="hoverBtn btn border  bi bi-cart"></i>
                                    </div>
                                </div>
                                <div id="details" className=" shadow p-3 card-body">
                                    <h4>Title</h4>
                                    <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                    <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card carder">
                                <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                    <img src="./img/lime.webp" className="img-fluid" alt="" />
                                    <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                        <i className=" hoverBtn btn border bi bi-eye"></i>
                                        <i className=" hoverBtn btn border bi bi-heart"></i>
                                        <i className="hoverBtn btn border  bi bi-cart"></i>
                                    </div>
                                </div>
                                <div id="details" className=" shadow p-3 card-body">
                                    <h4>Title</h4>
                                    <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                    <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                                </div>
                            </div>


                        </Slider>
                       
                    </div>
                    {/* Trending products */}

                    {/* All Products */}
                    <div className="row container align-items-center mt-5 mb-2 ms-2 me-2">
                        <div className="col-9 ">
                            <h3 className="mb-0">All Products</h3>
                            <p >Best collection in 2021 for you!</p>
                        </div>
                        <div className="col-3 p-0">
                            <Link style={{ color: "black" }}>View all</Link>
                        </div>
                    </div>
                    <div className="row m-3 justify-content-center">
                        <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card " style={{ border: "none", background: "transparent" }}>
                            <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                <img src="./img/lime.webp" className="img-fluid" alt="" />
                                <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                    <i className=" hoverBtn btn border bi bi-eye"></i>
                                    <i className=" hoverBtn btn border bi bi-heart"></i>
                                    <i className="hoverBtn btn border  bi bi-cart"></i>
                                </div>
                            </div>
                            <div id="details" className=" shadow p-3 card-body">
                                <h4>Title</h4>
                                <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card" style={{ border: "none", background: "transparent" }}>
                            <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                <img src="./img/lime.webp" className="img-fluid" alt="" />
                                <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                    <i className=" hoverBtn btn border bi bi-eye"></i>
                                    <i className=" hoverBtn btn border bi bi-heart"></i>
                                    <i className="hoverBtn btn border  bi bi-cart"></i>
                                </div>
                            </div>
                            <div id="details" className="shadow p-3 card-body" >
                                <h4>Title</h4>
                                <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-4 col-sm-10 p-3 card" style={{ border: "none", background: "transparent" }}>
                            <div className="imgontainer card-img-top" style={{ backgroundColor: "#efefef", position: "relative" }}>
                                <img src="./img/lime.webp" className="img-fluid" alt="" />
                                <div id="btnGroup" className="btn-group rounded-2 bg-white">
                                    <i className=" hoverBtn btn border bi bi-eye"></i>
                                    <i className=" hoverBtn btn border bi bi-heart"></i>
                                    <i className="hoverBtn btn border  bi bi-cart"></i>
                                </div>
                            </div>
                            <div id="details" className=" shadow p-3 card-body">
                                <h4>Title</h4>
                                <div className="rating d-flex mb-2"><div className="me-2"><i className="  bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i><i className=" ms-1 bi bi-star"></i> </div><span className="">(2)</span></div>
                                <div className="row price align-items-center"><h5 className="col-4 pe-0 text-danger">$124</h5><h5 style={{ fontSize: "16px" }} className="col-4 ps-0 text-decoration-line-through text-muted">$141</h5><div className="col-4 text-end"><i className="  btn btn-outline-danger bi bi-plus-lg"></i> </div></div>
                            </div>
                        </div>
                    </div>



                    {/* paste on to infinite */}


                    <section id="special" className="m-4 rounded-3">
                        <div className="row align-items-center text-center">

                            <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                                <p>Till 10 Dec, 2022</p>
                                <h1 className="fw-bold">25% Special offer today only for vegetables</h1>
                                <button className="mt-5 btn btn-danger rounded-2">Shop Now</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12"><img src="img/lime.webp" className="img-fluid" alt="" /></div>
                        </div>
                    </section>

                    <section id="footer" className="m-4 pb-5 rounded-3">
                        <div className="row align-items-center">

                            <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                                <h2>Logo</h2>
                                <div className="row">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quo aperiam tempora corrupti sit ut possimus hic sequi perferendis accusamus quas commodi, quibusdam sunt dolores eveniet consequuntur suscipit eligendi blanditiis?</p>
                                    <button className="mt-5  me-5 btn btn-danger rounded-2 d-flex"><div className="col-3"><i className="bi bi-google-play"></i></div><div className="col-10"><p className="m-0">Get it on</p> <h5 className="m-0">Google Play</h5></div></button>
                                    <button className="mt-5 d-inline me-5 btn btn-danger rounded-2 d-flex"><div className="col-3"><i className="bi bi-apple"></i></div><div className="col-10"><p className="m-0">Get it on</p> <h5 className="m-0">Apple store</h5></div></button>
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 links">
                                <ul>
                                    <Link to="#"><li>Help Center</li></Link>
                                    <Link to="#"><li>Track Your Order</li></Link>
                                    <Link to="#"><li>Cooperate & Bulk Purchasing</li></Link>
                                    <Link to="#"><li>Returns & Refunds</li></Link>
                                    <li className="mt-4">
                                        <ul className="p-0">
                                            <i role="button" className=" fs-4 m-2 bi bi-facebook"></i>
                                            <i role="button" className=" fs-4 m-2 bi bi-twitter"></i>
                                            <i role="button" className=" fs-4 m-2 bi bi-youtube"></i>
                                            <i role="button" className=" fs-4 m-2 bi bi-google"></i>
                                            <i role="button" className=" fs-4 m-2 bi bi-instagram"></i>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </section>
            </div>
            <nav className="fixed-bottom row bg-white shadow-lg " id="mobile-footer">
                <div className="col-3 btn "> <i className="fs-4 bi bi-house-door"></i><p className="mb-1">Home</p></div>
                <div className="col-3 btn " onClick={handleList}> <i className="fs-4 bi bi-layout-text-window-reverse"></i><p className="mb-1">Catagory</p></div>
                <div className="col-3 btn "> <i className="fs-4 bi bi-bag"></i><p className="mb-1">Cart</p></div>
                <div className="col-3 btn " > <i className="fs-4 bi bi-person"></i><p className="mb-1">Account</p></div>
            </nav>
            
        </>
    );
}

export default LoadingPage;