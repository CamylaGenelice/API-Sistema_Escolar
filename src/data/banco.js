import {Client} from "pg";
import dotenv from "dotenv";

dotenv.config()

const pg = new Client({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,

})
pg.connect()
    .then(() => {
        console.log("✅ Conexão estabelecida com o banco de dados!");
    })
    .catch((err) => {
        console.error("❌ Erro ao conectar ao banco de dados:", err.message);
    });

export default pg