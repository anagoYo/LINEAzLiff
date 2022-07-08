from flask import Flask,  render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", message="https://liff.line.me/0000-xxxx/パッケージID")

@app.route("/<pkgID>")
def sticker(pkgID):
    return render_template("sticker.html", packageId=pkgID)

if __name__ == "__main__":
    app.run()