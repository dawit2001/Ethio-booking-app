import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const envFilePath = path.resolve(__dirname, ".env");

if (fs.existsSync(envFilePath)) {
  const result = dotenv.config({ path: envFilePath });

  if (result.error) {
    console.error("Error loading .env file:", result.error);
    process.exit(1);
  }

  console.log(".env file loaded successfully");
} else {
  console.warn(
    ".env file is not found; using environment variables from the server"
  );
}
