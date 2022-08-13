import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({blogs ,title }) {
  
  // const blogs = props.blogs;
  // const title = props.title
  // console.log(props,blogs)
  return (
    <div className='BlogList'>
      <h1>{title}</h1>
      {blogs.map((blog)=>(
  <div className="blog_preview" key={blog.id}>
    <Link to={`blogs/${blog.id}`}>
    <h1>{blog.title}</h1>
<h3>{blog.body}</h3>
<p>Written by {blog.author}</p>
    </Link>

  </div>
))}
    </div>
  )
}

export default BlogList
