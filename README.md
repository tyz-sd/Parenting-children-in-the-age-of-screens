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
This contains the correlations between two columns in the original data/

### datasets/data_pre_processing.ipynb
This is the Jupyter Notebook which does the data preprocessing.

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
This file contains classes and helper functions to create the visualizations for our analyis. The output is the same as Visualizations.ipynb.

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
Install the original dependencies and run `datasets/data_pre_processing.ipynb`

## Steps to Run Visualizations
Install the original dependencies and run `visualizations/Visualizations.ipynb`

## Steps to Run Web Dashboard
Go to `dashboard`  

Install `node_modules` by calling `npm i` or `yarn`  

Run `yarn dev` on one terminal to start the frontend. It will be hosted on `http://localhost:3000/`  

Now, open a separate terminal and `pip install` the packages `flask` and `flask_cors`  

Using that separate terminal, go into the `python_server` directory and run `python app.py` to start the backend server for model prediction  

## Analysis and Conclusions
Around 7 out of 10 parents mentioned that their child uses a smartphone or tablet. 9 out of 10 parents said that their child watches TV. The majority of parents (76%) said they are at least somewhat concerned about their child’s screen time. Parents typically take away their children’s screens as punishment, impose limits on their children’s screen time, check websites that they visit, and monitor their call records and text messages. Meanwhile, parents do not follow their children on social media or use GPS services as a way to monitor their children’s screen time. This shows that there are some limits that parents have on monitoring their child’s screen time. While they monitor their child’s private messages and calls, they do not follow their child on social media to see the content that they post. We also looked at race and demographics upon closer inspection of these numbers and noticed something interesting. 41% of black parents and 38% of Hispanic parents take their child’s phone away as punishment at a much higher rate, compared to just 34% of white parents. Furthermore, 29% of black parents and 26% of Hispanic parents monitor their child’s call records compared to just 19% from other demographics. Across the board, it seems that Black and Hispanic parents are far more strict with their child’s screen activity compared to other demographics. Parents believe that smartphones help with their children’s pursuit of interest and creativity. Meanwhile, parents believe that they do not help with their children’s social skills and healthy relationships. There is an increasing trend in social media usage as the child grows up, and YouTube is the most prominent social media that children interact with irrespective of age. 79% of parents say that their greatest concern with their child’s screen time relates to the content they see online. Though the government and corporations are responsible for making stringent laws, ultimately parents believe it is their responsibility to safeguard their kids from inappropriate content, with 93% agreeing they hold a lot of responsibility. The majority of parents believe 12 to 14 is the ideal age when a child can own a smartphone. It is interesting to note that more parents are willing to give a tablet to their child between the ages of 3 to 8. Interestingly, irrespective of income, parents are trying to provide children with smartphones from a very young age. Nearly 2/3 of parents tend to give a smartphone to their child to contact them quickly, and there is a substantial amount of peer pressure involved for children to possess a smartphone (around 19% of parents). Out of the parents who responded that they are doing a fair/poor job as a parent, 75.5% admit that they are distracted by their own electronic devices, showing that smartphones do affect how parents parent. Most parents believe that parenting today is harder than it was 20 years ago. It’s not surprising that 73% mention that there’s more harm than benefit with smartphones. Although it has become paramount to use a smartphone in mundane life, concrete conclusions on how children are affected by the era of smartphones and the internet require more data.

## References
[Pew Research study with 5000+ parents](https://www.pewresearch.org/internet/2020/07/28/parenting-children-in-the-age-of-screens/)
