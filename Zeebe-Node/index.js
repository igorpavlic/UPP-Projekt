// order-management-api/index.js
import express from "express";
import { body, validationResult } from "express-validator";

const app = express();
const PORT = 3000;

app.use(express.json());
let orders = [];

app.post(
  "/orders",
  body("customerName").isString().notEmpty(), // validacija podataka koristeći express-validator middleware funkcije
  body("customerEmail").isEmail(),
  body("items").isArray({ min: 1 }),
  body("items.*.name").isString().notEmpty(),
  body("items.*.quantity").isInt({ min: 1 }),
  body("items.*.price").isFloat({ min: 0 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // u slučaju greške, vraćamo složeni objekt sa svim validacijskim greškama
    }

    const { customerName, customerEmail, items } = req.body;
    // izračun ukupnog iznosa narudžbe
    const totalAmount = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0,
    );
    const orderId = orders.length + 1;
    const newOrder = {
      id: orderId,
      customerName,
      customerEmail,
      items,
      totalAmount,
      status: "Processed",
    };

    orders.push(newOrder);
    console.log("Nova narudžba obrađena:", newOrder);
    res.status(201).json(newOrder); // vraćamo odgovor s podacima o obrađenoj narudžbi
  },
);
app.listen(PORT, () => {
  console.log(`Order Management API sluša na http://localhost:${PORT}`);
});