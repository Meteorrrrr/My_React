// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { useState, useMemo, useLayoutEffect, useEffect, useRef, memo, useCallback, useReducer } from "react";

import { createContext } from "react";

/// 
///useEffect//////////////////////////////////////////////////////////////////////////////////
///
//const navbar = ['posts', 'comments', 'albums'];

// function App1() {

//   const [content, setContent] = useState([]);
//   const [navitem, setNavbar] = useState('posts')

//   useEffect(() => {

//     fetch(`https://jsonplaceholder.typicode.com/${navitem}`)
//       .then(Response => Response.json())
//       .then(data => { setContent(data) })

//   }, [navitem])


//   useEffect(() => {

//     function handle()
//     {
//       console.log('tran thach');
//     }
//     var e_ = document.querySelector('#div-id');
//     e_.addEventListener('click',handle)

//     return () => {
//       e_.removeEventListener('click',handle);
//     };
//   }, [])
//   return (
//     <div style={{ padding: 40 }}>
//       {navbar.map((e, index) => {
//         return (<button
//           key={index}
//           style={{ background: (navitem === e ? 'blue' : 'none') }}
//           onClick={() => { setNavbar(e) }}

//         >{e}</button>)
//       })}

//       <ul>
//         {content.map((e, index) => {

//           return (<li key={index}>{e.title || e.name}</li>)
//         })}
//       </ul>
//     </div>
//   )
// }


// function App1() {

//   const [avatar, setAvatar] = useState();

//   useEffect(()=>{


//     return ()=>{
//       avatar&&URL.revokeObjectURL(avatar.preview);
//     }

//   },[avatar])

//   function handlePreview(e) {
//     var file = e.target.files[0];
//     file.preview = URL.createObjectURL(file);
//     setAvatar(file);

//   }

//   return (
//     <div>
//       <div>
//       <input
//         type="file"
//         onChange={(e) => { handlePreview(e) }}
//       />
//       </div>
//       <img
//         src={avatar&&avatar.preview}
//       />
//     </div>

//   )

// }
// const changles = ['F8', 'DotnetMater', 'Zeros'];

// function App1() {
//   const [commentsF8, setCommentF8] = useState([]);
//   const [commentsDotnetMate, setCommentDotnetMate] = useState([]);
//   const [commentsZeros, setCommentZeros] = useState([]);
//   const [newComment, setNew] = useState('');
//   const [changle, setChangle] = useState('dasdas')
//   //const [Comment, setCommentSend] = useState('');


//   function hanldeListenComment(e) {
//    var fun;
//     switch (changle) {
//       case 'F8':
//         fun = setCommentF8
//         break;
//       case 'Zeros':
//         fun= setCommentZeros
//         break;
//       case 'DotnetMater':
//         fun= setCommentDotnetMate
//         break;
//       default:
//     }

//     fun&&fun(previous => [...previous, e.detail]);
//   }

//   useEffect(() => {
//     window.addEventListener(`Comment${changle}`, hanldeListenComment)
//     return () => {
//       window.removeEventListener(`Comment${changle}`, hanldeListenComment);
//     }
//   }, [changle])

//   function handle() {

//     //setCommentSend(newComment);
//     window.dispatchEvent(new CustomEvent(`Comment${changle}`, {
//       detail: 'Kenh' + changle + newComment
//     }));

//   }

//   var arr;
//   switch (changle) {
//     case 'F8':
//       arr = commentsF8
//       break;
//     case 'Zeros':
//       arr = commentsZeros
//       break;
//     case 'DotnetMater':
//       arr = commentsDotnetMate
//       break;
//     default:
//   }
//   return (

//     <div>
//       {
//         changles.map((e, index) => {
//           return (
//             <button
//               key={index}
//               onClick={() => { setChangle(e) }}

//               style={{background:(e===changle) ?'red':'none'}}

//             >{e}</button>)
//         })

//       }
//       <br />
//       <input
//         onChange={(e) => {
//           setNew(e.target.value)
//         }
//         }
//       />
//       <button onClick={handle}>Send Comment</button>

//       <ul>
//         {
//           arr&&arr.map((e, index) => {
//             return (<li key={index}>{e}</li>)
//           })

