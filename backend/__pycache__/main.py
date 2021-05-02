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
    
origins = [
	"http://localhost:5500",
	"http://127.0.0.1:5500",
	"http://127.0.0.1:8080",
]
middleware = [ Middleware(CORSMiddleware, allow_origins=['*'], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])]


app = FastAPI(middleware=middleware)
@app.get("/login")
async def get_livre(log:Login ):
    db = mysql.connector.connect(host = "localhost" , user = "root" , password = "" , database = "job")
    cursor = db.cursor()
    cursor.execute(f"select * from user where mail = '{log.mail}' and password = '{log.pwd}'")
    row_headers=[x[0] for x in cursor.description]
    rv = cursor.fetchall()
    return dict(zip(row_headers,rv))


@app.post("/istic2021/etudiant")
def etudiant( etudiant : Etudiant):
	mydb = mysql.connector.connect(host="localhost",user="root",password="",database="istic2021")
	cursor = mydb.cursor()
	query = f"insert into etudiant values ('{etudiant.CIN_user}','{etudiant.Login}','{etudiant.Mot_Pass}','{etudiant.Nom}','{etudiant.Prenom}','{etudiant.Telephone}','{etudiant.Sexe}','{etudiant.Email}','{etudiant.Adresse}','{etudiant.Specialite}','{etudiant.Niveau}','{etudiant.Institut}') "
	try:
		cursor.execute(query)
		mydb.commit()
	except Exception as e: 
		return {"message" : e}

	
