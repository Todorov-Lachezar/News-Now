const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

console.log("News Now Auto Deploy!");
console.log("---------------------");
console.log("🔨 Creating bootstrap...");

spawnSync("cdk.cmd", ["bootstrap"], {
  cwd: process.cwd(),
  env: process.env,
  stdio: ["pipe", "inherit", "inherit"],
  encoding: "utf-8",
});

console.log("🔨 Deploying services...");

spawnSync(
  "cdk.cmd",
  [
    "deploy",
    "--require-approval",
    "never",
    "--outputs-file",
    "deploy-out.json",
  ],
  {
    cwd: process.cwd(),
    env: process.env,
    stdio: ["pipe", "inherit", "inherit"],
    encoding: "utf-8",
  }
);

console.log("📖 Reading deployment values...");

const { DeployStack } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "deploy-out.json"))
);

const envs = {
  NEXT_PUBLIC_API_URL: `http://${DeployStack.NEWSNOWAPIURL}`,
};

console.log("🔨 Installing web dependencies...");

spawnSync("npm.cmd", ["install"], {
  cwd: path.join(__dirname, "..", "web"),
  env: { ...process.env, ...envs },
  stdio: ["pipe", "inherit", "inherit"],
  encoding: "utf-8",
});

console.log("🔥 Running web...");

spawnSync("npm.cmd", ["run", "dev"], {
  cwd: path.join(__dirname, "..", "web"),
  env: { ...process.env, ...envs },
  stdio: ["pipe", "inherit", "inherit"],
  encoding: "utf-8",
});
