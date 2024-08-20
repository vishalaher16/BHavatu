from flask import Flask, request, jsonify
import swisseph as swe

app = Flask(__name__)

# Set the path to the ephemeris data files
swe.set_ephe_path('/usr/share/libswe/')  # Change this path to where your Swiss Ephemeris files are located

@app.route('/api/kundli', methods=['POST'])
def generate_kundli():
    data = request.get_json()
    
    # Extract user input from the request
    birth_date = data.get('birth_date')  # Format: 'YYYY-MM-DD'
    birth_time = data.get('birth_time')  # Format: 'HH:MM'
    birth_place = data.get('birth_place')  # Coordinates required (latitude, longitude)
    
    if not (birth_date and birth_time and birth_place):
        return jsonify({"error": "Invalid input"}), 400
    
    # Convert birth date and time into Julian Day
    year, month, day = map(int, birth_date.split('-'))
    hour, minute = map(int, birth_time.split(':'))
    jd = swe.julday(year, month, day, hour + minute/60.0)
    
    # Calculate Lagna (Ascendant)
    lat, lon = birth_place.get('latitude'), birth_place.get('longitude')
    lagna = swe.calc_ut(jd, swe.SE_ASC, (lat, lon))
    
    # Example: You can add more planetary positions here
    planets = {}
    for planet in [swe.SE_SUN, swe.SE_MOON, swe.SE_MERCURY, swe.SE_VENUS, swe.SE_MARS]:
        planet_position = swe.calc_ut(jd, planet)
        planets[swe.get_planet_name(planet)] = planet_position
    
    kundli = {
        "lagna": lagna,
        "planets": planets,
        "houses": []  # Add house calculations here if needed
    }
    
    return jsonify(kundli)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
