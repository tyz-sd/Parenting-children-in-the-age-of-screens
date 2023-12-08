/*
   Web Dashboard

   Written by Kyle Wade (https://github.com/kyle1373)

   Description:
   This web page displays 16 questions for the user to answer. When the user clicks submit, a POST request is sent to the Python server located at "/python_server/app.py". The server runs a model to predict if a child's screen time is beneficial or harmful and whether parenting has become easier or harder compared to 20 years ago.

   Usage:
   Access this page by navigating to https://localhost:3000 after running "yarn dev".

   Dependencies:
   - Next.js (React framework)
   - Styled-components (for styling)
   - "mappings.json" (a JSON file containing question-answer mappings)
   - "Inter" font from Google Fonts

   Components:
   - Home: The main React component responsible for rendering the survey questions and handling user responses.

   State and Variables:
   - answers: Stores user responses to survey questions.
   - predictions: Stores the predictions made by the Python server.
   - apiResultsMappings: Maps numeric prediction values to descriptive strings.
   - question_keys_map: Maps question keys to their descriptions.
   - question_keys: Array of question keys used to iterate through questions.
   - inter: Font style for text elements.

   Functions:
   - handleRadioChange: Updates the "answers" state when a radio button is selected.
   - handleSubmit: Sends user responses to the server and updates the "predictions" state with the server's response.

   Structure:
   - The main component renders a list of survey questions with radio button options.
   - When the user submits their answers, the data is sent to the server for analysis.
   - The server's predictions are displayed along with images.
*/

import Image from "next/image";
import { Inter } from "next/font/google";
import AnswerMappings from "../mappings.json";
import { useState } from "react";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const StyledRadioButton = styled.input`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export default function Home() {
  type ApiResultsMappingKeys =
    | "Does_screen_time_harm_or_benefit"
    | "How_good_is_parent_parenting";

  type ApiResultsMappings = {
    [key in ApiResultsMappingKeys]: { [key: number]: string };
  };

  interface ApiResult {
    Does_screen_time_harm_or_benefit: number;
    How_good_is_parent_parenting: number;
    error: string;
  }

  const apiResultsMappings: ApiResultsMappings = {
    Does_screen_time_harm_or_benefit: {
      0: "You are one among the 74% people who feel smartphones do more harm than good",
      1: "You are one among the 26% people who feel smartphones  are beneficial to children",
      2: "Looks like you are ambiguous about smartphones being good or bad",
    },
    How_good_is_parent_parenting: {
      0: "You are one among 68% of parents who feel parenting is harder now than 20 years ago",
      1: "You are one among 27% people who feel parenting is the same now than 20 years ago",
      2: "You are one among only 5% people  who feel Parenting is easier than 20 years ago",
      3: "We could not make a confident conclusion of how difficult parenting is for you now than 20 years ago",
    },
  };

  const question_keys_map = {
    Time_spent_together:
      "When thinking about your role as a parent, how well do you rate the job that you do?",
    ACCEPT_own_smartphone:
      "In general, at what age do you think it is acceptable for a child to have their OWN cellphone?",
    ML_learn_social_skills:
      "Still thinking about children who are 11 years old or younger, do you think that using smartphones will help or hurt their ability to learn effective social skills?",
    ML_do_well_in_school:
      "Still thinking about children who are 11 years old or younger, do you think that using smartphones will help or hurt their ability to do well in school?",
    Feel_pressurised_to_share:
      "How often, if ever, do you feel pressure to only post things on social media sites that make you look like a good parent to others?",
    ADV_socialmedia:
      "Do you ever get parenting advice or information about screen time from social media?",
    ADV_online_blogs:
      "Do you ever get parenting advice or information about screen time from online blogs?",
    ADV_other_parents:
      "Do you ever get parenting advice or information about screen time from other parents?",
    How_often_youtube:
      "About how often does this child watch videos on YouTube?",
    CO_online_bully:
      "How concerned, if at all, are you that this child might ever be bullied online?",
    HCHU_smartphone:
      "Overall, how much time would you say this child spends on a smartphone?",
    MNT_websites:
      "Do you check the websites this child visits or the mobile apps they use?",
    MNT_take_away_mobile:
      "Do you take away this child’s smartphone or internet privileges as punishment?",
    MNT_screentime:
      "Do you limit the times of day or length of time when this child can use screens?",
    Child_first_age_smartphone:
      "At what age did this child begin engaging with a smartphone?",
    RS_to_contact:
      "How much, if at all, is you easily getting in contact with this child a reason for them to get a smartphone?",
  };

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

  const [predictions, setPredictions] = useState<any>(undefined);

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
 
    // Send the data to API endpoint
    const response = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answerList),
    });

    console.log(response);

    if (!response.ok) {
      const message =
        "Could not connect to server. Check that the server is running correctly\n\n" +
        response.statusText;
      setPredictions([message]);
      return;
    }

    const result: ApiResult = await response.json();

    if (result.error) {
      const message = "An API error occurred: " + result.error;
      setPredictions([message]);
      return;
    }

    const harmVsBenefitKey: ApiResultsMappingKeys =
      "Does_screen_time_harm_or_benefit";
    const harmVsBenefitReasoning =
      apiResultsMappings[harmVsBenefitKey][result[harmVsBenefitKey]];

    const howGoodParentingKey: ApiResultsMappingKeys =
      "How_good_is_parent_parenting";
    const howGoodParentingReasoning =
      apiResultsMappings[howGoodParentingKey][result[howGoodParentingKey]];

    setPredictions([harmVsBenefitReasoning, howGoodParentingReasoning]);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-blue-200 justify-between px-20 py-10 ${inter.className}`}
    >
      <div className="z-10 w-full items-center justify-between">
        <h1 className="text-center mb-10 text-4xl font-bold">Survey</h1>
        {question_keys.map((question_key, index) => {
          return (
            <div key={question_key}>
              <h2 className="text-xl font-bold mb-2">
                {index + 1}. {(question_keys_map as any)[question_key]}
                {/* {question_key} */}
              </h2>
              <div className="flex flex-col mb-5">
                {Object.entries((AnswerMappings as any)[question_key]).map(
                  ([answer, value], index) => {
                    if (answer === "Missing") {
                      return <></>;
                    }
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
                        <label>
                          {answer === "Refused" ? "Refuse to answer" : answer}
                        </label>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}

        {predictions && (
          <div>
            <div
              style={{
                display: "flex", 
                maxWidth: "100%", // Ensures the container does not overflow its parent
                overflow: "hidden", // Hides any overflow
              }}
            >
              <img
                style={{
                  flex: "1", // Allows the image to grow to fill the container
                  height: 400, // Ensures the image height does not exceed the container's height
                }}
                src={"hardervseasier.png"}
                alt={"Harder vs Easier"}
              />
              <img
                style={{
                  flex: "1", // Same properties for the second image
                  height: 400,
                }}
                src={"harmvsbenefit.png"}
                alt={"Harm vs Benefit"}
              />
            </div>
            <h1 className="mt-5 text-lg font-bold">
              Based on your responses, we believe that...
              <br />
              <br />
              {predictions[0]}
              <br />
              {predictions[1]}
            </h1>
            <button
              onClick={() => {
                setPredictions(undefined);
              }}
              className="mt-10 bg-black text-white font-bold py-4 px-8 rounded text-xl mb-10"
            >
              Ok
            </button>
          </div>
        )}
        {!predictions && (
          <button
            onClick={handleSubmit}
            className="mt-40 bg-blue-500 text-white font-bold py-4 px-8 rounded text-xl mb-10"
          >
            Submit
          </button>
        )}
      </div>
    </main>
  );
}
