import sqlite3
from sqlite3 import Error

DATABASE = "./db/db.db"

class Conn():
    def __init__(self):
        conn = self.create_connection(DATABASE)

    def create_table(self, conn):
        sql_create_measures_table = """ CREATE TABLE IF NOT EXISTS measures (
                                    id integer PRIMARY KEY,
                                    sensor_id integer NOT NULL,
                                    value integer NOT NULL,
                                    unit real NOT NULL,
                                    timestamp text NOT NULL,
                                    sent real NOT NULL,
                                ); """

        try:
            c = conn.cursor()
            c.execute(sql_create_measures_table)
        except Error as e:
            print(e)

    def create_connection(self, db_file):
        try:
            conn = sqlite3.connect(db_file)
            if conn is not None:
                self.create_table(conn)
            return conn
        except Error as e:
            print(e)
        return None

    def create_measure(self, conn, measure):
        sql = ''' INSERT INTO measures(sensor_id,value,unit,timestamp)
                VALUES(?,?,?,?) '''
        cur = conn.cursor()
        cur.execute(sql, measure)
        return cur.lastrowid

"""         conn = create_connection(database)
        measure = (1, 10, 'ºC', datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        with conn:
            create_measure(conn, measure) """