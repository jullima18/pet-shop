docker pull mysql:8.0

Criar e executar o contêiner
Execute o seguinte comando:

docker run -d --name mysql_login_db -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=login -e MYSQL_USER=admin -e MYSQL_PASSWORD=1234 -v mysql_data:/var/lib/mysql -p 3306:3306 mysql:8.0
 DPS------------------------------

7 - Verificar se o contêiner está rodando 

docker ps 

dentro do vscode ou no cmd na pasta do projeto execute o comando

Inicializar o projeto Node (caso ainda não tenha criado o arquivo package.json nessa pasta): 
npm init -y

Instalar as dependências do backend: 
npm install express cors mysql2

Iniciar o servidor: 
node server.js
Isso criará a pasta node_modules necessária e iniciará a API sem erros. 

OPCIONAL -----comandos para o dia a dia
docker compose stop (para o contêiner sem apagar os dados)
docker compose start (inicia novamente o contêiner)

docker compose down -v (Destruir o contêiner e resetar o banco de dados do zero)







 



ADICIONAR ESSE CODIGO NO DBEAVER (DA ENTER PRIMEIRO NA TABLE E DPS NO SELECT)

CREATE TABLE IF NOT EXISTS pets(
id INT AUTO_INCREMENT PRIMARY KEY,
tutor VARCHAR(100) NOT NULL,
nome_pet VARCHAR(100) NOT NULL,
raca VARCHAR(50) NOT NULL,
genero ENUM ('macho','fêmea') NOT NULL,
peso DECIMAL(5,2) NOT NULL,
idade INT NOT NULL,
imagem_url VARCHAR(255) NOT NULL,
criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM pets;
