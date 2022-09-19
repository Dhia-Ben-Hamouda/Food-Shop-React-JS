import React from "react";
import Api from "../api/baseURL.js";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

export default function(){
  const [ name , setName ] = useState("");
  const [ price , setPrice ] = useState("");
  const [ picture , setPicture ] = useState("");
  const [ type , setType ] = useState("");

  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch(`${Api}/items/insertItem`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({
        name,
        price,
        picture,
        type
      })
    });
    const data = await response.json();

    console.log(data);
  }

  return(
    <>
      <form onSubmit={submitHandler}  style={{display:"flex" , flexDirection:"column" , padding:"1rem" , gap:".5rem"}}>
        <TextField
          label="name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        <TextField
          label="price"
          value={price}
          onChange={(e)=>{setPrice(e.target.value)}}
        />
        <TextField
          label="picture"
          value={picture}
          onChange={(e)=>{setPicture(e.target.value)}}
        />
        <TextField
          label="type"
          value={type}
          onChange={(e)=>{setType(e.target.value)}}
        />
        <Button type="submit" variant="contained">Insert item</Button>
      </form>
    </>
  )
}