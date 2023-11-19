from flask import Flask, request, jsonify
from flask_cors import CORS
import lung_screening

app = Flask(__name__)
CORS(app)

lungSimple = lung_screening.LungSimple()

# Routing for api
@app.route('/lungscreening', methods=['POST'])
def lungScreening():
    data = request.json['formData']
    gender = 0
    if data['GENDER'] == "Female":
        gender = 1

    # Get allk the attributes from the json
    age = data['AGE']
    smoking = data['SMOKING']
    yellow = data['YELLOW_FINGERS']
    anxiety = data['ANXIETY']
    peer = data['PEER_PRESSURE']
    chronic = data['CHRONIC_DISEASE']
    fatigue = data['FATIGUE']
    allergy = data['ALLERGY']
    wheezing = data['WHEEZING']
    alc = data['ALCOHOL_CONSUMING']
    cough = data['COUGHING']
    short = data['SHORTNESS_OF_BREATH']
    swall = data['SWALLOWING_DIFFICULTY']
    chest = data['CHEST_PAIN']
    predict = lungSimple.predict(gender, age, smoking, yellow,
                                 anxiety, peer, chronic, fatigue,
                                 allergy, wheezing, alc, cough,
                                 short, swall, chest)

    return jsonify({"prediction": predict[0]})


if __name__ == '__main__':
    app.run(debug=True)
