from flask import *
from esquema import *
from playhouse.shortcuts import model_to_dict
from produto import *
from esquema import Enderecos
from flask_cors import CORS
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from peewee import IntegrityError



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
            categoria = Categoria.select().where(Categoria.nome == categoria_id).get(),
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

        categoria = Categoria(
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
CORS(app, resources={r"/api/login": {"origins": "http://localhost:5173/Login", "supports_credentials": True}})

@app.route('/api/login', methods=['POST'])
def login():
   
    try:
        data = request.get_json()
        username = data.get('email')  # Evitar KeyError usando get()
        password = data.get('password')

        if not username or not password:
            raise ValueError("Credenciais incompletas")

        query = Usuarios.select().where(Usuarios.email == username, Usuarios.senha == password)

        # Tratar caso o usuário não seja encontrado
        user = query.first()
        if user is None:
            raise ValueError("Usuário não encontrado")

        response = {
            "message": "Login bem-sucedido",
            "user_id": user.id,
            "username": user.nome,
        }

        return jsonify(response), 200

    except ValueError as ve:
        error_message = {"error": str(ve)}
        return jsonify(error_message), 401

    except Exception as e:
        error_message = {"error": str(e)}
        print(f"Erro interno no servidor: {str(e)}")
        return jsonify(error_message), 500
    

@app.route('/api/buscar_produtos', methods=['GET'])
def buscar_produtos():
    try:
        # Exemplo de busca de todos os produtos
        produtos = Produtos.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        produtos_dict = [model_to_dict(produto) for produto in produtos]

           
           
        return jsonify(produtos_dict), 200

    except Exception as e:
            error_message = {"error": str(e)}
            return jsonify(error_message), 500
    

@app.route('/api/buscar_promocoes', methods=['GET'])
def buscar_promocoes():
    try:
        # Exemplo de busca de todas as promoções
        promocoes = Promocao.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        promocoes_dict = [model_to_dict(promocao) for promocao in promocoes]

        return jsonify(promocoes_dict), 200

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


app.secret_key = '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'  # Substitua com uma chave secreta segura
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
def buscar_higiene():
    try:
        # Exemplo de busca de todas as promoções
        higienes = Higiene.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        Higiene_dict = [model_to_dict(Higiene) for Higiene in higienes]

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
def buscar_Congelados():
    try:
        # Exemplo de busca de todas as promoções
        congelados= Congelado.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        Congelados_dict = [model_to_dict(Congelado) for Congelado in congelados]

        return jsonify(Congelados_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}

@app.route('/api/buscar_animais', methods=['GET'])
def buscar_animais():
    try:
        # Exemplo de busca de todas as promoções
        Animais= Animais.select()

        # Converta os objetos do modelo para dicionários para resposta JSON
        animais_dict = [model_to_dict(Animais) for Animais in Animais]

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
        saude = saude.select()
        saude_dict = [model_to_dict(saude_item) for saude_item in saude]
        return jsonify(saude_dict), 200

    except Exception as e:
        error_message = {"error": str(e)}
        return jsonify(error_message), 500


flow = InstalledAppFlow.from_client_config(
    client_config,
    scopes=['https://www.googleapis.com/auth/drive.readonly'],
)

@app.route('/google-api')
def google_api():
    authorization_url, state = flow.authorization_url(prompt='consent')
    session['state'] = state
    return redirect(authorization_url)

@app.route('/callback')
def callback():
    flow.fetch_token(authorization_response=request.url)
    credentials = flow.credentials
    # Use credentials para acessar a API do Google Drive
    drive_service = build('drive', 'v3', credentials=credentials)

    # Identificador da pasta desejada
    folder_id = '1puuqBDgLMEfzrGpLEDpLlYvl9lGrPuq7'

    # Exemplo: listando arquivos dentro da pasta desejada
    results = drive_service.files().list(q=f"'{folder_id}' in parents",
                                          spaces='drive',
                                          fields='files(id, name)').execute()
    files = results.get('files', [])

    if not files:
        print('Nenhum arquivo encontrado na pasta do Google Drive')
        return 'Nenhum arquivo encontrado na pasta do Google Drive'
    else:
        # Você pode retornar as informações dos arquivos ou os URLs de download, por exemplo
        return jsonify({'files': files})
    

@app.route('/api/buscar_produto', methods=['GET'])
def buscar_produto():
    try:
        nome = request.args.get('nome')
        categoria = request.args.get('categoria')
        preco = request.args.get('preco')

        # Construir a query inicial
        query = Produtos.select().join(Categoria)

        # Aplicar filtros conforme necessário
        if nome:
            query = query.where(Produtos.nome_produto.contains(nome))
        if categoria:
            query = query.where(Categoria.descricao == categoria)
        if preco:
            query = query.where(Produtos.valor == preco)

        # Executar a query
        produtos = query.dicts()

        return jsonify(produtos), 200

    except Exception as e:
        print(f"Erro na busca de produtos: {e}")
        error_message = {"error": str(e)}
        return jsonify(error_message), 500

  
@app.route('/')
def index():
    return 'ok'

if __name__ == '__main__':
    db.connect()
    db.create_tables([Usuarios], safe=True)
    app.run(debug=True)
