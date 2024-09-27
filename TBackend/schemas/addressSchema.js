// schemas/addressSchema.js
const { z } = require("zod");

const addressSchema = z.object({
  A_street: z.string().min(1, "Street is required").max(255, "Street too long"),
  A_city: z.string().min(1, "City is required").max(100, "City too long"),
  A_state: z.string().min(1, "State is required").max(100, "State too long"),
  A_postalCode: z.string().min(1, "Postal code is required").max(20, "Postal code too long"),
  A_country: z.string().min(1, "Country is required").max(100, "Country too long"),
  C_id: z.number().int().positive("Customer ID must be a positive integer"),
});

module.exports = addressSchema;