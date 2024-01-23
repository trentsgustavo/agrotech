** MÓDULOS **

- Usuários
- Perfis
- Categorias
- Marcas
- Produtos
- Clientes
- Pedidos

** USUÁRIOS **

- [x] CRUD de usuários
- FIELDS: Usuário, senha, email, telefone
- Cada usuário fica vinculado a apenas um perfil

** PERFIS **

- FIELDS: Nome
- Tipos de perfil: Admin, Loja, Vendedor, Cliente
- Acessos por perfil:

* Admin: Tudo
* Loja: Categorias[CRUD], Produtos[CRUD], Clientes[CRUD], Pedidos[CRUD]
* Vendedor: Produtos[R], Clientes[CRU], Pedidos[CRUD]
* Cliente: Produtos[R], Pedidos[CR]

** CATEGORIAS **

- [x] CRUD de categorias de produtos
- FIELDS: Nome, medida(kg/lt/un)

** MARCAS **

- [x] CRUD de categorias de produtos
- FIELDS: Nome

** PRODUTOS **

- [x] CRUD de produtos
- FIELDS: Nome, marca, preço compra, preço venda, qtd estoque

** CLIENTES **

- [x] CRUD de clientes
- FIELDS: Nome, endereço, documento

** PEDIDOS **

- [] CRUD de pedidos
- FIELDS: clienteId, produtosId, total, qtds, pago, entregue, dt entrega
