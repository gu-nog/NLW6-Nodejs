# Informaões adicionais:

#### Request => entra
#### Response => sai
=====================
### Tipos de parâmetros:
- Routes parâmetros;
- Query parâmetros;
- Body parâmetros;
<br /><br />

### ORM:
Frameworks/bibliotecas que pegam nosso código e transforma numa linguagem para o banco de dados.
<br />=========================<br />
A entidade referencia para a ORM a tabela; e um repositório é o que pega a entidade e se comunica com o banco de dados.
<br /><br />

### OBS:
O SQLite não é recomendado para produção, por não ser tão robusto.
<br /><br />

### Migrations:
É uma espécie de histórico de mudanças no banco de dados.
<br />=========================<br />
No extends você usa os métodos como se fosse a classe original e no implements, você pode implementá-los como quiser.
<br /><br />

### Fluxo:
Server -> controller -> service(faz validações) -> repositório -> banco de dados;
<br /><br />
### Quando lançamos um erro:
Controller -> Service( throw new Error );
<br /><br />
### Middlewares:
São interceptadores que temos dentro duma requisição, que podem tanto inrrompê-la por completo, quanto adicionar alguma informação.
<br /><br />

## JWT(Json Web Token):
É um padrão de criação de token que podemos colocar algumas propriedades.
### É dividido em 3 partes(separadas por "."):
#### - Header: Algorítimo e tipo do token
#### - Payload: Os dados
#### - Verify Signature
<br /><br />
### OBS:
- Para passar o token para o server, usaremos a estratégia do bearer token, no insomnia.
- Handle e execute não são oficiais, ou seja, não estão na dicumentação.
- Você pode ter mais de uma rota com o mesmo nome, se elas forem de métodos diferentes, como post e get.