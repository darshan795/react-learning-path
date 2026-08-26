import {useState} from "react";
import { RxCross1 } from "react-icons/rx";


function Exercise10(){
    //logical part  of  the scene!!
  
    const price=0;



 
       const [data ,setData]= useState([
  {
    name: "Air Max 270",
    brand: "Nike",
    description: "Lightweight sneakers with a comfortable design for everyday wear.",
    quantity: "12",
    color: "Black",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Classic Leather",
    brand: "Reebok",
    description: "Classic casual sneakers with a clean and timeless leather design.",
    quantity: "8",
    color: "White",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
  },
  {
    name: "Ultraboost 23",
    brand: "Adidas",
    description: "High-performance running shoes with responsive cushioning.",
    quantity: "15",
    color: "Blue",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
  },
  {
    name: "574 Core",
    brand: "New Balance",
    description: "Retro-inspired sneakers designed for everyday comfort and style.",
    quantity: "10",
    color: "Grey",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570"
  },
  {
    name: "Old Skool",
    brand: "Vans",
    description: "Iconic skate shoes featuring the classic Vans side stripe.",
    quantity: "20",
    color: "Black",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
  },
  

  
])
   // const [data,setData]=useState
  const handleClick=(ele)=>{
    console.log(ele)
    setData((data)=>{
        return data.filter((newele)=>{
            return newele.name!=ele.name;
        })

    })
    
  }

    
    return (<>
    <div className="main  w-full  bg-zinc-200 flex justify-center items-center">
        <div className="cart w-220 bg-white ">
            <div className="header flex justify-between px-24 py-10">
                <div className="mini-header">
                    <h1>Your Cart :  Total items:{data.length}</h1>
                </div>
                <div className="total-price">
                    Total Price:{data.reduce((total,number)=>{
                        return total+number.price;

                    },0)}
                </div>
            </div>
            <div className=" cards px-24">
                <div className="line py-[1px] mt-2 mb-2 w-180 bg-zinc-400"></div>
                {/* <div className="card flex items-center   justify-between  py-2 px-2 ">
                    <div className="image">
                        <img  className=" h-40 w-40" src="https://i.pinimg.com/736x/5e/c5/1a/5ec51a44798a49d6b57044a25187c314.jpg"></img>

                    </div>
                    <div className="description">
                        <h1  className="text-[18px]"> Product Name</h1>
                        <p className="text-[15px]">Brand</p>
                        <p className="text-[13px]">short small descriptions for the products</p>
                    </div>
                    <div className="quantity">
                        4
                    </div>
                    <div className="color">
                        black
                    </div>
                    <div className="price flex  flex-col items-center gap-10">
                        $1400
                        <div className="">
                            <RxCross1/>
                        </div>
                    </div>
                </div>
 */}


                { data.map((ele)=>{
                    return  <div className="card flex items-center   justify-between  py-2 px-2 ">
                    <div className="image">
                        <img  className=" h-40 w-40" src={ele.image}></img>

                    </div>
                    <div className="description">
                        <h1  className="text-[18px]">{ele.name}</h1>
                        <p className="text-[15px]">{ele.brand}</p>
                        <p className="text-[13px]">{ele.description}</p>
                    </div>
                    <div className="quantity">
                        {ele.quantity}
                    </div>
                    <div className="color">
                        black
                    </div>
                    <div className="price flex  flex-col items-center gap-10">
                        {ele.price}
                        <div className="">
                            <button className="btn">
                                  <RxCross1  onClick={()=>{handleClick(ele)}}className="bg-blue-400"/>

                            </button>
                          
                        </div>
                    </div>
                </div>





                })}
            </div>

        </div>

    </div>
    </>)
}

export default Exercise10;
