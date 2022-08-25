import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

export default function Products() {

    const [data, setdata] = useState([]);

    const getAllProducts = async () => {
        const result = await fetch("/getAllData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const dt = await result.json();
        setdata(dt);
    }

    useEffect(() => {
        return()=>{
            getAllProducts();
        }
    }, []);

    return (
        <>
            <div className='row mt-5 px-5'>
                {data.map((element, i) => {
                    return <ProductList key={i} pname={element.Product_Name} pid={element._id} Image={element.Images.AmazonP} Price={[element.Prices.AmazonP,element.Prices.FlipkartP]} Rating={[element.Ratings.AmazonP,element.Ratings.FlipkartP]} Links={[element.Links.Amazon,element.Links.Flipkart]}/>
                })}
            </div>
        </>
    )
}
