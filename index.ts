import express from "express";
import path from "path";
import { existsSync, statSync } from "fs";

const app = express();
const PORT = 3000;
const PAGES_DIR = path.resolve("./pages");

app.get("/{*splat}", (req, res) => {
  let urlPath = decodeURIComponent(req.path);

  const filePath = path.normalize(path.join(PAGES_DIR, urlPath));
  if (!filePath.startsWith(PAGES_DIR)) {
    res.status(404).sendFile(path.join(PAGES_DIR, "404.html"));
    return;
  }

  let target = filePath;
  if (existsSync(target) && statSync(target).isDirectory()) {
    target = path.join(target, "index.html");
  } else if (!existsSync(target) && !path.extname(target)) {
    target = target + ".html";
  }

  if (existsSync(target) && statSync(target).isFile()) {
    res.sendFile(target);
  } else {
    res.status(404).sendFile(path.join(PAGES_DIR, "404.html"));
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
