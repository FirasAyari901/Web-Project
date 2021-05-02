from typing import Optional
from fastapi import FastAPI
from datetime import datetime
from pydantic import BaseModel

from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware

import mysql.connector
import json


class Login(BaseModel):
    mail:str
    pwd:str

class Signup(BaseModel):
    mail:str
    first_name:str
    last_name:str
    phone:str
    CIN:str
    age:str
    password:str
    photo:str
    recruteur:bool 


class Postuler(BaseModel):
    id_emploi:int
    mail:str


    description:str 
class Emploi(BaseModel):
    title:str
    mail:str
    price:int

class changeresponse(BaseModel):
    id_emploi:int
    mail:str
    response:str   
class Test(BaseModel):
    test:str
    


origins = [
	"http://localhost:4200",
	
]
middleware = [ Middleware(CORSMiddleware, allow_origins=['*'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])]


app = FastAPI(middleware=middleware)
@app.post("/login")
def login(log:Login ):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    cursor = db.cursor()
    cursor.execute(f"select mail,password,recruteur from user where mail = '{log.mail}' and password = '{log.pwd}'")
    rv = cursor.fetchall()
    
    if(cursor.rowcount == 1) :
      return {"login" : True ,"recruteur":rv[0][2]}
    else:
      return{"login" : False }
    

@app.post("/signup")
def login(signup:Signup ):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    cursor = db.cursor()
    sql = "INSERT INTO user VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    val =  (signup.mail, signup.first_name, signup.last_name, signup.phone, signup.CIN, signup.age, signup.password, signup.photo, signup.recruteur)
    cursor.execute(sql,val)
    db.commit()
    if(cursor.rowcount == 1) :
      return {"signup" : True}
    else:
      return{"signup" : False}
    

@app.get("/emploi/all")
def get_all_emploi():
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute('select * from emploi')
    row_headers=[x[0] for x in mycursor.description]
    row_headers.append("fields")
    row_headers.append("name")
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        result = list(result)
        result.append(fields(result[2]))
        result.append(employerName(result[2]))
        result = tuple(result)
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/fields")
def get_fields(mail:str):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute(f"select * from field where id_field in (select id_field from fieldAssociation where mail = '{mail}')")
    row_headers=[x[0] for x in mycursor.description]
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/emploi")
def get_emploi(id_field:int):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute(f'select * from emploi where mail in (select mail from fieldAssociation where id_field  = {id_field} ) ' )
    row_headers=[x[0] for x in mycursor.description]
    row_headers.append("fields")
    row_headers.append("name")
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        result = list(result)
        result.append(fields(result[2]))
        result.append(employerName(result[2]))

        result = tuple(result)
        json_data.append(dict(zip(row_headers,result)))
       
    return json_data

def fields(mail:str):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute(f"select field from field where id_field in (select id_field from fieldAssociation where mail = '{mail}')")
    rv = mycursor.fetchall()
    result = [f[0] for f in rv]
    return result  

def employerName(mail:str):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute(f"select first_name,last_name from user where mail = '{mail}'")
    rv = mycursor.fetchall()
    result = [f[0]+" "+f[1] for f in rv]
    return result[0]


@app.get("/postulations")
def get_emploi(mail:str):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute(f"select * from postulation where mail = '{mail}'" )
    row_headers=[x[0] for x in mycursor.description]
    row = []
    row.append(row_headers[-1])
    row.append("emptitle")
    row.append("empname")
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        result = list(result)
        emp = postulationEmp(result[1])
        res = []
        res.append(result[-1])
        res.append(emp[1])
        res.append(employerName(emp[2]))
        json_data.append(dict(zip(row,res)))
    return json_data

def postulationEmp(id_emploi:int):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute(f"select * from emploi where id_emploi = '{id_emploi}'")
    rv = mycursor.fetchall()
    result = list(rv[0])
    return result


@app.get("/jobposted")
def get_emploi(mail:str):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute(f"select * from emploi where mail = '{mail}'" )
    row_headers=[x[0] for x in mycursor.description]
    row_headers.pop()
    row_headers.pop()
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        result = list(result)
        result.pop()
        result.pop()
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/jobpostulation")
def get_emploi(id_emploi:int):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    mycursor.execute(f"select * from user where mail in (select mail from postulation where id_emploi = '{id_emploi}')" )
    row_headers=[x[0] for x in mycursor.description]
    row = []
    row.append(row_headers[0])
    row.append(row_headers[1])
    row.append(row_headers[2])
    row.append(row_headers[7])
    rv = mycursor.fetchall()
    res=[]
    json_data=[]
    for result in rv:
      res.append(result[0])  
      res.append(result[1])
      res.append(result[2])
      res.append(result[7])
      json_data.append(dict(zip(row,res)))
    return json_data

@app.post("/postuler")
def get_emploi(pos :Postuler):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    sql = "INSERT INTO postulation VALUES (%s, %s,%s, %s);"
    val = (pos.mail,pos.id_emploi,pos.description,"your request is not treated.")
    mycursor.execute(sql, val)
    db.commit() 

@app.post("/nvEmp")
def get_emploi(emp :Emploi):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    sql = "INSERT INTO emploi(title, mail, price) VALUES (%s,%s, %s);"
    val = (emp.title,emp.mail ,emp.price)
    mycursor.execute(sql, val)
    db.commit() 

@app.post("/changeResponse")
def get_emploi(res :changeresponse):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    mycursor = db.cursor()
    sql = "UPDATE postulation SET response = %s WHERE mail = %s AND id_emploi = %s;"
    val = (res.response,res.mail,res.id_emploi)
    mycursor.execute(sql, val)
    db.commit() 


