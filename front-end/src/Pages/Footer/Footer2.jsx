
import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Link,useTheme } from '@mui/material';
import Support from "../Support";
const Footer2 = () => {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: theme.palette.mode === "dark" ? "#272727" : "#803735", color: '#fff', py: 4 , }}>
            <Container>
                <Grid container spacing={6} justifyContent="flex-start" textAlign="left">
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Exclusive
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Subscribe
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Get 10% off your first order
                        </Typography>
                        <Box display="flex">
                            <TextField 
                                variant="outlined" 
                                placeholder="Enter your email" 
                                size="small"
                                sx={{ bgcolor: '#fff', borderRadius: '4px 0 0 4px' }}
                            />
                            <Button variant="contained" color="primary" sx={{ borderRadius: '0 4px 4px 0' }}>
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            111 Gaza, Khan Yunis,
                            DH 1515, Palestine.
                        </Typography>

                        <Link to ="/">
                        <Typography variant="body2" sx={{ mb: 2 }}>onestore@gmail.com</Typography>     
                        </Link>

                        <Typography variant="body2" sx={{ mb: 2 }}>+970567477450</Typography>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Account
                        </Typography>
                        <Link href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            My Account
                        </Link>
                        <Link to ="Login" href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            Login / Register
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            Cart
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            Wishlist
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            Shop
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Quick Link
                        </Typography>
                        <Link href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            Privacy Policy
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            Terms Of Use
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            FAQ
                        </Link>
                        <Link href="#" color="inherit" underline="none" sx={{ mb: 2, display: 'block' }}>
                            Contact
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer2;
