/* what is useMemo ?
    usememo is a react hook that memmoizes the calculation result and reuses that result between renders until its dependencies change. and react memo  helps react reuse the previously calculated result when its dependency havent chnaged
    main purpose: avoid unnessary expensive calculations and improve performance
     
    the dependency array is important beacouse react compares each dependancy with its previous value using Object.is...

    //syntax
    const memoizedValue=useMemo(()=>{
        return expensivecalculation();
        },[depencies]);
    if the dependancy is empy array=> calculte during initial render and reuse the value,no reactive dependencies
    if dependany is not given=> calculation exececute in every calculation
    id dependancy with value=>calculate while initial render, then recalculate if the dependancy chnages
    advantage of react memo 
    1)avoid unnessesary expensive calculation
    2)improve perfomance when calculation are coastlu
    helps to mainatain stable object ans array referencw
    works well with react.memo
    helps to optimize filtering, sorting,and tranforming large data
    //disadvantage
    1)add complexity code
    2)has its own memmory and comparison overhead
    it doesnot prevent the component to rerender
    it is  not usfull to evry calculations.
    */
   import { useState,useMemo } from "react";
   import React from "react";

   function UseMemoPractical(){
    const[count,setCount]=useState(0)

    const result=useMemo(()=>{
        console.log("calculating the result....")
        let total=0
        for(let i=0;i<10000000;i++){
            total=total+i
        }
        return total
   },[])
   

    return(
        <div>
            <h1>usememo practical 1</h1>
            <h3>the count is:{count}</h3>
            <h4>the total is :{result}</h4>
            <button onClick={()=>setCount(count+1)}>click to increse</button>
        </div>
    )

   }
//  const products = [
//     { id: 1, name: "Mobile", price: 2000 },
//     { id: 2, name: "Laptop", price: 1000 },
//     { id: 3, name: "Headphone", price: 3000 },
//     { id: 4, name: "Keyboard", price: 150 },
//     { id: 5, name: "Monitor", price: 600 },
//   ];
function UseMemoPractical2(){
 const [count,setCount]=useState(0)

 const[maxPrice,setMaxPrice]=useState(500)
  

  const filteredProduct=useMemo(()=>{
    console.log("filtering products")
    return products.filter((product)=>{
         
        return product.price <maxPrice
       
    })
  },[maxPrice])
 

  return(
    <div>
        <h2>filtered produs are mentioned below</h2>
        {filteredProduct.map((p)=>{
            return (
                 <div key={p.id}>

            <h3 key={p.id}>{p.name}-${p.price}</h3>
            </div>
            )
           
            

        })}

        <h2>max price is {maxPrice}</h2>
        <button onClick={()=>setCount(count+1)}>click for increment count</button>
        <button onClick={()=>setMaxPrice(400)}>max price 400</button>
    </div>
    )
    }

    const products = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: 65000 },
  { id: 2, name: "Samsung Galaxy S24", category: "Mobile", price: 55000 },
  { id: 3, name: "MacBook Air", category: "Laptop", price: 95000 },
  { id: 4, name: "Dell Inspiron", category: "Laptop", price: 48000 },
  { id: 5, name: "Sony Headphones", category: "Accessories", price: 8000 },
  { id: 6, name: "Mechanical Keyboard", category: "Accessories", price: 3500 },
  { id: 7, name: "iPad Air", category: "Tablet", price: 45000 },
  { id: 8, name: "Samsung Tab S9", category: "Tablet", price: 52000 },
  { id: 9, name: "OnePlus 12", category: "Mobile", price: 42000 },
  { id: 10, name: "HP Pavilion", category: "Laptop", price: 62000 },
];

    function UseMemoPractical3(){
        const[searchTerm,setSearchTerm]=useState("")
        const [maxPrice,setMaxPrice]=useState(45000)

        const filteredProduct=useMemo(()=>{
            return(
                products.filter((p)=>{
                    return(
                        p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                        p.price <=maxPrice
                    )
                })
            )
        },[searchTerm,maxPrice])
        console.log(filteredProduct)

        return(
            <div>
                <h1>product list based on price</h1>
                {filteredProduct.map((p)=>{
                    return <p>{p.name}</p>

                })}
               
                <button onClick={()=>setMaxPrice(90000)}>max price 90k</button>
                <input
                type="text"
                value={searchTerm}
                placeholder="type to serch"
                onChange={(e)=>setSearchTerm(e.target.value)}/>
                <br></br>
            </div>
        )


    }
//  practical 4 usememo with React.memo to avoid rendering of child using React.memo and memoizing a object created

    const Child=({user})=>{
        console.log("child component rendered")
        return (
            <div>
                <h1>child componet</h1>
                <h2>name is {user.name}</h2>
                <h2>age is {user.age}</h2>
            </div>
        )
    }
    const MemoizedChild=React.memo(Child)

    function UseMemoPractical4(){
        const [count,setCount]=useState(0)
        let user=useMemo(()=>{
            return({
                
                name:"dharmesh",
                age:23
            }
                
            )
        },[])

        return(
            <div>
                <h1>parent component</h1>
                <h2>count is {count}</h2>
               <button onClick={()=>setCount(count+1)}>click to increse the count</button>
               <MemoizedChild user={user}/>
            </div>
            
        )

    }




  export { UseMemoPractical, UseMemoPractical2,UseMemoPractical3,UseMemoPractical4 };