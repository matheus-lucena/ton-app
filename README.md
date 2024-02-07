# Aplicativo
Aplicativo com objetivo de se intetegrar ao backend, proporcionando uma usabilidade aos clientes.
Utilizado a versão 20.0 do nodejs.

## Iniciando projeto
O projeto foi criado em react-native, utilizando o minímo de depêndencias externas possíveis.

```bash
# instalando pacotes
npm install

# executando aplicativo
npm run android
```

### Informações úteis
O projeto utiliza as bibliotecas do redux, que facilitam a manipulação das informações, deixando a arquitetura do projeto muito mais limpa.

Como boa prática e manutenção do produto foram criados componentes que possam ser reutilizados, como exemplo: Cabeçalho das páginas, Botões e Formulário (textbox).

## Configurações do projeto
- Utilização de reducers combinados, para facilitar a gestão de estados
- Redux persistente
- Arquivo de constantes, para definição de endpoints, cores do projeto, mensagens e strings (como exemplo constantes para navegação entre telas)

## Funcionalidades
- Listagem de produtos (maquininhas)
- Adição/Remoção de máquininhas da lista de compras
- Compra no backend dos produtos
- Listagem de compras
- Login na aplicação
- Logout em caso de usuário não autenticado


## Melhorias mapeadas
- Criação de tela de registro (já existe o backend)
- Criar tela de gestão de perfil do usuário
- Logout (já criada chamada no redux)
- Criação de testes


## Aplicativo


![Carrinho](/images/cart.png)

![Lista](/images/purched.png)