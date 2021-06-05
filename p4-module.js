//Name: Brad Walther

//Import Data
const {data} = require('./p4-data.js');

const getQuestions = () => {
    let arrayQuestion = [];
    for (q of data) {
        arrayQuestion.push(q.question)
    }
    return arrayQuestion;
}

const getAnswers = () => {
    let arrayAnswer = [];
    for (a of data) {
        arrayAnswer.push(a.answer);
    }
    return arrayAnswer;
}
const getQuestionsAnswers = () => {
    const dataCopy = [...data];
    return dataCopy;
}

const getQuestion = (numberInput = "") => {
    let resQuestion = null;
    let questionResponse = {question: '', number: numberInput, error: ''}
    for (item of data) {
        let q = item.question;
        if (q.includes(numberInput.toString()) == true && numberInput != "" ) {
            resQuestion = q;
            questionResponse.question = resQuestion;
            break;
        }
    }

    if (resQuestion == null && typeof numberInput == "number") {
      if (numberInput != 0) {
        questionResponse.error = 'Question number must be less than the number of questions (3)';
      }
      else {
        questionResponse.error = 'Question number must be >= 1';
      }
    }
    else if (typeof numberInput == "string") {
        questionResponse.error = 'Question number must be an integer';
    }
    return questionResponse;
}

const getAnswer = (numberInput = "") => {
    let resAnswer = null;
    let answerResponse = {answer: '', number: numberInput, error: ''}
    for (item of data) {
        let a = item.answer;
        if (a.includes(numberInput.toString()) == true && numberInput != "" ) {
            resAnswer = a;
            answerResponse.answer = resAnswer;
            break;
        }
    }
    
    if (resAnswer == null && typeof numberInput == "number") {
      if (numberInput != 0) {
        answerResponse.error = 'Answer number must be less than the number of questions (3)';

      }
      else {
        answerResponse.error = "Answer number must be >= 1";
      }
    }
    else if (typeof numberInput == "string") {
        answerResponse.error = 'Answer number must be an integer';
    }
    return answerResponse;
}

const getQuestionAnswer = (numberInput = "") => {
  let resAnswer = null;
  let resQuestion = null;
  let generatedResponse = {question: '', answer: '', number: numberInput, error: ''};
  for (item of data) {
    let a = item.answer;
    let q = item.question;
    if (a.includes(numberInput.toString()) && q.includes(numberInput.toString())) {
      if (numberInput != "") {
        resAnswer = a;
        resQuestion = q;
        generatedResponse.question = q;
        generatedResponse.answer = a;
        break;
      }
    }
  }
  if (resAnswer == null && resQuestion == null && typeof numberInput == "number") {
    if (numberInput != 0) {
      generatedResponse.error = "Number must be less than the number of questions (3)";
    }
    else {
      generatedResponse.error = "Number must be >= 1";
    }
  }
  else if (typeof numberInput == "string") {
    generatedResponse.error = "Number must be an integer";
  }
  return generatedResponse;
}



module.exports = {
  getQuestions,
  getAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  getQuestionsAnswers
};


