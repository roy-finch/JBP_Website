import os
from flask import (
    Flask, render_template, request, session, redirect, url_for
    )
app = Flask(__name__)
app.config["SECRET_KEY"] = "secret-key"


@app.route("/")
def index():
    # This is the function for the homepage
    return render_template("index.html")


if __name__ == "__main__":
    # Main function which sets up the app and .run variables/condit
    app.run(
        host=os.environ.get(
            "IP", "0.0.0.0"), port=int(
                os.environ.get(
                    "PORT", "5000")), debug=True)