from flask import Flask, jsonify, request
# initialize our Flask application
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/")
def main():
    return "Hello World"

@app.route("/name", methods=["POST"])
@cross_origin(supports_credentials=True)
def setName():
    if request.method=='POST':
        posted_data = request.get_json()
        for i in posted_data:
            msg = i.get('data')
        #msg = posted_data.get('data')
        return jsonify({'name' : msg})

#  main thread of execution to start the server
if __name__=='__main__':
    app.run(debug=True)