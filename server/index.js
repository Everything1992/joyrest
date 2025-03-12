import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });
console.log(process.env);
const app = express();

// Enable CORS for requests from the frontend
app.use(cors({ origin: 'http://localhost:3000' }));

// Parse JSON bodies
app.use(express.json());

// Endpoint to provide the publishable key
app.get('/config', (req, res) => {
    console.log('STRIPE_PUBLISHABLE_KEY:', process.env.STRIPE_PUBLISHABLE_KEY);
    res.json({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
});

// Initialize Stripe with your secret key and API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
});

// Your API endpoint for creating checkout sessions
app.post('/create-checkout-session', async (req, res) => {
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    console.log('Request Method:', req.method); // Log the request method

    try {
        const { lineItems } = req.body;

        if (!lineItems || !Array.isArray(lineItems)) {
            const errorMessage = 'Invalid line items';
            console.error(errorMessage);
            return res.status(400).json({ error: errorMessage });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.HOSTING_URL || `http://localhost:${process.env.PORT || 3000}`}/success.html?success=true`,
            cancel_url: `${process.env.HOSTING_URL || `http://localhost:${process.env.PORT || 3000}`}/cancel.html?canceled=true`,
        });

        console.log('Stripe Response:', session);
        res.json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        console.log('Stripe Error Response:', error.raw); // Log the raw Stripe error
        res.status(500).json({
            error: 'Failed to create checkout session',
            message: error.message,
            stripeError: error.raw ? error.raw.message : null, // Include Stripe's error message, if available
        });
    }
});

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Handle all other routes and serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));