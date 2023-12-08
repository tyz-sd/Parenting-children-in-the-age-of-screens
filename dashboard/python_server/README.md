# Python Server

This code contains the python server which accepts a POST request endpoint with question data. Then, it outputs a JSON which, based on the user's submitted questions, predicts if the user thinks parenting is easier, the same, or harder than it was 20 years ago. In addition, it tells the user if they think their child using a smartphone provides more harm than benefit or the other way around.

#### app.py
This contains the python file to run the server. Run `python app.py`

#### result.csv
This is the result after calculations in the `model_predictor` and is returned within the `prediction_How_is_curret_days_parenting()` and `prediction_Harm_vs_benifits` predictor functions.

#### model_predictor
This directory contains the files and folders used to generate and run our model. See the directory for more information.
