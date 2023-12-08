import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, LabelEncoder
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.utils import resample
from joblib import load


def prediction_How_is_curret_days_parenting(ans_list):
    model_for_how_is_curret_days_parenting = load('./model_predictor/model/random_forest_model_15.joblib')
    categorical_columns1 = ['Time_spent_together' , 'ACCEPT_own_smartphone', 'ML_learn_social_skills', 
                            'ML_do_well_in_school', 'Feel_pressurised_to_share', 'ADV_socialmedia',
                            'ADV_online_blogs','ADV_other_parents','How_often_youtube','CO_online_bully',
                            'HCHU_smartphone','MNT_websites','MNT_take_away_mobile','MNT_screentime',
                            'Child_first_age_smartphone','RS_to_contact']
    data = pd.read_csv('./model_predictor/target_data.csv')
    data = data[categorical_columns1]
    data.loc[len(data)] = ans_list
    encoder = OneHotEncoder(sparse=False, handle_unknown='ignore')
    encoded_data = encoder.fit_transform(data[categorical_columns1])  # Specify your categorical columns
    encoded_columns = encoder.get_feature_names_out(categorical_columns1)
    encoded_df = pd.DataFrame(encoded_data, columns=encoded_columns)
    data_encoded = encoded_df
    X = data_encoded
    y_pred_rf1 = model_for_how_is_curret_days_parenting.predict(X)
    data_encoded['How_is_curret_days_parenting'] = y_pred_rf1
    data_encoded.to_csv("result.csv")
    
    return data_encoded['How_is_curret_days_parenting'][len(data_encoded) - 1]


def prediction_Harm_vs_benifits(ans_list):
    model_for_how_is_curret_days_parenting = load('./model_predictor/model/random_forest_model2_15.joblib')
    categorical_columns1 = ['Time_spent_together' , 'ACCEPT_own_smartphone', 'ML_learn_social_skills', 
                            'ML_do_well_in_school', 'Feel_pressurised_to_share', 'ADV_socialmedia',
                            'ADV_online_blogs','ADV_other_parents','How_often_youtube','CO_online_bully',
                            'HCHU_smartphone','MNT_websites','MNT_take_away_mobile','MNT_screentime',
                            'Child_first_age_smartphone','RS_to_contact']
    data = pd.read_csv('./model_predictor/target_data.csv')
    data = data[categorical_columns1]
    data.loc[len(data)] = ans_list
    encoder = OneHotEncoder(sparse=False, handle_unknown='ignore')
    encoded_data = encoder.fit_transform(data[categorical_columns1])  # Specify your categorical columns
    encoded_columns = encoder.get_feature_names_out(categorical_columns1)
    encoded_df = pd.DataFrame(encoded_data, columns=encoded_columns)
    data_encoded = encoded_df
    X = data_encoded
    y_pred_rf1 = model_for_how_is_curret_days_parenting.predict(X)
    data_encoded['Harm_vs_benifits'] = y_pred_rf1
    
    return data_encoded['Harm_vs_benifits'][len(data_encoded) - 1]


