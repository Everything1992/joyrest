import express from "express"
import Stripe from "stripe"

// Initialize Express app
const app = express()
app.use(express.json())

// Initialize Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

// Create checkout session endpoint
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    console.log("Creating checkout session...")
    console.log("Request body:", req.body)

    const { lineItems } = req.body

    if (!lineItems) {
      console.log("Missing lineItems parameter")
      return res.status(400).json({ error: "Missing required parameter: lineItems" })
    }

    // Get the base URL for success/cancel URLs
    let baseUrl = process.env.VERCEL_URL || req.headers.origin || "http://localhost:3000"

    // Ensure baseUrl has https:// prefix
    if (!baseUrl.startsWith("http")) {
      baseUrl = `https://${baseUrl}`
    }

    console.log("Using base URL:", baseUrl)

    // Process line items to ensure image URLs are absolute
    const processedLineItems = lineItems.map((item) => {
      const processedItem = { ...item }

      // If there are images, make sure they're absolute URLs
      if (item.price_data && item.price_data.product_data && item.price_data.product_data.images) {
        processedItem.price_data.product_data.images = item.price_data.product_data.images.map((imgUrl) => {
          if (imgUrl.startsWith("/")) {
            return `${baseUrl}${imgUrl}`
          }
          return imgUrl
        })
      }

      return processedItem
    })

    console.log("Processed line items:", processedLineItems)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: processedLineItems,
      mode: "payment",
      success_url: `${baseUrl}/success.html`,
      cancel_url: `${baseUrl}/cancel.html`,
    })

    console.log("Session created:", session.id)
    res.status(200).json({ sessionId: session.id })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    res.status(500).json({ error: "Failed to create checkout session", details: error.message })
  }
})

// Config endpoint to expose publishable key
app.get("/api/config", (req, res) => {
  res.status(200).json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  })
})

// Handle all other API routes
app.all("/api/*", (req, res) => {
  res.status(404).json({ error: "API route not found" })
})

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

// Export the Express API
export default app

