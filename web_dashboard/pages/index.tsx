import Image from "next/image";
import { Inter } from "next/font/google";
import AnswerMappings from "../../mappings.json";
import { useState } from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const StyledRadioButton = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 5px;
  // Add more styles as needed
`;

export default function Home() {
  const question_keys = [
    "Time_spent_together",
    "ACCEPT_own_smartphone",
    "ML_learn_social_skills",
    "ML_do_well_in_school",
    "Feel_pressurised_to_share",
    "ADV_socialmedia",
    "ADV_online_blogs",
    "ADV_other_parents",
    "How_often_youtube",
    "CO_online_bully",
    "HCHU_smartphone",
    "MNT_websites",
    "MNT_take_away_mobile",
    "MNT_screentime",
    "Child_first_age_smartphone",
    "RS_to_contact",
  ];

  const [answers, setAnswers] = useState<any>({});

  const handleRadioChange = (question_key: any, value: any) => {
    setAnswers({ ...answers, [question_key]: value });
  };

  const handleSubmit = async () => {
    let isComplete = true;

    // Check if all questions have been answered
    for (const key of question_keys) {
      if (answers[key] === undefined) {
        isComplete = false;
        break;
      }
    }

    if (!isComplete) {
      alert("Please answer all the questions before submitting.");
      return;
    }

    const answerList = question_keys.map((key) => answers[key]);
    console.log("Submitting:", answerList);

    // Send the data to your API endpoint
    const response = await fetch("/api/submitAnswers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers: answerList }),
    });

    const result = await response.json();
    console.log(result);
    // Handle the result here (e.g., show it in the UI)
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-blue-200 justify-between px-20 py-10 ${inter.className}`}
    >
      <div className="z-10 w-full items-center justify-between">
        <h1 className="text-center mb-10 text-4xl font-bold">Survey</h1>
        {question_keys.map((question_key, index) => {
          return (
            <div>
              <h2 className="text-xl font-bold mb-2">
                {index + 1}. {question_key}
              </h2>
              <div className="flex flex-col mb-5">
                {Object.entries((AnswerMappings as any)[question_key]).map(
                  ([answer, value], index) => {
                    return (
                      <div key={answer} className="flex items-center">
                        <StyledRadioButton
                          type="radio"
                          name={question_key}
                          value={value as string}
                          className="mr-2"
                          onChange={() =>
                            handleRadioChange(question_key, value)
                          }
                        />
                        <label>{answer}</label>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
        <div className="h-20" />
        <button
          onClick={handleSubmit}
          className="mt-5 bg-blue-500 text-white font-bold py-4 px-8 rounded text-3xl mb-10"
        >
          Submit
        </button>
      </div>
    </main>
  );
}
