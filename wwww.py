from flask import Flask,  render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", message="https://liff.line.me/0000-xxxx/パッケージID")

@app.route("/sticker")
def sticker():
    return render_template("sticker.html", packageId=request.args)

if __name__ == "__main__":
    app.run()