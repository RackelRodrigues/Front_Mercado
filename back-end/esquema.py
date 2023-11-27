from peewee import *



db = PostgresqlDatabase('mercadinho_online',port=5432,user='postgres',password='875838')


class BaseModel(Model):
    class Meta:
        database = db


class Usuarios(BaseModel):
    nome = TextField()
    email = TextField(unique=True, null=False)
    cpf = TextField(unique=True, null=False)
    telefone = TextField(null=False)
    confirme = TextField(null=False)
    senha = TextField(null=False)
    criadoEm = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')])


class Enderecos(BaseModel):
    rua = TextField(null=False)
    bairro = TextField(null=False)
    numero = IntegerField(unique=True, null=False)
    cep = TextField(null=False)
    complemento = TextField(null=False)
    usuario = ForeignKeyField(Usuarios, backref='enderecos', on_delete='CASCADE')
    criadoEm = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')])


class Categorias(BaseModel):
    descricao = TextField(unique=True, null=False)
    criadoEm = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')])


class Promocao(BaseModel):
    produto_referente = TextField(null=False)
    Preco_Antigo = DecimalField(max_digits=10, decimal_places=2,null=True)
    Preco_Atual = DecimalField(max_digits=10, decimal_places=2,null=False)
    urlImagem = TextField()


class Produtos(BaseModel):
    nome_produto = TextField(null=False)
    valor = DecimalField(max_digits=10, decimal_places=2,null=False)
    quantidade = IntegerField(null=False)
    categoria = ForeignKeyField(Categorias, backref='produtos', on_delete='SET NULL')
    promocao = ForeignKeyField(Promocao, backref='produtos', on_delete='CASCADE',null=True)
    urlImagem = TextField()
    criadoEm = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')])


class Compra(BaseModel):
    usuario = ForeignKeyField(Usuarios, backref='compra', on_delete='SET NULL')
    dataCompra = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')])


class itensCompra(BaseModel):
    venda = IntegerField()
    produto = IntegerField()
    quantidade = IntegerField(null=False)
    valorUnitario = DecimalField(max_digits=10, decimal_places=2,null=False)
    criadoEm = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')])


class Carrinho(BaseModel):
    usuario = ForeignKeyField(Usuarios, backref='carrinho', on_delete='SET NULL')
    criadoEm = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')])


class ItensCarrinho(BaseModel):
    carrinho = IntegerField(null=False)
    produto = ForeignKeyField(Produtos, backref='itenscarrinho', on_delete='SET NULL')
    quantidade = IntegerField()
    valor = DecimalField(max_digits=10, decimal_places=2)
    criadoEm = DateTimeField(constraints=[SQL('DEFAULT CURRENT_TIMESTAMP')])




db.connect()
db.create_tables([Usuarios,Produtos,Enderecos,Categorias, Compra, itensCompra, Carrinho, ItensCarrinho,Promocao])
db.close()