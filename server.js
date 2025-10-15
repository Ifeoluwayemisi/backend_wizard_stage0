import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/me", async (req, res) => {
    try {

        //fetch cat fact
        const { data } = await axios.get("https://catfact.ninja/fact", {timeout: 5000});

        const response ={
            status: "success",
            user: {
                email: process.env.EMAIL,
                name: process.env.FULL_NAME,
                stack: process.env.STACK,
            },
            timestamp: new Date().toISOString(),
            fact: data.fact,
        };

        res.setHeader("Content-Type", "application/json");
        res.status(200).json(response);
    } catch(error) {
        console.error("Cat API failed:", error.message);

        res.status(200).json({
            status: "success",
            user: {
                email: process.env.EMAIL,
                name:process.env.FULL_NAME,
                stack: process.env.STACK,
            },
            timestamp: new Date().toISOString(),
            fact: "Could not fetch cat fact at the moment, please try again later",
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));