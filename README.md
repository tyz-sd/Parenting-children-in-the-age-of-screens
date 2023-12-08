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

### dashboard/mappings.json
This file is a replication of part of the preprocessing which maps original dataset responses (being numbers) to actual answer choices

### dashboard/pages/index.tsx
This web page displays 16 questions for the user to answer. When the user clicks submit, a POST request is sent to the Python server located at `python_server/app.py`. The server runs a model to predict if a child's screen time is beneficial or harmful and whether parenting has become easier or harder compared to 20 years ago.

### dashboard/python_server/app.py
This contains the Python server which accepts a POST request endpoint with question data. Then, it outputs a JSON which, based on the user's submitted questions, predicts if the user thinks parenting is easier, the same, or harder than it was 20 years ago. In addition, it tells the user if they think their child using a smartphone provides more harm than benefit or the other way around.

### dashboard/python_server/model_predictor
This directory contains the files and folders used to generate and run our model. See the directory for more information.

### data/
This is the original data from the Pew Research study.

### datasets/correlations.csv
This contains the correlations between two columns in the original data.

### datasets/data_pre_processing.ipynb
This is the Jupyter Notebook which does the data preprocessing algorithm.

### datasets/numeric_data.csv
This is the original numeric data parsed out from the original dataset.

### datasets/parenting.csv
This is a converted .csv file with the values being response strings that represent the original survey questions themselves 

### datasets/pre_processed_data.csv
This is the data after our preprocessing from the original dataset to the numbers to the fully preprocessed dataset.

### individual_work/
This contains the individual work each group member has done as a breakdown.

### visualizations/Visualizations.ipynb
This contains the Jupyter Notebook for visualizations that were done to make conclusions about our original data.

### visualizations/Visualizations.py
This file contains classes and helper functions to create the visualizations for our analysis. The output is the same as `Visualizations.ipynb`.

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
itertools  
tabulate  

## Steps to Generate Dataset
Install the original dependencies above and run `datasets/data_pre_processing.ipynb`

## Steps to Run Visualizations
Install the original dependencies above and run `visualizations/Visualizations.ipynb`

## Steps to Run Web Dashboard
Go to `dashboard/`  

Install `node_modules` by calling `npm i` or `yarn`  

Run `yarn dev` on one terminal to start the frontend. It will be hosted on `http://localhost:3000/`  

Now, open a separate terminal and `pip install` the packages `flask` and `flask_cors`  

Using that separate terminal, go into the `python_server` directory and run `python app.py` to start the backend server for model prediction  

## Analysis and Conclusions
#### I. Screen Time and Parental Concerns
- **Device Usage:** 
  - **Smartphones/Tablets:** 70% of children use them.
  - **Television:** 90% watch TV.
- **Parental Concern:** 76% express concern about their child's screen time.

#### II. Parental Monitoring Strategies
- **Common Practices:** 
  - Taking away screens as punishment.
  - Imposing screen time limits.
  - Checking websites visited.
  - Monitoring call records and text messages.
- **Less Common Practices:** 
  - Not following children on social media.
  - Not using GPS services for monitoring.

#### III. Racial and Demographic Insights
- **Discipline and Monitoring Variation:** 
  - **Phone Confiscation as Punishment:**
    - 41% Black parents.
    - 38% Hispanic parents.
    - 34% White parents.
  - **Monitoring Calls:**
    - 29% Black parents.
    - 26% Hispanic parents.
    - 19% Other demographics.
- **Trend:** Black and Hispanic parents tend to be stricter.

#### IV. Parental Beliefs
- **Benefits of Smartphones:** 
  - Perceived to aid in interest and creativity.
- **Drawbacks of Smartphones:** 
  - Perceived to hinder social skills and healthy relationships.

#### V. Social Media and Content Concerns
- **Trends:** 
  - Increase in social media usage with age.
  - YouTube is popular among all age groups.
- **Content Concern:** 
  - 79% worry about the content viewed online.

#### VI. Responsibility and Regulation
- **Perceived Responsibility:** 
  - 93% of parents feel responsible for safeguarding against inappropriate content.
  - Parents have low trust in government and technology companies.

#### VII. Ideal Age for Smartphone Ownership
- **General Consensus:** 
  - 12 to 14 years as ideal age for a smartphone.
- **Tablet for Younger Children:** 
  - More common for ages 3 to 8.

#### VIII. Reasons for Early Smartphone Access
- **Primary Motivations:** 
  - Quick contact with children.
  - Peer pressure among children.

#### IX. Parental Self-Reflection
- **Parental Distraction:** 
  - 75.5% of self-assessed fair/poor parents distracted by own devices.
- **Parenting Difficulty:** 
  - Majority believe parenting is harder now than 20 years ago.

#### X. General Perception of Smartphones
- **Opinion:** 
  - 73% see more harm than benefit in smartphones.
  
## References
[Pew Research study with 5000+ parents](https://www.pewresearch.org/internet/2020/07/28/parenting-children-in-the-age-of-screens/)
