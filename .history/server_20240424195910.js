

const app = express();
app.use(express.json());
dotenv.config({ path: "config.env" });
dbCollection();