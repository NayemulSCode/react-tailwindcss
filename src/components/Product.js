import React from 'react'
import Shows1 from '../images/pic1.jpg';
import Shoes2 from '../images/pic2.jpg'
const Product = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img src={Shows1} alt="show" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">2020 Fashion New Designs Excellent European Style Fly Knitted Mesh Sports Shoes For Men</h2>
                    <p className="mb-2">$10.50</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
                <img src={Shoes2} alt="show" className="h-full rounded mb-20 shadow" />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">New design pattern shoes fashion sport shoes</h2>
                    <p className="mb-2">$10.50</p>
                </div>
            </div>
        </>
    )
}

export default Product
