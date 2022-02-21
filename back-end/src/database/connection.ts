import { createConnection, Connection} from "typeorm";

const connection : Connection = await createConnection();

export default connection;