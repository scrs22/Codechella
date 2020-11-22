from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from app import createApp

app = createApp()
db = SQLAlchemy(app)
migrate = Migrate(app,db)





