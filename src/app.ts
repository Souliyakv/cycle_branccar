import express, { Application , Request, Response, Router} from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { routes } from "./routes/index.router";
import { PORT } from "./config/gbKay";


const app: Application = express();
const router: Router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

new routes(router);
app.use("/project/suliya-auto", router);

app.use("/project/suliya-auto/test", (req: Request, res: Response) =>{
    res.status(200).json({message: 'connected api.'})
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));