from flask import *
from esquema import *
from playhouse.shortcuts import model_to_dict
from flask_cors import CORS
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from peewee import IntegrityError
from Gerar_qrcode import *
from Gerar_qrTransfer import *
from os import path




app = Flask(__name__)

CORS(app, resources={r"/add/*": {"origins": "*", "supports_credentials": True}})
CORS(app, resources={r"/api/*": {"origins": "*", "supports_credentials": True}})
CORS(app, supports_credentials=True)

app.config['JSON_SORT_KEYS'] = False





#pegar dados da url
#@cross_origin
@app.route('/add/user', methods=['POST'])
def addUser():
  if request.method == 'POST':
    try:
        data = request.get_json()  # Receba o JSON da requisição
        nome = data['nome']
        email = data['email']
        cpf = data['cpf']
        telefone = data['telefone']
        confirme =data['confirme']
        senha = data['senha']
       
        print(nome,email,cpf,telefone,senha)

        user= Usuarios(
            nome = nome,
            email = email,
            cpf = cpf,
            telefone = telefone,
            confirme = confirme,
            senha=senha,
          
        )   
        user.save()
        print("enderenço user salvo com sucesso")

        response = {
            "message": "Dados JSON recebidos e processados com sucesso",
            "dados enviados": data
        }

        return jsonify({'message': 'Usuário adicionado com sucesso'})
         

    except Exception as e:
        error_message = {"error": str(e)}
        print("Erro:", e)
        return jsonify(error_message), 400

    except Exception as e:
        error_message = {"error": str(e)}
        print("Erro:", e)
        return jsonify(error_message), 400



@app.route('/add/address', methods=['POST'])
def addAddress():
    try:
        data = request.get_json()

        required_fields = ['rua', 'bairro', 'numero', 'cep', 'complemento']
        if not all(key in data for key in required_fields):
            return jsonify({"error": "Dados incompletos ou inválidos"}), 400

        app.logger.info("Dados recebidos na solicitação: %s", data)

        rua = data['rua']
        bairro = data['bairro']
        numero = data['numero']
        cep = data['cep']
        complemento = data['complemento']
        usuario = data['usuario_nome']

        endereco = Enderecos(
            rua=rua,
            bairro=bairro,
            numero=numero,
            cep=cep,
            complemento=complemento,
            usuario = Usuarios.select().where(Usuarios.nome == usuario).get() 
        )

        endereco.save()  # Salve o endereço

        app.logger.info("Endereço salvo com sucesso")

        response = {
            "message": "Dados JSON recebidos e processados com sucesso",
            "dados enviados": data
        }

        return jsonify(response), 200

    except IntegrityError as e:
        app.logger.error("Erro de integridade ao salvar endereço: %s", str(e))
        error_message = {"error": "Erro de integridade ao salvar endereço"}
        return jsonify(error_message), 400

    except Exception as e:
        app.logger.error("Erro ao processar solicitação: %s", str(e))
        error_message = {"error": str(e)}
        return jsonify(error_message), 500
    

############################################

@app.route('/api/buscar_promocoes', methods=['GET'])
def buscar_promocoes():
    try:
     
        # Exemplo de busca de todas as promoções
        promocoes = Promocao.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        promocoes_dict = [model_to_dict(promocao) for promocao in promocoes]

        return jsonify(promocoes_dict), 200

   

    except Exception as e:
        # Outras exceções
        error_message = {"error": str(e)}
        return jsonify(error_message), 500

    ###############################################################3

@app.route('/add/products', methods=['POST'])
def addProducts():
    try:
        data = request.get_json()
        nome_produto = data['nome_produto']
        valor = data['valor']
        categoria_id = data['categoria'] # nome da categoria
        quantidade = data['quantidade']
        referente = data['promocao_nome']
        url = data['url_imagem']

        produto = Produtos(
            nome_produto = nome_produto,
            valor = valor,
            quantidade = quantidade,
            categoria = Categorias.select().where(Categorias.descricao == categoria_id).get(), # nome da categoria
            promocao = Promocao.select().where(Promocao.produto_referente == referente).get(),
            urlImagem = url
        )
        produto.save()

        response = {
            "message": "Dados JSON recebidos e processados com sucesso",
            "dados enviados": data
        }

        return jsonify(response), 200

    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 400
    

