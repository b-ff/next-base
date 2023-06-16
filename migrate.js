require("dotenv").config({ path: "./.env.local" });
const drizzle = require("drizzle-orm/postgres-js").drizzle;
const migrate = require("drizzle-orm/postgres-js/migrator").migrate;
const postgres = require("postgres");
const process = require("process");

const url = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

console.log(url);

// for migrations
const migrationClient = postgres(url, { max: 1 });
migrate(drizzle(migrationClient), {
  migrationsFolder: "migrations-folder",
}).then(() => {
  console.log("Migration completed!");
  process.exit(0);
});
