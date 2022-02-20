export default {
    type: "postgres",
    host: process.env.DB_HOST || 'localhost',
    port: 8888,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'pg123',
    database: process.env.DB_DATABASE || 'api_test',
    entities: ["dist/**/*.entity.js"],
    migrations: ["dist/database/migrations/*.js"],
    cli: {
        migrationsDir: "src/database/migrations"
    }
}