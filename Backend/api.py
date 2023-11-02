from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

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

if __name__ == '__main__':
    app.run(debug=True)
