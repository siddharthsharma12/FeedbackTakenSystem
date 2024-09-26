// questions set api start====================================================>
const QuestionsSet = [
  {
    id: "d63bbac1-159b-4b8f-bea1-16c080c76e8a",
    title: "firstset",
    questions: [
      {
        id: "57a4acd2-346b-4eb8-83e9-024aea96f7e1",
        question: {
          type: "YesNo",
          title: "tanish is a good developer?",
        }
      },
      {
        id:"b3ef577f-d36a-42e3-85e6-3c14663f130e",
        question: {
          type: "Rating",
          title: "Hubspot is best rated?",
        }
      },
      {
        id:"9f26f1c6-57d9-4016-9298-7ec762440504",
        question: {
          type: "MultipleChoice",
          title: "Siddharth Is Good?",
          options: [
            { id:"67037c8d-f2b5-421f-82f0-dbad5961e261", title: "yes he is good" },
            { id: "5413ae41-03f7-4579-9f8e-82626c3a2479", title: "no he is bad" },
          ],
        }
      },
    ],
  },

  {
    id:"f263a66d-6aed-46b3-8ea3-57336129196d",
    title: "secondset",
    questions: [
      {
        id:"bc0dfa02-2a61-4d60-bffd-15d67a34fdca",
        question: {
          type: "YesNo",
          title: "raghav is a good player?",
        }
      },
      {
        id:"09d641aa-844e-4006-a84c-230484289585",
        question: {
          type: "Rating",
          title: "golden Color is best rated?",
        }
      },
      
      {
        id: "bfe8c980-6353-4c75-9c0e-23a00e74e50d",
        question: {
          type: "MultipleChoice",
          title: "transfunnel is best for marketing automation?",
          options: [
            { id: "f67f1e4b-d7b5-40b4-a729-e5000798435d", title: "Good" },
            { id: "b02117d0-9219-42c4-8b6e-328a7e6dd0e3", title: "Bad" },
          ],
        }
      },

    ],
  },
];
export default QuestionsSet;
