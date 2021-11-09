const expressServer = require("express");
const app = expressServer();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  return res
    .json({
      message: "Seja bem-vindo ao um servidor web",
    })
    .status(200);
});
app.listen(port, function () {
  console.log("server running on port: ", port);
});
