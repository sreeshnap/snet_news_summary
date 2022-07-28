const grpc = require("grpc")
const protoLoader = require('@grpc/proto-loader')
const PROTO_PATH = "./summaries.proto"
const neural_summarisation = grpc.load(PROTO_PATH).neural_summarisation
// const neural_summarisation = protoLoader.load(PROTO_PATH).neural_summarisation
const client = new neural_summarisation.neural_summarisation(
  "localhost:50051",
  grpc.credentials.createInsecure()
)

module.exports = client
// console.log(neural_summarisation);
// console.log(neural_summarisation.neural_summarisation.service);

