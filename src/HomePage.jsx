import React, { useEffect, useState } from 'react'
import Headerse from './Headerse'
import Produits from './Produits'




const data = [
  
    {
        id:1,
      img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      title: "Nike Air Monarch IV",
    
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "white",
      category: "sneakers",
    },
    {
      img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      title: "Nike Air Vapormax Plus",
    
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "red",
      category: "sneakers",
    },
  
    {
        id:2,
      img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
      title: "Nike Waffle One Sneaker",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "green",
      category: "sneakers",
    },
    { id:3,
      img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
      title: "Nike Running Shoe",
     
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Adidas",
      color: "black",
      category: "sneakers",
    },
    { id:4,
      img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
      title: "Flat Slip On Pumps",
     
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Vans",
      color: "green",
      category: "flats",
    },
    {
        id:5,
      img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
      title: "Knit Ballet Flat",
      
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    },
  
    {
        id:6,
      img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
      title: "Loafer Flats",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Vans",
      color: "white",
      category: "flats",
    },
  
    {
        id:7,
      img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
      title: "Nike Zoom Freak",
     
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Nike",
      color: "green",
      category: "sneakers",
    },
  
    { id:8,
      img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
      title: "Nike Men's Sneaker",
     
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "200",
      company: "Adidas",
      color: "blue",
      category: "sneakers",
    },
  
    { id:9,
      img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
      title: "PUMA BLACK-OCE",
  
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Puma",
      color: "green",
      category: "sneakers",
    },
    { id:10,
      img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
      title: "Pacer Future Sneaker",
  
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Puma",
      color: "red",
      category: "sneakers",
    },
    {
        id:11,
      img:"https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/34539/1.jpg?0471",
      title: "Unisex-Adult Super",
  
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "150",
      company: "Puma",
      color: "black",
      category: "sneakers",
    },
   ,  {
      id:12,
      img: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/30289/5.jpg?2759",
      title: "Wedding Prom Bridal",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    },
  
   ,  {
      id:13,
      img: "https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/338001/1.jpg?3677",
      title: "Wedding Prom Bridal",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    }
  
   ,  {
      id:14,
      img: "https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/880121/1.jpg?3245",
      title: "Wedding Prom Bridal",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    }
   ,  {
      id:15,
      img: " https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/82129/1.jpg?6273",
      title: "Wedding Prom Bridal",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    }
   ,  {
      id:16,
      img: "https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/90589/1.jpg?8625",
      title: "Wedding Prom Bridal",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    }
   ,  {
      id:17,
      img: "https://sn.jumia.is/unsafe/fit-in/500x450/filters:fill(white)/product/63/17729/1.jpg?3679",
      title: "Wedding Prom Bridal",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    }
   ,  {
      id:18,
      img:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/338001/1.jpg?8099",
      title: "Wedding Prom Bridal",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    }
   ,  {
      id:19,
      img:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/82129/1.jpg?6271",
      title: "Wedding Prom Bridal",
      reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "50",
      company: "Adidas",
      color: "black",
      category: "flats",
    }
  
    
    ]
  

function HomePage() {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        setProduct(data)
    },[])
    return (
        <div >
          
            <Produits product={product}/>

        </div>
    )
}

export default HomePage