@app.route('/api/carrinho/<usuario_email>', methods=['GET'])
def ver_carrinho(usuario_email):
    try:
        query = Usuarios.select().where(Usuarios.email == usuario_email)

        car = Carrinho.select().where(Carrinho.usuario == query.get().id)

        
        if not car: # usuario nao tem carrinho
            carrinho = Carrinho(
                usuario = Usuarios.select().where(Usuarios.email == usuario_email).get()
            )   
            carrinho.save()

            response = {
                "message": "Nao Ha Itens no seu Carrinho"
            }

           
            return jsonify(response), 200

        else:
            query_itens = ItensCarrinho.select().where(ItensCarrinho.carrinho == car)
            print(len(query_itens))

            itens_dict = [model_to_dict(produto_item) for produto_item in query_itens]

            return jsonify(itens_dict), 200


    except Exception as e:
       return jsonify({'erro': str(e)}), 500
    

@app.route('/add/promocao', methods=['Post'])
def add_promocao():
    try:
        data = request.get_json()
    
        preco_atual = data['preco_atual']
        referente_nome = data['referente_produto']
        preco_antigo = data['preco_antigo']
        urlImagem =data['urlImagem']

        if not preco_atual:
            raise ValueError("Credenciais incompletas")


        promocao = Promocao(
            produto_referente =referente_nome,
            Preco_Antigo = preco_antigo,
            Preco_Atual = preco_atual,
            urlImagem = urlImagem

        )
        promocao.save()

        response = {
            "message": "promocao criada",
            "dados enviados": data
        }



        return jsonify(response), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500

@app.route('/add/category', methods=['POST'])
def addCategory():
    try:
        data = request.get_json()
        descricao= data['descricao']

        categoria = Categorias(
            descricao = descricao
        )   
        categoria.save()

        response = {
            "message": "Dados JSON recebidos e processados com sucesso",
            "dados enviados": data
        }

        return jsonify(response), 200

    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 400

#################################################
@app.route('/api/login' )
def login(): 
    try:
     
     email = request.args.get('email')
     senha = request.args.get('senha')
     print(email, senha)
    

     if not email or not senha:
        raise ValueError("Credenciais incompletas")

     query = Usuarios.select().where(Usuarios.email == email, Usuarios.senha == senha)
     user = query.first()

     response = {
            "message": "Login bem-sucedido",
            "user_id": user.id,
            "username": user.nome,
            "telefone" : user.telefone,
            "cpf" : user.cpf
        }
    

     if senha == user.senha and email == user.email:
            return jsonify(response), 200

     else:
            raise ValueError("Usuário não encontrado")


    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 500

#google criar conta 

app.secret_key = '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'
CLIENT_ID = '634127394492-i8gn4lsl40g2lrccs02kme9r5puhb0ti.apps.googleusercontent.com'
CLIENT_SECRET = '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'
REDIRECT_URI = ["http://localhost:5173", "http://127.0.0.1:5000"]

client_config = {
    "web": {
        "client_id": CLIENT_ID,
        "project_id": "mercadinho-app-405017",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": CLIENT_SECRET,
        "redirect_uris": REDIRECT_URI
    }
}


#fazer uma busca com filtro no home

@app.route('/api/buscar_produto', methods=['GET'])
def buscar_produto():
    try:
        nome = request.args.get('nome')

        # Construir a query inicial
        query = Promocao.select()

        # Aplicar filtro pelo nome
        if nome:
            query = query.where(Promocao.nome.contains(nome))
            
        
        # Executar a query e converter para lista de dicionários
        promocoes = [model_to_dict(promocao) for promocao in query.execute()]

        return jsonify(promocoes), 200

    except Exception as e:
        print(f"Erro na busca de promoções: {e}")
        error_message = {"error": str(e)}
        return jsonify(error_message), 500

#vrificar se o usuario tem o endereço:

@app.route('/api/verificar-endereco/<int:user_id>', methods=['GET'])
def verificar_endereco_completo(user_id):
    usuario = Usuarios.query.get(user_id)

    if usuario:
        if usuario.endereco:
            return jsonify({'enderecoCompleto': True, 'endereco': Usuarios.endereco})
        else:
            return jsonify({'enderecoCompleto': False, 'mensagem': 'Endereço incompleto'})
    else:
        return jsonify({'erro': 'Usuário não encontrado'}), 404
    

##########################################################
#rota para verifcar os src das imagens 


### Rotas de Produtos filtrando as categorias

@app.route('/api/Higiene/produtos', methods=['GET'])
def produto_higiene():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Higiene')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/Animais/produtos', methods=['GET'])
def produto_animais():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Animais')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/Frescos/produtos', methods=['GET'])
def produto_frescos():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Frescos')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/Bebida/produtos', methods=['GET'])
def produto_bebidas():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Bebida')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500

