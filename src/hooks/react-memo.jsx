/*what is react.memo?
React.memois not hook, it is a higher order component

 react memo is a hiher order Component(hoc) in react that is used to optimise the performance of  functional component by preventing unnessasary unnecessary renders normlly a child component re renders if parent component renders even if their props havnt Changed.
 so the child will re renders only if the props changed,otherwise react will skip the rerenderd of child component if we use react.memo.

 why do we use React.memo?
 1)avoid unnessasary re-renders of child component
 2)to improve applications performamce when components are expensive to renders
 One important technical correction:

React.memo does not guarantee that a child renders only when props change.

A memoized child can still re-render when:
- Its own state changes.
- A Context value it consumes changes.
- Its props change.
- React performs a render for other reasons.

 syntax=>
    const MemoizedComponet=React.memo(component) | 
 import{memo} from "react"
 const memoizedCoponent=memo(componet) //here memo recived a componet and return a memoized component

 rect.memo with custom comparison.. react.memo supports custom comparison function//do practical
Advantages of React.memo
1. Can prevent unnecessary child component re-renders.
2. Can improve performance when components are expensive to render.
3. Useful when the same props are passed repeatedly.
4. Helps optimize parent-child component relationships.
5. Can work together with useMemo and useCallback.
9. Disadvantages of React.memo
1. It adds a prop-comparison cost.
2. It is not useful for every component.
3. It does not prevent renders caused by the component's own state changes.
4. It does not prevent renders caused by consumed Context changes.
5. New object, array and function references can reduce its effectiveness.
6. Overusing it can make code harder to maintain without meaningful performance benefits.

*/

//practical

import { useState,memo } from "react";

const Child=memo(()=>{
    console.log("child component rendered")

    return(
        <div>
            <h1>child component</h1>
            
        </div>
    )
})
const Child2=memo(({name})=>{

    console.log("child2 component renderd")
    return(
        <div>
            <h1>child2- reactmemo with props</h1>
            <h2>name is {name}</h2>
        </div>
    )

})
const Child3=memo(({user})=>{
    console.log("child3 rendered , we didnt chnaged the props value ,user is same",user)
    return(
        <div>
            <h1>child 3 practice</h1>
            <h1>name is {user.name}</h1>
            <h2>age is {user.age}</h2>
        </div>
    )


})

function ReactMemo(){
    const[count, setCount]=useState(0)
    const [name,setname]=useState("")
    console.log("parent component rendered")

    let user=
    {
        name:"dharmesh",
        age:26
    }

    return(
        <div>
            <h1>react.memo practice</h1>
            <h2>count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>increse count</button>
            <Child/>
            <br/>
            <h1>memo practical 2 with props </h1>
    
            {/* <button onClick={()=>setname("joseph")}>click to chnage name </button> */}
            <input
            type="text"
            placeholder="enter ur name"
            value={name}
            onChange={(e)=>setname(e.target.value)}/>

            <Child2 name={name}/>

            <br/>     <br/>
            <h3>practical 3-object passing as props</h3>
            <p>evry parent render will create new object, so child will rerender beacouseReact.memo compares the object reference </p>
            <Child3 user={user}/>

        </div>
    )
    
}




export default ReactMemo