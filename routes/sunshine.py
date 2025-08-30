from flask import Blueprint, jsonify
import random
from datetime import datetime

sunshine_bp = Blueprint("sunshine", __name__)

@sunshine_bp.route("/sunshine-data", methods=["GET"])
def get_sunshine_data():
   
    hourly_data = [
        {"hour": f"{h:02d}:00", "duration": round(random.uniform(0, 6), 1)}
        for h in range(6, 19)
    ]

   
    avg = round(sum(x["duration"] for x in hourly_data) / len(hourly_data), 2)

    data = {
        "date": datetime.now().strftime("%Y-%m-%d"),
        "hourly_data": hourly_data,
        "average": avg,
        "source": "Mock Weather Station"
    }

    return jsonify(data)
