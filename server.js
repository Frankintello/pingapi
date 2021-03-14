const express = require("express");
var ping = require("jjg-ping");
const app = express();
const port = "3000";

app.get("/", async (req, res) => {
  res.send('PingAPI 2.1')
});

app.get("/api/:domain", async (req, res) => {
  const domain = req.params.domain;
  ping.system.ping(domain, function(latency, status) {
    if (status) {
      const latencyy = latency + "ms";
      const result = {
        latance: latency + "ms",
        disponible: status
      };
      res.send(result);
    } else {
      const resultt = {
        latance: "Indisponible",
        disponible: status
      };
      res.send(resultt);
    }
  });
});

const listener = app.listen(port, () => {
  console.log("PINGAPI en ligne ! port : " + listener.address().port);
});
