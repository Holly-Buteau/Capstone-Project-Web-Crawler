import psycopg2

conn = psycopg2.connect(database = "beginning_database", user = "*******", password = "****",
                        host = "firstdbinstance.cxvcjdies8vv.us-east-2.rds.amazonaws.com", port = "5432")

print "Opened database successfully"

cur = conn.cursor()


cur.execute('''CREATE TABLE WebHolder
      (ID INT PRIMARY KEY     NOT NULL,
      NAME           TEXT    NOT NULL,
      URL            TEXT     NOT NULL);''')
print "Table created successfully"

namedict = ({"ID":"1", "NAME":"First", "URL":"first_url"},
            {"ID":"2", "NAME":"Second", "URL":"second_url"},
            {"ID":"3", "NAME":"Third", "URL":"third_url"})

cur.executemany("""INSERT INTO WebHolder(ID, NAME, URL) VALUES (%(ID)s, %(NAME)s, %(URL)s)""", namedict)

conn.commit()
conn.close()
