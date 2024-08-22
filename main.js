import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "Q1: Which of the following is used to declare a variable in TypeScript?",
        choices: ["a: let", "b: var", "c: const", "d: All of them"]
    },
    {
        name: "Question_2",
        type: "list",
        message: "Q2: Which of the following types is used to represent a true/false value in TypeScript?",
        choices: ["a: boolean", "b: number", "c: string", "d: null"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "Q3: How do you mark a variable as optional in an interface?",
        choices: ["a: name?: string;", "b: name: string?;", "c: optional name: string;", "d: name: ?string;"]
    },
    {
        name: "Question_4",
        type: "list",
        message: "Q4: Which of the following types allows you to store any value in TypeScript?",
        choices: ["a: unknown", "b: any", "c: void", "d: never"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "Q5: Which symbol is used to terminate a statement in TypeScript?",
        choices: ["a: :", "b: ,", "c: ;", "d: ."]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "d: All of them":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.Question_2) {
    case "a: boolean":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.Question_3) {
    case "a: name?: string;":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.Question_4) {
    case "b: any":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.Question_5) {
    case "c: ;":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`Score ${score}`);
