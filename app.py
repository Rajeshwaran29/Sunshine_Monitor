from flask import Flask ,blueprints , render_template
from routes.sunshine import sunshine_bp
from jinja2 import Markup , escape

app = Flask(__name__)


app.register_blueprint(sunshine_bp, url_prefix="/api")


@app.route("/")
def home():
    return render_template("index.html")
    



if __name__ == "__main__":
    app.run(debug=True)
