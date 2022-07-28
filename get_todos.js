const client = require("./client")
let params = "asdasd";
client.neural_summarisation(params,(error,summary) => {
  if (!error) {
    console.log("successfully reduce paragraph")
    console.log(summary)
  } else {
    console.error(error)
  }
})
