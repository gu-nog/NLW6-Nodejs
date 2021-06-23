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