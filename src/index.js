import app from "./app.js";
import { PORT } from "./config.js";

//Server config
app.listen(PORT);
console.log("Server on port", PORT);
