from peewee import Model, CharField, PostgresqlDatabase,DecimalField, FloatField
from Config import Config
from esquema import *


# Configurar o banco de dados usando as informações do arquivo config.py
db = PostgresqlDatabase(Config.DATABASE['name'],
                        user=Config.DATABASE['user'],
                        password=Config.DATABASE['password'],
                        host=Config.DATABASE['host'],
                        port = Config.DATABASE.get('port', 5432))

# Definir o modelo de Produto usando Peewee

    
    
db.connect()


db.close()


    

db.close()


    