@app.route('/api/Mercearia/produtos', methods=['GET'])
def produto_mercearia():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Mercearia')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/Limpeza/produtos', methods=['GET'])
def produto_limpeza():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Limpeza')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/Congelados/produtos', methods=['GET'])
def produto_congelado():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Congelados')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/Saude/produtos', methods=['GET'])
def produto_saude():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Saude')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/Padaria/produtos', methods=['GET'])
def produto_padaria():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Padaria')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/Organicos/produtos', methods=['GET'])
def produto_organicos():
    try:
        # Exemplo de busca de todos os produtos
        subconsulta = Categorias.select(Categorias.id).where(Categorias.descricao == 'Organicos')

        produtos = Produtos.select().where(Produtos.categoria == subconsulta)

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500

#########################################################################
 #fazer o qrcode 
cors = CORS(app, resources={r"/api/get_qr_code": {"origins": "http://localhost:5173"}}, supports_credentials=True)

def generate_qr_code():
    data = "Pago com sucesso! kkkkkkk"
    img = qrcode.make(data)
    img.save("Qrcode.png")

@app.route('/api/get_qr_code', methods=['GET'])
def get_qr_code():
    return send_file('Qrcode.jpg', mimetype='image/jpg')
  
#################################################################
cors = CORS(app, resources={r"/api/get_qr_Transfer": {"origins": "http://localhost:5173"}}, supports_credentials=True)

def generate_qr_Transfer():
    data = "Transferencia feita com sucesso!"
    img = qrcode.make(data)
    img.save("QrTransfer.jpg")

@app.route('/api/get_qr_Transfer', methods=['GET'])
def get_qr_codee():
    return send_file('QrTransfer.jpg', mimetype='image/jpg')

#adicionar ao carrinho 
@app.route('/api/carrinhoitens', methods=['POST'])
def criar_carrinho():
    try:
        data = request.get_json()
        username = data.get('username')
        nome_produto = data.get('produto')
        valor = data.get('valor')
        quantidade = data.get('quantidade')

        if not username:
            raise ValueError("Credenciais incompletas")
        
        
        query = Usuarios.select().where(Usuarios.nome == username) # busca usuario

        car = Carrinho.select().where(Carrinho.usuario == query.get().id) # busca se existe carrinho do usuario


        if not query:
            raise ValueError("Usuario nao existe")


        if not car: # usuario nao tem carrinho
            carrinho = Carrinho(
                usuario = Usuarios.select().where(Usuarios.nome == username).get()
            )   
            carrinho.save()

            itens = ItensCarrinho(
                carrinho = carrinho.get().id,
                produto = Produtos.select().where(Produtos.nome_produto == nome_produto).get(),
                quantidade = quantidade,
                valor = valor
            )
            itens.save()

            response = {
                "message": "Carrinho criado",
                "carrinho_id": carrinho.get().id
            }

           
            return jsonify(response), 200

        else:
            query_car = Carrinho.select().where(Carrinho.usuario == query.get().id).get()
            print(query_car.id)

        
            itens = ItensCarrinho(
                carrinho = query_car.id,
                produto = Produtos.select().where(Produtos.nome_produto == nome_produto).get(),
                quantidade = quantidade,
                valor = valor
            )
            itens.save()


            response_itens = {
                "message": "Item adicionado com sucesso",
                "carrinho_id": query_car.id
            }

           
            return jsonify(response_itens), 200


    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    
    #verificar no carrinho as compras
  


# registrar compra
@app.route('/add/compra', methods=['POST'])
def add_compra():
    try:
        data = request.get_json()
        usuario_email = data['email']
        carrinho_id = data['carrinho_id']
        #query = Usuarios.select().where(Usuarios.email == usuario_email)

        compra = Compra(
            usuario = Usuarios.select().where(Usuarios.email == usuario_email).get()
        )
        compra.save()

        query_itens = ItensCarrinho.select().where(ItensCarrinho.carrinho == carrinho_id)
        print(query_itens)

        itens_dict = [model_to_dict(produto_item) for produto_item in query_itens]


        for item in itens_dict:
            nome_produto = item.get('produto', {}).get('nome_produto')
            valor = item.get('valor')

            print(f'Nome do Produto: {nome_produto}, Valor: {valor}')

            itens_compra = itensCompra(
                venda = compra.get().id,
                produto = item.get('produto', {}).get('id'),
                quantidade = item.get('quantidade'),
                valorUnitario = valor
            )
            itens_compra.save()

            response = {
                "message":"Compra realizada"
            }


        return jsonify(response), 200


    except Exception as e:
        return jsonify({'erro': str(e)}), 500


@app.route('/')
def index():
    return 'ok'

if __name__ == '__main__':
    db.connect()
    db.create_tables([Usuarios], safe=True)
    app.run(debug=True)
