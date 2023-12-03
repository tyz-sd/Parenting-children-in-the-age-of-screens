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
  const question_keys_map = {
    "Time_spent_together": "When thinking about your role as a parent, how well do you rate the job that you do?",
    "ACCEPT_own_smartphone": "In general, at what age do you think it is acceptable for a child to have their OWN cellphone?",
    "ML_learn_social_skills": "Still thinking about children who are 11 years old or younger, do you think that using smartphones will help or hurt their ability to learn effective social skills?",
    "ML_do_well_in_school": "Still thinking about children who are 11 years old or younger, do you think that using smartphones will help or hurt their ability to do well in school?",
    "Feel_pressurised_to_share": "How often, if ever, do you feel pressure to only post things on social media sites that make you look like a good parent to others?",
    "ADV_socialmedia": "Do you ever get parenting advice or information about screen time from social media?",
    "ADV_online_blogs": "Do you ever get parenting advice or information about screen time from online blogs?",
    "ADV_other_parents": "Do you ever get parenting advice or information about screen time from other parents?",
    "How_often_youtube": "About how often does this child watch videos on YouTube?",
    "CO_online_bully": "How concerned, if at all, are you that this child might ever be bullied online?",
    "HCHU_smartphone": "Overall, how much time would you say this child spends on a smartphone?",
    "MNT_websites": "Do you check the websites this child visits or the mobile apps they use?",
    "MNT_take_away_mobile": "Do you take away this child’s smartphone or internet privileges as punishment?",
    "MNT_screentime": "Do you limit the times of day or length of time when this child can use screens?",
    "Child_first_age_smartphone": "At what age did this child begin engaging with a smartphone?",
    "RS_to_contact": "How much, if at all, is you easily getting in contact with this child a reason for them to get a smartphone?",
  }
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
    const response = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answerList),
    });
    
    console.log(response);
    const result = await response.json();
    alert(JSON.stringify(result));
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
                {index + 1}. {(question_keys_map as any)[question_key]}
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
