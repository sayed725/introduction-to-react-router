import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import Postdetails from './components/PostDetails/Postdetails';
import Comments from './components/Comments/Comments';
import ShowComment from './ShowComment/ShowComment';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
      element: <About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path: "/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:"/user/:userId",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path: "/posts",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path:"/post/:postId",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<Postdetails></Postdetails>
      },
      {
        path:"/comments",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/comments'),
        element:<Comments></Comments>
      },
      {
        path:"comments/:commentId",
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`),
        element:<ShowComment></ShowComment>
      }

    ]

  },
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
