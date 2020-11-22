from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

class Engine():
    app = None
    db = None
    migrate = None

    def __init__(self):
        self.app = Flask(__name__)
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
        self.db = SQLAlchemy(self.app)
        self.migrate = Migrate(self.app, self.db)

    def getApplicationInstance(self):
        return self.app

    def getDbInstance(self):
        return self.db

    def getMigrateInstance(self):
        return self.migrate


appEngine = Engine()