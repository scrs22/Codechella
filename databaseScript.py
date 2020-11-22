import sqlite3
from sqlite3 import Error
from tweesome.utils import config
import traceback

"""def create_connection(db_file):
    conn = None
    
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)
        traceback.print_exc()
    finally:
        if conn:
            conn.close()"""

def get_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)
        traceback.print_exc()
    finally:
        return conn


create_user_Table_qry = """create table if not exists users(
                            id integer primary key,
                            twitter_handle text,
                            user_email text,
                            password text,
                            contact text,
                            access_token text,
                            auth_secret_key text,
                            location text,
                            last_update_timestamp text
                            );"""

create_goals_table_qry = """
                            create table if not exists goals(
                            id integer primary key,
                            goal text,
                            hashtags text
                            );
                            """

create_user_goals_table_qry = """
                                create table if not exists user_goals(
                                id integer primary key,
                                user_id integer not null,
                                goal_id integer not null,
                                foreign key (user_id) references users(id),
                                foreign key (goal_id) references goals(id)
                                );"""

create_tweets_table_qry = """
                            create table if not exists tweets(
                            id integer primary key,
                            user_id integer not null,
                            goal_id integer not null,
                            tweet blob,
                            tweet_time text,
                            foreign key (user_id) references users(id),
                            foreign key (goal_id) references goals(id)
                            );
"""

def execute_qry(conn,qry):
    try:
        if (conn):
            csr = conn.cursor()
            csr.execute(qry)
            return True
        else:
            raise Exception
    except Error as e:
        print(e)
        traceback.print_exc()
    finally:
        return False


def create_tables(conn):
    print("user_table")
    execute_qry(conn,create_user_Table_qry)
    print("goals table")
    execute_qry(conn,create_goals_table_qry)
    print("user and goals table")
    execute_qry(conn,create_user_goals_table_qry)
    print("tweets table")
    execute_qry(conn,create_tweets_table_qry)


if __name__ == '__main__':
    conn = get_connection(config.SQLITE_DB_FILE)
    if(conn):
        create_tables(conn)
    else:
        print("connection not established")