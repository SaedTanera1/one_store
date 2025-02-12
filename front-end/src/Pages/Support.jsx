import React from 'react';
import { Container, Box, Typography, TextField, Button, Stack } from '@mui/material';

const Contact = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" gutterBottom >
                    Contact Us
                </Typography>
            </Box>
 
            <Stack direction={{ xs: 'column', md: 'row' ,}} textAlign ="left" spacing={4}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6">Call To Us</Typography>
                    <Typography variant="body1">
                        We are available 24/7. 7 days a week.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>Phone: +970567477450</Typography>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6">Write To Us</Typography>
                    <Typography variant="body1">
                        Fill out our form and we will contact you within 24 hours.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>Email: onestore@gmail.com</Typography>
                    <Typography variant="body2">Support: support@exclusive.com</Typography>
                </Box>
            </Stack>

            <Box component="form" sx={{ mt: 4 }}>
                <Stack spacing={2}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField label="Your Name" fullWidth required />
                        <TextField label="Your Email" fullWidth required />
                        <TextField label="Your Phone" fullWidth required />
                    </Stack>
                    <TextField label="Your Message" multiline rows={4} fullWidth required />
                    <Button variant="contained" color="primary" size="large">Send Message</Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default Contact;