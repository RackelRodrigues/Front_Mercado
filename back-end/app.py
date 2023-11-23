from flask import Flask
from Config import Config
from peewee import SqliteDatabase
from flask_cors import CORS
from peewee import Model



app1 = Flask(__name__)
app1.config.from_object(Config)

CORS(app1)

db = SqliteDatabase(None)

class BaseModel(Model):
    class Meta:
        database = db


if __name__ == '__main__':
    app1.run(debug=True)