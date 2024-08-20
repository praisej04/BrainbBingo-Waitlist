'use client'
import { useState } from "react";
import { TextField, Button, Typography, Box, Stack } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

const Home = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res =  await fetch('../api/route', { //recently changed this from api/route
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email}),
    });

    if (res.ok) {
      setMessage('You have successfully joined the waitlist!');
      setEmail('');
    } else {
      setMessage('There was an error please try again.');
    }
  };

  return (
    <Box style= {{ textAlign: 'center' }}> 
 <Typography variant="h2" style={{marginTop: '30px'}}>
 Introducing BrainBingo!
 </Typography>
 <Typography variant="h4" style={{marginTop: '30px'}}>
  Gain access to an AI powered studying tool by joining our waitlist!
 </Typography>
    <Box sx={style}>
    <Typography variant="h4" style= {{ color: '#d24e01' }} gutterBottom>
      Join the Waitlist
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: '30px' }}>
        <TextField style={{ backgroundColor: '000000'}}
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        InputProps={{
          style: { color: '000000' },
        }}
        InputLabelProps={{
          style: { color: '000000' },
        }}
        />
        </Box>
        <Button variant="contained" style={{backgroundColor: '#d24e01',  color:'#f0f0f0' }}type="submit" fullWidth>
          JOIN WAITLIST
        </Button>
      </form>
      {message && (
        <Typography variant="body2" color="textSecondary" style={{marginTop: '20px'}}>
          {message}
        </Typography>
      )}
    </Box>
    </Box>
  );
}
export default Home;