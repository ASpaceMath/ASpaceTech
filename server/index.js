const express = require("express"),
  PORT = 5000,
  app = express();

app.get("/api/v1", (req, res) => {
  res.status(200).json({ ok: Date.now().toString() });
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
