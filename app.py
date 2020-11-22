from flask import Flask
from tweesome.routes import groups,Auth
from flask_sqlalchemy import SQLAlchemy
from tweesome.utils import Utilities,config
from databaseScript import get_connection
import os

def createApp():
    from tweesome import models,processors,utils,routes
    app = Flask(__name__)
    print(os.getcwd())
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:{}'.format(os.path.join(os.getcwd(),"app.db"))
    app.register_blueprint(groups.groups_api,url_prefix='/groups')
    app.register_blueprint(Auth.auth_api,url_prefix='/auth')
    models.init_app(app)
    processors.init_app(app)
    utils.init_app(app)
    routes.init_app(app)
    return app


if __name__ == "__main__":
    conn = get_connection(config.SQLITE_DB_FILE)
    Utilities.set_conn(conn)
    app = createApp()

    app.run(debug=True)

