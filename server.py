from flask import Flask
import psycopg2, psycopg2.extras
import random

app = Flask(__name__)

@app.route("/")
def home():
    # connect to DB, open cursor and execute query to check how many records in my db table
    conn = psycopg2.connect("dbname=haikulunch")
    cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    cur.execute("SELECT COUNT(*) FROM haiku")

    # Retrieve query results and convert tuple to list
    record_count = cur.fetchone()
    extracted_record_count = []
    for item in record_count:
        extracted_record_count.append(item)

    # generate a random number in that range
    rand_num = random.randint(1, extracted_record_count[0])

    # pull that record from the db table
    cur.execute("SELECT * FROM haiku WHERE id = %s", [rand_num])
    random_haiku = cur.fetchall()

    # add keys from column names to make content more readable
    dict_random_haiku = []
    for record in random_haiku:
        print(record)
        dict_random_haiku.append(dict(record))

    # return
    return dict_random_haiku

@app.route("/about")
def about():
    # to be decided - is this a separate page? how to generate using reaact
    return "About page"

app.run(debug=True)