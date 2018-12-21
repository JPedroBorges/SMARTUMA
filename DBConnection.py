import sqlite3
from sqlite3 import Error

DATABASE = "./db/db.db"

class Conn():
    def __init__(self):
        self.create_connection(DATABASE)

    def create_table(self):
        sql_create_measures_table = """ CREATE TABLE IF NOT EXISTS measures (
                                    id integer PRIMARY KEY,
                                    sensor_id integer NOT NULL,
                                    value integer NOT NULL,
                                    unit real NOT NULL,
                                    timestamp text NOT NULL,
                                    sent real NOT NULL,
                                ); """

        try:
            c = self.conn.cursor()
            c.execute(sql_create_measures_table)
        except Error as e:
            print(e)

    def create_connection(self, db_file):
        try:
            self.conn = sqlite3.connect(db_file)
            if self.conn is not None:
                self.create_table()
        except Error as e:
            print(e)
            self.conn = None

    def create_measure(self, measure):
        sql = ''' INSERT INTO measures(sensor_id,value,unit,timestamp,sent)
                VALUES(?,?,?,?,?) '''
        cur = self.conn.cursor()
        cur.execute(sql, measure)
        return cur.lastrowid
