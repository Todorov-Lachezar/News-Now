const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

console.log("News Now Auto Deploy!");
console.log("---------------------");
console.log("🔨 Creating bootstrap...");

spawnSync("cdk", ["bootstrap"], {
  cwd: process.cwd(),
  env: process.env,
  stdio: ["pipe", "inherit", "inherit"],
  encoding: "utf-8",
});

console.log("🔨 Deploying services...");

spawnSync(
  "cdk",
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

console.log("🔨 Building web...");

spawnSync("npm", ["run", "build"], {
  cwd: path.join(__dirname, "..", "web"),
  env: { ...process.env, ...envs },
  stdio: ["pipe", "inherit", "inherit"],
  encoding: "utf-8",
});

console.log("⬆️ Uploading website...");

spawnSync(
  "aws",
  [
    "s3",
    "sync",
    path.join(__dirname, "..", "web", "out"),
    `s3://${DeployStack.NEWSNOWWEBBUCKETNAME}`,
  ],
  {
    cwd: path.join(__dirname, "..", "web"),
    env: process.env,
    stdio: ["pipe", "inherit", "inherit"],
    encoding: "utf-8",
  }
);

console.log(`✅ Done.`);
console.log(
  `- You can view the website at http://${DeployStack.NEWSNOWWEBBUCKETNAME}.s3.amazonaws.com/index.html`
);
