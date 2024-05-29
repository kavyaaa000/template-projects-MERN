import React from 'react'
import {Card,CardContent,CardActions,Typography,Button, Styled} from '@mui/material';
import { fetchAllBlogs,deleteData } from '../services';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'


function AllBlogs() {
  const [blogs,setBlogs]=useState([]);
  
  useEffect(()=>{
    getAllBlogs();
  },[]);


  const getAllBlogs=async()=>{
     const response=await fetchAllBlogs();
      setBlogs(response.data);
      
  }
  
  const deleteBlog=async(id)=>{
    await deleteData(id);
    getAllBlogs();
  }

  return (
    <div>
      
      {blogs.map( (blog) =>(

          <Card key={blog._id} sx={{maxWidth:545 , backgroundColor:'lightGray', margin: `40px auto 0 auto `}}>
        <CardContent>
          <Typography  variant='h5' >ID: </Typography>
          <p >{blog._id}</p>
          <Typography  variant='h5' >Title: </Typography>
          <p>{blog.title}</p>
          <Typography  variant='h5' >Type: </Typography>
          <p>{blog.type}</p>
          <Typography  variant='h5' >Blog: </Typography>
          <p>{blog.blog}</p>
        </CardContent>
        <CardActions>
          <Button variant='contained' style={{margin:`0px 10px 0px 0px`}} component={Link} to={`/edit/${blog._id}`} >Edit</Button>
          <Button style={{backgroundColor:'red', color:'white'}} onClick={()=>deleteBlog(blog._id)} >Delete</Button>
        </CardActions>
      </Card>

        ))}

      

    </div>
  )
}

export default AllBlogs