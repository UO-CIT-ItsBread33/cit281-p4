//Name: Brad Walther

const {data} = require('./p4-data.js');
const {getQuestions,
    getAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    getQuestionsAnswers} = require('./p4-module.js');


// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify

// getQuestions route
fastify.get("/cit/question", (request, reply) => {
    const generatedResponse = {error: "", statusCode: 200, questions: getQuestions()};
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(generatedResponse);
});

// getAnswers route
fastify.get("/cit/answer", (request, reply) => {
    const generatedResponse = {error: "", statusCode: 200, answers: getAnswers()}
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(generatedResponse);
});

// getQuestionsAnswers route
fastify.get("/cit/questionanswer", (request, reply) => {
    const generatedResponse = {error: "", statusCode: 200, questions_answers: getQuestionsAnswers()}
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(generatedResponse);
});

// getQuestion route
fastify.get("/cit/question/:number", (request, reply) => {
    let generatedResponse;
    if (request.params.number == "") {
        generatedResponse = {error: getQuestion("").error, statusCode: 200, question: getQuestion("").question, number: "" };
    }
    else if (request.params.number != "") {
        let numberFromClient = parseInt(request.params.number);
        generatedResponse = {error: getQuestion(numberFromClient).error, statusCode: 200, question: getQuestion(numberFromClient).question, number: numberFromClient };
    }
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(generatedResponse);
});

// getAnswer route
fastify.get("/cit/answer/:number", (request, reply) => {
    let generatedResponse;
    if (request.params.number == "") {
        generatedResponse = {error: getAnswer("").error, statusCode: 200, answer: getAnswer("").answer, number: "" };
    }
    else if (request.params.number != "") {
        let numberFromClient = parseInt(request.params.number);
        generatedResponse = {error: getAnswer(numberFromClient).error, statusCode: 200, answer: getAnswer(numberFromClient).answer, number: numberFromClient };
    }
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(generatedResponse);
});

// getQuestionAnswer route
fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let generatedResponse;
    if (request.params.number == "") {
        generatedResponse = {error: getQuestionAnswer("").error, statusCode: 200, question: getQuestionAnswer("").question, answer: getQuestionAnswer("").answer, number: "" };
    }
    else if (request.params.number != "") {
        let numberFromClient = parseInt(request.params.number);
        generatedResponse = {error: getQuestionAnswer(numberFromClient).error, statusCode: 200, question: getQuestionAnswer(numberFromClient).question, answer: getQuestionAnswer(numberFromClient).answer, number: numberFromClient };
    }
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(generatedResponse);
});

//An undefined/wildcard route
fastify.get("*", (request, reply) => {
    let generatedResponse = {error: "Route not found", statusCode: 404};
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(generatedResponse);
  });

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});