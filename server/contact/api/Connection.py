import os
import json
from flask import Flask, request, jsonify, make_response
import uuid
import datetime
import boto3

app = Flask(__name__, static_folder="../../../client/build", static_url_path='/')


@app.route('/connection', methods=['POST'])
def connection():
  print("/connection Route Hit")
  data = request.get_json()
  print(request)
  return make_response(jsonify(data))


if __name__ == '__main__':
  app.run(threaded=True, host='0.0.0.0', port=8081)
