## Como executar

Para executar as aplicações seguir os procedimentos abaixo:
- SERVER;
- WEB;
- MOBILE.

-- Procedimento Iniciar backend --

- Acessar primeiro o diretório server com o comando
```bash
cd server
```
- Instalar as dependências do backend
```bash
npm install
```
- Iniciar o backend com o comando
```bash
npm run dev
```

Com o backend rodando você pode escolher entre a aplicação WEB ou MOBILE

-- Procedimento iniciar aplicação WEB --

- Acessar primeiro o diretório web com o comando
```bash
cd web
```
- Instalar as dependências da aplicação WEB
```bash
npm install
```
- Iniciar a aplicação web com o comando
```bash
npm run dev
```

-- Procedimento iniciar aplicação MOBILE --

- Acessar primeiro o diretório mobile com o comando
```bash
cd mobile
```
- Alterar os endereços de IP na pasta SCREENS nos componetes GAME e HOME. Insearir o IP da sua máquina Arquivos index.ts desses 2 componentes.

- Instalar as dependências da aplicação MOBILE
```bash
npm install
```
- Iniciar a aplicação web com o comando
```bash
expo start
```


A aplicação "server" se integra com a "web" e a "mobile", realizando o Back-end. Caso queira rodar as aplicações basta utilizar os seguintes comandos:


Rodando a aplicação web, primeiro iniciar o servidor e depois o próprio "web", ambos com o comando:
```bash
npm run dev
```
