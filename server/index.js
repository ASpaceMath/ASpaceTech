const express = require("express"),
  PORT = 80,
  app = express();

app.get("/", (req, res) => {
  res.status(200).json({ ok: Date.now().toString() });
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
