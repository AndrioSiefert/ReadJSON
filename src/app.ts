import express from "express";
import router from "./routes/router.js";
import errorHandling from "./middleware/errorHandling.js";

const app = express();
app.use(express.json());
app.use("/", router);
app.use(errorHandling);

const PORT = 3000;

app.listen(PORT, () => {
    console.log("server ON");
});

export default app;
