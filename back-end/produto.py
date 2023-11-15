from peewee import Model, CharField, PostgresqlDatabase 
from Config import Config

# Configurar o banco de dados usando as informações do arquivo config.py
db = PostgresqlDatabase(Config.DATABASE['name'],
                        user=Config.DATABASE['user'],
                        password=Config.DATABASE['password'],
                        host=Config.DATABASE['host'],
                        port = Config.DATABASE.get('port', 5432))

# Definir o modelo de Produto usando Peewee
class Produto(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'produtos'  



class Promocao(Model):
    nome = CharField(max_length=100)
    Promocao = CharField(max_length=100)
    descricao = CharField(max_length=100)
    porcentagem = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'promocao'


        
class Bebida(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'bebidas'

class Higiene(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'higiene'

class Fresco(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'frescos'

class Mercearia(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'mercearia'

class Limpeza(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'limpeza'

class Congelado(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'congelados'

class Saude(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'saude'

class Animais(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'animais'


class Padaria(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'padaria'

class Organicos(Model):
    nome = CharField(max_length=100)
    descricao = CharField(max_length=100)

    class Meta:
        database = db
        table_name = 'organicos'

db.connect()
db.create_tables([Bebida, Higiene, Fresco, Mercearia, Limpeza, Congelado, Saude, Promocao,Animais, Padaria ,Organicos])
db.close()


db.connect()
db.create_tables([Produto])
db.close()
    
    
db.connect()


Promocao.create(nome="Arroz Pop parbolizado", descricao="R$ 32,90 /Uni", Promocao="R$7,00", porcentagem ="25%")
Promocao.create(nome="combo caixas de chocolate", descricao="R$ 24,89 /Uni", Promocao="R$25,00", porcentagem ="15%")
Promocao.create(nome="Feijão carioca Carmil", descricao="R$ 3,00 /Uni", Promocao="R$6,39", porcentagem ="40%")
Promocao.create(nome="Chocolate Nestle Classic", descricao="R$ R$4,00 /Uni", Promocao="R$5,59", porcentagem ="25%")
Promocao.create(nome="combo caixas de chocolate", descricao="R$ 22,89/Uni", Promocao="R$25,00", porcentagem ="15%")
Promocao.create(nome="Chocolate Lacta diamante negro", descricao="R$ 3,00 /Uni", Promocao="R$6,39", porcentagem ="40%")
# Insere dados a 'bebidas'
Bebida.create(nome="Cabernet Sauvignon da marca Casillero del Diablo", descricao="R$ 32,90 /Uni")
Bebida.create(nome="San Pellegrino", descricao="R$ 15,85 /Uni")
Bebida.create(nome="coca-cola", descricao="R$12,11 /Uni")

# Inserir dados a 'higiene'
Higiene.create(nome="Crest shampoo", descricao="R$ 152,35 /Uni")
Higiene.create(nome="Nivea sabonete", descricao="R$ 4,29 /Uni")
Higiene.create(nome="Colgate luminosos white", descricao="R$ 28,80 /Uni")

# Inserir dados a 'frescos'
Fresco.create(nome="Morangos", descricao="R$ 26,67 q/KG")
Fresco.create(nome="Alface", descricao="R$ 3,00 /Uni")
Fresco.create(nome="Maça", descricao="R$ 6,39 /KG")

# Inserir dados a 'mercearia'
Mercearia.create(nome="Arroz Integral da marca Uncle Ben's", descricao="R$ 8,19 /Uni")
Mercearia.create(nome="Espaguete da marca Barilla", descricao="R$ 10,29 /Uni")
Mercearia.create(nome="Durar feijão", descricao="R$ 6,59 /Uni")

# Inserir dados a 'limpeza'
Limpeza.create(nome="Desinfetante Multiuso", descricao="R$ 5,75 /Uni")
Limpeza.create(nome="Papel Toalha", descricao="R$ 14,79 /Uni")
Limpeza.create(nome="Detergente Ype", descricao="R$ 12,99 pct com 3")

# Inserir dados a 'congelados'
Congelado.create(nome="Pizza portuguesa Seara", descricao="R$ 15,90 /Uni")
Congelado.create(nome="Peito de frango congelado", descricao="R$ 8,99 /Uni")
Congelado.create(nome="Ervilhas finas Daucy", descricao="R$ 17,89 /Uni")

#Inserir dados a 'saude'
Saude.create(nome="Curativo Adesivo Band-Aid", descricao="R$ 17,99 /Uni")
Saude.create(nome="Vitaminas Centrum", descricao="R$  219,99 /Uni")
Saude.create(nome="Vitaminas Nature Made", descricao="R$ 237,00 /Uni")

#Inserir dados a 'Animais'

Animais.create(nome="Areia para Gato Tidy", descricao="R$ 17,99 /Uni")
Animais.create(nome="Petiscos para Animais whiskas", descricao="R$ 74,90 pct com 6")
Animais.create(nome="kit higiene para cachorros", descricao="R$ 82,39 /Uni")

#inserir dados a 'padaria'

Padaria.create(nome="Pão de Forma Panrico", descricao="R$ 9,89 /Uni")
Padaria.create(nome="Biscoito Doce Amanteigado Coco Marilan pacote", descricao="R$ 4,89 /Uni")
Padaria.create(nome="torradas integrais Bauducco", descricao="R$ 7,25 /Uni")

#Inserir dados a 'organicos'

Organicos.create(nome="grão de Bico Kõrin", descricao="R$ 9,89 /Uni")
Organicos.create(nome="Capeletti de Frango", descricao="R$ 24,90 /Uni")
Organicos.create(nome="Café Torrado em grãos Organico Native", descricao="R$  39,50/ Uni")

#Inserir dados a 'organicos'

db.close()


    