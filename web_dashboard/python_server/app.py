# web_dashboard_server.py is a Flask server that receives data from the web dashboard and returns the prediction results.

# To run, call `python3 web_dashboard_server.py` from the command line

from flask import Flask, request, jsonify
from flask_cors import CORS
import model_predictor.prediction

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze_data():
    try:
        # Parse input data
        input_data = request.json

        # Run functions from prediction.py
        result1 = model_predictor.prediction.prediction_How_is_curret_days_parenting(input_data)
        result2 = model_predictor.prediction.prediction_Harm_vs_benifits(input_data)

        # Prepare the result
        result = {
            "How_good_is_parent_parenting": str(result1),
            "Does_screen_time_harm_or_benefit": str(result2)
        }

        # Return the result as JSON
        return jsonify(result)

    except Exception as e:
        # Handle exceptions
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    CORS(app)

    app.run(debug=True)
