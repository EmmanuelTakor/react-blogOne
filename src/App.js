import {useState, useEffect} from "react"
import './App.css';
import BlogList from "./BlogList";
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from "./Create";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import BlogDetails from "./BlogDetails";

function App() {
//   const handleDelete = (id)=>{
// const newBlog = blogs.filter((blog)=> blog.id !== id )
// setBlogs(newBlog)
//   }
  let value = 40;
  const [isPending, setIsPending]=useState(true)
  const [blogs,setBlogs] = useState(null)

  useEffect(()=>{
    fetch("http://localhost:8000/blogs")
    .then(res=>{
     return res.json();
    }).then(data=>{
console.log(data)
setBlogs(data)
setIsPending(false)
    }).catch(err=> console.log(err.message))
  },[])
  return (
    <Router>
      <div className="App">
        <Navbar/>
      <Switch>
        <Route exact path="/">
        {isPending && <div>Loading...</div> }
     {blogs &&  <BlogList blogs = {blogs} title ="All Blogs" />}
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
        <Route exact path="/blogs/:id">
<BlogDetails/>
        </Route>
      </Switch>
      <br />
     
      <div>
      {/* <BlogList blogs = {blogs.filter((blog)=>
        blog.author === "Zoalini"
  )} title ="Zoalini's Blogs"/> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
