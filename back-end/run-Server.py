from flask import *
from esquema import *
from playhouse.shortcuts import model_to_dict
from produto import *
from esquema import Enderecos
from flask_cors import CORS
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from peewee import IntegrityError
from produto import Promocao 




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
        senha = data['senha']
       
        print(nome,email,cpf,telefone,senha)

        user= Usuarios(
            nome = nome,
            email = email,
            cpf = cpf,
            telefone = telefone,
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
        categoria_id = data['categoria']
        quantidade = data['quantidade']

        produto = Produtos(
            nome_produto = nome_produto,
            valor = valor,
            categoria = Categorias.select().where(Categorias.nome == categoria_id).get(),
            quantidade = quantidade
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
    


@app.route('/add/category', methods=['POST'])
def addCategory():
    try:
        data = request.get_json()
        descricao= data['descricao']

        categoria = Categorias(
            decricao = descricao
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


@app.route('/api/buscar_higiene', methods=['GET'])
def buscar_Higine():
    try:
        # Exemplo de busca de todas as promoções
        Higienes = Higiene.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        Higiene_dict = [model_to_dict(Higiene) for Higiene in Higienes]

        return jsonify(Higiene_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}



@app.route('/api/buscar_frescos', methods=['GET'])
def buscar_Frescos():
    try:
        # Exemplo de busca de todas as promoções
        Frescos = Fresco.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        Fresco_dict = [model_to_dict(Fresco) for Fresco in Frescos]

        return jsonify(Fresco_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}


@app.route('/api/buscar_congelados', methods=['GET'])
def buscar_Congelado():
    try:
        # Exemplo de busca de todas as promoções
        congelado = Congelado.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        Congelado_dict = [model_to_dict(Congelado) for Congelado in congelado]

        return jsonify(Congelado_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}


@app.route('/api/buscar_bebidas', methods=['GET'])
def buscar_bebidas():
    try:
        # Exemplo de busca de todas as promoções
        bebidas = Bebida.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        Bebidas_dict = [model_to_dict(Bebida) for Bebida in bebidas]

        return jsonify(Bebidas_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}

@app.route('/api/buscar_animais', methods=['GET'])
def buscar_animais():
    try:
        # Exemplo de busca de todas as promoções
        animais= Animais.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        animais_dict = [model_to_dict(Animais) for Animais in animais]

        return jsonify(animais_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}




@app.route('/api/buscar_limpeza', methods=['GET'])
def buscar_limpeza():
    try:
        limpeza = Limpeza.select()
        limpeza_dict = [model_to_dict(limpeza_item) for limpeza_item in limpeza]
        return jsonify(limpeza_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 500
    


@app.route('/api/buscar_mercearia', methods=['GET'])
def buscar_mercearia():
    try:
        mercearia = Mercearia.select()
        mercearia_dict = [model_to_dict(mercearia_item) for mercearia_item in mercearia]
        return jsonify(mercearia_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 500
    

@app.route('/api/buscar_organicos', methods=['GET'])
def buscar_organicos():
    try:
        organicos = Organicos.select()
        organicos_dict = [model_to_dict(organicos_item) for organicos_item in Organicos]
        return jsonify(organicos_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 500
    

    
@app.route('/api/buscar_padaria', methods=['GET'])
def buscar_padaria():
    try:
        padaria = Padaria.select()
        Padaria_dict = [model_to_dict(padaria_item) for padaria_item in Padaria]
        return jsonify(Padaria_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 500
    

@app.route('/api/buscar_saude', methods=['GET'])
def buscar_saude():
    try:
        saude = Saude.select()
        saude_dict = [model_to_dict(saude_item) for saude_item in Saude]
        return jsonify(saude_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 500



    
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

@app.route('/api/fotos/<categoria>', methods=['GET'])
def obter_links_categoria_rota(categoria):
    categorias = {
        'Promocoes': ["https://i.ibb.co/wBqCNmb/produto1arroz.jpg", "https://i.ibb.co/d4NL4G1/combo.jpg", "https://i.ibb.co/f2Vx6by/pacote-de-feij-o.jpg", "https://i.ibb.co/hmcjrCx/chocolatr.jpg", "https://i.ibb.co/d4NL4G1/combo.jpg", "https://i.ibb.co/7KXVdzy/chocolate.jpg"],
        'Animais': ["https://ibb.co/bbBkXw9", "https://ibb.co/jfhMvPy", "https://i.ibb.co/NLtRPrW/vinho-cabernet-sauvignon-casillero-del-diablo-750ml-28fa1dc6-cde1-41e9-a116-99a239427963.jpg"],
        'Higiene': ["https://i.ibb.co/TmBzgv6/crest-shampoo.jpg", "https://i.ibb.co/WcWXH6p/nivea-sabonete.jpg", "https://i.ibb.co/y0zH9Ws/image.png"],
        'Frescos': ["https://i.ibb.co/pnMngWQ/image.png", "https://i.ibb.co/gtMWYqC/alface.jpg", "https://i.ibb.co/ccmzhRK/image.png"],
        'Bebida' : ["https://i.ibb.co/NLtRPrW/vinho-cabernet-sauvignon-casillero-del-diablo-750ml-28fa1dc6-cde1-41e9-a116-99a239427963.jpg", "https://i.ibb.co/dMB20wP/garrafa.jpg", "https://i.ibb.co/LJB0wGZ/image.png"],
       'Mercearia':["https://i.ibb.co/cc5QYRc/uncle-bens-arroz.jpg", "https://i.ibb.co/PwTGThW/barilaa-marracarr-o.jpg", "https://i.ibb.co/9GvnfyS/durar-feij-o.jpg"],
       'Limpeza': ["https://i.ibb.co/71rrP4N/image.png", "https://i.ibb.co/WGfVkY8/papel-toalha.jpg", "https://i.ibb.co/9ZwgXnr/detergente-ype.jpg"],
       'Congelado' : ["https://i.ibb.co/nDHt53T/pizza-portuguesa-seara.jpg", "https://i.ibb.co/Kj8RBKz/file-de-frango.jpg", "https://i.ibb.co/8c9hyc9/ervilhas-daucy-ervilhas-finas.jpg"],
        'Saude' : ["https://i.ibb.co/c3vbN6V/band-aid.jpg", "https://i.ibb.co/dm3rgv1/centrum.jpg", "https://i.ibb.co/N3fdZct/Nature-Made.jpg"],
        'Animais':["https://i.ibb.co/b3dTFg3/image.png", "https://i.ibb.co/sgZbZXR/image.png", "https://i.ibb.co/HLvRmMq/image.png"],
        'Padaria': ["https://i.ibb.co/ZXZFBcf/image.png","https://i.ibb.co/XLwStzZ/image.png", "https://i.ibb.co/mbR4Jgk/image.png"],
        'Organicos': ["https://i.ibb.co/s2C3VX9/image.png", "https://i.ibb.co/YXV7n1J/image.png", "https://i.ibb.co/VtPRL8v/image.png"],
        # Adicione mais categorias conforme necessário
    }

    if categoria in categorias:
        links_categoria = categorias[categoria]
        return jsonify(links_categoria)
    else:
        return jsonify({"error": "Categoria não encontrada"}), 404
  
@app.route('/')
def index():
    return 'ok'

if __name__ == '__main__':
    db.connect()
    db.create_tables([Usuarios], safe=True)
    app.run(debug=True)
