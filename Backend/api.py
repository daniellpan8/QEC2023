from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
from flask_sqlalchemy import SQLAlchemy
import os

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)
db = SQLAlchemy(app)

openai.api_key = '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'


@app.route('/ask-gpt', methods=['POST'])
def ask_gpt_chat():
    data = request.json
    messages = data.get("messages")

    if not messages:
        return jsonify({"error": "No messages provided."}), 400

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )

        message = response.choices[0].message["content"].strip()

        return jsonify({"message": message})

    except openai.error.OpenAIError as e:
        return jsonify({"error": str(e)}), 500


# these should not be gets but it was easier for testing so i didnt have to make a button that sends a POST


@app.route('/inc', methods=['POST'])
def inc():
    x = Data.query.all()
    x[0].value += 1
    db.session.commit()
    return jsonify({"value": x[0].value})


@app.route('/dec', methods=['POST'])
def dec():
    x = Data.query.all()
    x[0].value -= 1
    db.session.commit()
    return jsonify({"value": x[0].value})


@app.route('/getnum', methods=['POST'])
def getnum():
    data = Data.query.all()
    return jsonify({"value": data[0].value})


@app.route('/addnum', methods=['POST'])
def addnum():

    return


class Data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Value {self.value}>'


if __name__ == '__main__':
    app.run(debug=True)
