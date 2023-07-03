import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Button,Card,CardContent,Grid,TextField} from '@mui/material';
import { useState } from 'react';
export default function Index() {
  const [inputArr,setInputArr]=useState([]);
    const [inputs,setInputs]=useState({
      fname:"",
      lname:"",
      email:"",
      phoneNo:"",
      address:""
    })
    const handleChange=(e)=>{
      setInputs(prevState=>({
        ...prevState,
        [e.target.name]:[e.target.value],
      }));
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(inputs);
      setInputArr((currentInputArr)=>{
          return [
            ...currentInputArr,{...inputs,id: crypto.randomUUID()}
          ]
      })
      
    }

  return (
    
      <Grid container style={{backgroundColor:"slateblue", color:"white"}}   spacing={2}>
        <Grid item style={{margin:"150px auto"}} xs={6} sm={6}>
         
      <Card style={{maxWidth:450, margin:"0 auto", padding:"10px 5px"}}>
        <CardContent>
        <Typography gutterBottom variant="h3" align='center'>React-Form</Typography>
          <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField label="First Name" name='fname' onChange={handleChange} value={inputs.fname}  color="primary"  variant="filled" placeholder="Enter first name" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField  label="Last Name" name='lname' onChange={handleChange} value={inputs.lname}  variant="filled" placeholder="Enter Last name" fullWidth required></TextField>
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField type='email' name='email'  onChange={handleChange} value={inputs.email} label="E-mail" variant="filled" placeholder="Enter your E-mail" fullWidth></TextField>
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField type="number" name='phoneNo' onChange={handleChange} value={inputs.phoneNo} label="Phone Number" variant="filled" placeholder="Enter your Phone Number" fullWidth></TextField>
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField multiline minRows={2} name='address' onChange={handleChange}  value={inputs.address} label="Address" variant="filled" placeholder="Enter your Address" fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button   type='submit' variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
            
          </Grid>
          </form>
        </CardContent>
      </Card>
      
      </Grid>
      <Grid item  xs={6} sm={6}>
        
      <h1 className="header">Details</h1>
    <ul className="list">
    {inputArr.map((inputs)=>{
      return (
        <li style={{listStyleType:"lower-alpha"}} key={inputs.id}>
          <p><i>Name:</i> <b>{inputs.fname} {inputs.lname}</b></p>
          <p>E-mail: {inputs.email}</p>
          <p><i>Phone Number:</i> {inputs.phoneNo}</p>
          <p>Address: {inputs.address}</p>
        </li>
      )
    })}
    </ul>
        
           
          
      </Grid>
      
      </Grid>
    
  );
}
