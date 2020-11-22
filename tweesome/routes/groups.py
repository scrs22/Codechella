from flask import Blueprint

groups_api = Blueprint("groups",__name__)


@groups_api.route("/test")
def testing_routes():
    return "hello"