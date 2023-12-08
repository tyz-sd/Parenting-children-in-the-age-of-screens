<img width="1189" alt="image" src="https://github.com/kyle1373/ECE143-Team4/assets/59634395/e3dc454d-bbf0-46c3-9a3e-cdd7d7b4b189">

## Project Overview
Recently, more children are being exposed to the internet at a younger age, with a majority of parents being unsure about what effects it may have on their child. This study addresses likely correlations with why children are getting online at a younger age and its effects on parenting.  

We took a [Pew Research study](https://www.pewresearch.org/internet/2020/07/28/parenting-children-in-the-age-of-screens/) in which 5,513 parents of children under 18 were surveyed with various questions about...  
* Demographic and socioeconomic background.
* Perspective of social media. 
* Their child’s screen activity.
* Their perspective on their child’s screen activity.
* Much more.  

## Project Files

### dashboard
This dashboard is written in [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

All of the project files in this directory are default template files generated using `create-next-app`. The files of interest are `pages/index.tsx` and `python_server`.

#### mappings.json
This file is a replication of the preprocessing json which maps original dataset responses (being numbers) to actual answer choices

#### pages/index.tsx
This web page displays 16 questions for the user to answer. When the user clicks submit, a POST request is sent to the Python server located at `python_server/app.py`. The server runs a model to predict if a child's screen time is beneficial or harmful and whether parenting has become easier or harder compared to 20 years ago.

#### python_server/app.py
This contains the Python server which accepts a POST request endpoint with question data. Then, it outputs a JSON which, based on the user's submitted questions, predicts if the user thinks parenting is easier, the same, or harder than it was 20 years ago. In addition, it tells the user if they think their child using a smartphone provides more harm than benefit or the other way around.

#### python_server/result.csv
This is the result after calculations in the `model_predictor` and is returned within the `prediction_How_is_curret_days_parenting()` and `prediction_Harm_vs_benifits()` predictor functions.

#### python_server/model_predictor
This directory contains the files and folders used to generate and run our model. See the directory for more information.

## Third-Party Modules Used
sklearn  
pandas  
json  
numpy  
requests  
flask  
flask_cors  
seaborn  
matplotlib  
os  
joblib  

## Steps to Generate Dataset
TODO

## Steps to Run Visualizations
TODO

## Steps to Run Web Dashboard
TODO

## Analysis and Conclusions
TODO

## References
[Pew Research study with 5000+ parents](https://www.pewresearch.org/internet/2020/07/28/parenting-children-in-the-age-of-screens/)
