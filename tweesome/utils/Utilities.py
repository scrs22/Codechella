from datetime import datetime
from sqlite3 import Error
import traceback


db_conn = None


def set_conn(conn):
    db_conn = conn

def get_conn():
    return db_conn


def get_current_timestamp():
    return datetime.timestamp(datetime.now())


def execute_qry(qry):
    try:
        if (db_conn):
            csr = db_conn.cursor()
            csr.execute(qry)
            return True
        else:
            raise Exception
    except Error as e:
        print(e)
        traceback.print_exc()
    finally:
        return False