//         }
//       </ul>
//     </div>

//   )
// }


////useRef()/////////////////////////////////////////////////////////////////////////////////////////////////
// function App1() {
//   const [count, setCount] = useState(0);

//   var ref=useRef(count);
//   ref.current=count;

//   useEffect(() => {

//   }, [])
//   console.log(count)
//   return (
//     <div>

//       <h1>{count}</h1>
//     </div>
//   )
// }



///////UseMemo()///////////////////////////////////////////////////////////////////////////////////////

// function App() {

//   const [name, setName] = useState('');
//   const [price, setPrice] = useState(0);
//   const [product, setProduct] = useState([]);

//   const nameRef=useRef();
//   console.log(nameRef)
//   function handle() {
//     setProduct([...product, { name: name, price: price }]);

//   }
//   function handleSum() {

//     return product.reduce((pre, current) => {

//       return pre + +current.price;
//     }, 0)

//   }
// ;

//   var total=useMemo(handleSum

//   ,[product])

//   return (

//     <div style={{ padding: 40 }}>
//       <input


//         onChange={(e) => { setName(e.target.value) }}
//       />
//       <br />
//       <input
//         onChange={(e) => { setPrice(e.target.value) }}

//       />
//       <br />
//       <button
//         onClick={() => { handle() }}

//       >Add</button>
//       <div>Total:{
//        total

//       }</div>
//       <ul>
//         {
//           product && product.map((e, index) => {
//             return (
//               <div>
//                 <li key={index}>{e.name}: {e.price}</li>
//                 <div>-----------------------------------</div>
//               </div>
//             )
//           })}
//       </ul>

//     </div>

//   )

// }


//useReducer()////////////////////////////////////////////////////////////////////////////
// function App() {

//   const initValue = 0;
//   function reducer(state, action) {

//     switch (action) {

//       case 'UP':
//         return state + 1;
//       case 'DOWN':
//         return state - 1;
//       default:
//         throw new Error('Invalid action');
//     }

//   }

//   var [count, dispatch] = useReducer(reducer, initValue);


//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => { dispatch('UP') }}>UP</button>

//       <button onClick={() => { dispatch('DOWN') }}>DOWN</button>
//     </div>

//   )

// }

// function App() {


//   console.log("tran thach")
//   const ref = useRef();

//   const initValue = {
//     job: '',
//     jobs: []
//   };
//   function reducer(state, action) {

//     switch (action.type) {

//       case 'Set':
//         return {
//           ...state,
//           job: action.payload
//         }

//       case 'Add':
//         return {
//           ...state,
//           jobs: [...state.jobs, action.payload]
//         };
//       case 'Delete':
//         return {
//           ...state,
//           jobs: (state.jobs.filter((e, index) => {
//             return index !== action.payload
//           }))
//         }

//       default:
//         throw new Error();

//     }

//   }
//   const [state, dispatch] = useReducer(reducer, initValue);

//   return (
//     <div>
//       <h1>To do</h1>
//       <input
//         ref={ref}
//         onChange={(e) => {
//           dispatch({
//             type: 'Set',
//             payload: e.target.value
//           })
//         }}
//       />
//       <button
//         onClick={() => {


//           dispatch({
//             type: 'Add',
//             payload: state.job
//           })
//           dispatch({
//             type: 'Set',
//             payload: ''
//           })
//           ref.current.focus();
//         }}
//       >Add</button>
//       <ul>
//         {
//           (state.jobs).map((e, index) => {
//             return (<li key={index}>
//               {e}
//               <button
//                 onClick={() => {
//                   dispatch({
//                     type: 'Delete',
//                     payload: index
//                   })
//                 }}
//               >X</button>
//             </li>)
//           })

//         }
//       </ul>
//     </div>
//   )
// }

////useContext////////////////////////////////////////////////////////////////////////
// export const context=createContext();


// function App() {
//   const [bg, setBg] = useState('light');
//   return (
//     <context.Provider value={bg}>

//       <Content />
//     </context.Provider>

//   )
// }
import { Routes,Route,Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>

  )
}
export default App;

