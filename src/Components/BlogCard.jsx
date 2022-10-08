import React from 'react'

function BlogCard({title,img,desc,author,date}) {
  return (
    <div className='card blog-card'>
     <img src={img} alt="" />
     <div className='m-1 p-1'>
        <span className='color-primary'>{author}</span>
        <span className='color-primary'>{date}</span>

        <h3>{title}</h3>
        <p className='color-primary'> {desc}</p>
        <a href='#' className='link'>Read more</a>
     </div>
    </div>
  )
}

export default BlogCard