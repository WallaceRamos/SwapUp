# 📱  Aplicativo SwapUp



![web-mobile](https://repository-images.githubusercontent.com/288202325/4a016180-e088-11ea-9b9a-b822fabec3e8)


Este projeto foi iniciado com o aplicativo Expo  que é uma estrutura e uma plataforma para aplicações universais do React. É um conjunto de ferramentas e serviços criados em torno do React Native e plataformas nativas que ajudam a desenvolver, criar, implantar e iterar rapidamente em iOS, Android e aplicativos da Web a partir da mesma base de código JavaScript / TypeScript. .

> Acesse  [Expo](https://docs.expo.io/) para saber mais.

## 🤔  O que é?

Um aplicativo em que os usuários cadastrados podem publicar e solicitar serviços através de um formulário podendo adicionar uma imagem a publicação. Em que após a solicitação o proprietário da postagem receberá uma notificação em que pode confirmar ou negar a solicitação. Quando a solicitação for confirmada o usuário após finalização do serviço poderá indicar que foi finalizado através de um click.

## 👨‍💻  Instalação
  
Para instalar as dependências e executar o **Backend** (modo desenvolvimento), clone o projeto em seu computador  em seguida execute:
```bash
cd backend
yarn install
yarn dev
```
Para instalar o **Banco de Dados**, faça uma conta no [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&gclid=CjwKCAjw1ej5BRBhEiwAfHyh1GLXeEjEp9D5zfujzlOBAwOJehRLXqqQhIX0s_g8cCoEmOPqtjCgHBoCyaoQAvD_BwE) crie um novo Cluster e copie o link do banco de dados em (backend/src/server) onde indicado.

Para instalar as dependências e executar o **Mobile** (modo desenvolvimento) do React-Native, clone o projeto em seu computador e em seguida execute:
```bash
cd mobile
yarn install
yarn start
```


## ☕  Scripts disponiveis

No diretório do projeto **Mobile** , você pode executar:

```bash
yarn start
```
Executa o aplicativo no modo de desenvolvimento.
Após o carregamento abrira uma pagina com um QR code, escaneie o QR code com o aplicativo da EXPO e o aplicativo será carregado.
> Acesse  [Expo/Modo de Desenvolvimento e Produção](https://docs.expo.io/workflow/development-mode/) para saber mais.

```bash
yarn build
```
Compila o aplicativo para ser implantado nas lojas de aplicativos ou para Android, você pode optar por criar um arquivo APK.

> Acesse  [Expo/Criando aplicativos independentes](https://docs.expo.io/distribution/building-standalone-apps/) para saber mais.


## 📝 Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE) para obter mais informações.
 
--- 

