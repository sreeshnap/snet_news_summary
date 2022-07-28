const grpc = require("grpc")
const { request } = require("http")
const uuid = require("uuid")
const protoLoader = require('@grpc/proto-loader')
const summariesproto = grpc.load("summaries.proto")
// const summariesproto = protoLoader.load("summaries.proto")
const server = new grpc.Server()
server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
console.log("server is running at http://127.0.0.1:50051")

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
//   console.log(removeDuplicateCharacters('baraban'));
// let summary = removeDuplicateCharacters('qazwsded');

// console.log(summariesproto.neural_summarisation.neural_summarisation.service);
server.addService(summariesproto.neural_summarisation.neural_summarisation.service, {
    neural_summarisation: (request_fn, callback) => {
      let request_data = request_fn.params
      console.log(request_fn.request.text, '------------------------');
      let summary = removeDuplicateCharacters(request_fn.request.text);
      callback(null,summary)
    }
  })
 
server.start()