from produto import db, Produto

db.init('postgresql://postgres:875838@localhost/mercadinho_online')

db.connect()
db.create_tables([Produto])
db.close()
