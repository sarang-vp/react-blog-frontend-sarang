// import React, { useEffect, useState } from 'react';
// import ContactForm from './ContactForm';
// import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent } from '@mui/material';
// import { styled } from '@mui/system';


// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
// }));

// const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
// }));

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/customers')
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <StyledAppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             My Blog
//           </Typography>
//         </Toolbar>
//       </StyledAppBar>
//       <Container maxWidth="md">
//         <Grid container spacing={2}>
//           {users.map((post) => (
         
//             <Grid item xs={12} md={4} key={post.id}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6">{post.name}</Typography>
//                   <Typography>{post.companyCode}</Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>
//           ))}
//         </Grid>
//         <h1>Contact Us</h1>
//       <ContactForm />
//       </Container>
      
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { AppBar, Toolbar, Typography, Container } from '@mui/material';
// import { styled } from '@mui/system';
// import UserGrid from './components/UserGrid';
// import ContactForm from './components/contactForm'; // Import the ContactForm component

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
// }));

// function App() {
//   return (
//     <div>
//       <StyledAppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             My Blog
//           </Typography>
//         </Toolbar>
//       </StyledAppBar>
//       <Container maxWidth="md">
//         <h1>User Gallery</h1>
//         <UserGrid /> {/* Render the UserGrid component */}
//         <h1>contact form</h1>
//         <ContactForm /> {/* Render the ContactForm component */}
//       </Container>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import UserGrid from './components/UserGrid';
import ContactForm from './components/contactForm';

function App() {
  const [activeComponent, setActiveComponent] = useState('userGrid'); // Initial active component

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <Container maxWidth="md">
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleComponentChange('userGrid')}
      >
        Show User Grid
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleComponentChange('contactForm')}
      >
        Show Contact Form
      </Button>
      <div style={{ marginTop: '20px' }}>
        {activeComponent === 'userGrid' && <UserGrid />}
        {activeComponent === 'contactForm' && <ContactForm />}
      </div>
    </Container>
  );
}

export default App;

