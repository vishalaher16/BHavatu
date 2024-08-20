from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

CLIENT_ID = '8f4f9457-e2b7-4693-8959-ed39ca3541ce'
CLIENT_SECRET = 'z23or2vEzTejZaGIhihUL0pCUuhHJfui6D6PgEXR'
AUTH_URL = 'https://api.prokerala.com/token'
API_URL = 'https://api.prokerala.com/v2/astrology/kundli/'

def get_access_token(): 
    payload = {
        'grant_type': 'client_credentials',
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }
    response = requests.post(AUTH_URL, data=payload)
    response_data = response.json()
    return response_data['access_token']

@app.route('/api/kundli', methods=['POST'])
def generate_kundli():
    data = request.get_json()
    birth_date = data['birth_date']
    birth_time = data['birth_time']
    latitude = data['latitude']
    longitude = data['longitude']

    access_token = get_access_token()
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    url = f"{API_URL}?datetime={birth_date}T{birth_time}&latitude={latitude}&longitude={longitude}&ayanamsa=1"
    response = requests.get(url, headers=headers)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
