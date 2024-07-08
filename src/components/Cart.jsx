import React from 'react'
import {AiFillDelete} from "react-icons/ai";
import {useSelector,useDispatch} from "react-redux"




const Cart = () => {


  const dispatch=useDispatch()
  const {cartItems,subTotal,tax,shipping,total}=useSelector(state=>state.cart);

  const increment=(id)=>{

    dispatch({
      type:"addToCart",
      payload:{id},

    });
  }
  dispatch({
    type:"calculateprice"

  });
  const decrement=(id)=>{
    dispatch({
      type:"decrement",
      payload:id,

    });
  }
  dispatch({
    type:"calculateprice"

  });
  const deletehandler=(id)=>{
    dispatch({
      type:"deletefromcart",
      payload:id,

    });
  }
  dispatch({
    type:"calculateprice"

  });



  return (
    <div className='cart'>
        <main>
          {
            cartItems.length>0?(cartItems.map(i=>(<CardItem  
              imgsrc={i.imgsrc} 
              name={i.name}
               price={i.price}
                qty={i.quantity}
                 id={i.id}
                  key={i.id}
                  increment={increment}
                   decrement={decrement}
                   deletehandler={deletehandler}
                 />))):<h1>No Items Yet</h1>
          }
        </main>
        <aside>
            <h2>SubTotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
    </div>
  )
}

const CardItem=({imgsrc,name,price,qty,id,increment,decrement,deletehandler})=>(
    <div className="Carditem">
      <img src={imgsrc} alt='item'/>
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>


      <div>
        <button onClick={()=>increment(id)}>+</button>
        <p>{qty}</p>
        <button onClick={()=>decrement(id)}>-</button>
      </div>
    <AiFillDelete onClick={()=>deletehandler(id)}/>
    </div>
)

export default Cart;



//!  1. Initial State
//!The initial state defines the structure of your cart state.



//! 2. Reducer Definition
//!The reducer is created using the createReducer function from @reduxjs/toolkit. This reducer handles different actions that modify the cart state.


//! addToCart Case
//!Adds an item to the cart or increases the quantity if the item //!already exists.
//!decrement Case
//!Decreases the quantity of an item if the quantity is greater than 1.
//!deletefromcart Case
//!Removes an item from the cart based on its ID.
//!calculateprice Case
//!Calculates the subtotal, shipping, tax, and total based on the cart //!items.




//*useDispatch and useSelector
//*useDispatch: a hook to access the dispatch function from the Redux //*store.
//*useSelector: a hook to access the state from the Redux store.
//*increment
//*Dispatches addToCart action to add or increment the quantity of an //*item.
//*Dispatches calculateprice action to recalculate the prices.
//*decrement
//*Dispatches decrement action to decrease the quantity of an item.
//*Dispatches calculateprice action to recalculate the prices.
//*deletehandler
//*Dispatches deletefromcart action to remove an item from the cart.
//*Dispatches calculateprice action to recalculate the prices.




//todo 2. Reducer Definition
//The reducer is a pure function that takes the current state and an //action as arguments, and returns a new state. In this code, the //reducer is created using createReducer from @reduxjs/toolkit.




//todo 3. Actions
//Actions are plain JavaScript objects that describe what happened in //your application. They must have a type property that indicates the //type of action being performed.



//todo v4. Dispatching Actions and Selectors
//In your component, you use dispatch to send actions to the Redux store and useSelector to read values from the Redux store.



//todo useDispatch and useSelector
//useDispatch: a hook that returns a reference to the dispatch function //from the Redux store. You use it to dispatch actions.
//useSelector: a hook that allows you to extract data from the Redux //store state. It takes a function as an argument, which is called with //the state as its argument, and returns the desired data.

