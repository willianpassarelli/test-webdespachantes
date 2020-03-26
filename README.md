<h1 align="center">
  <img title="Print" src="https://user-images.githubusercontent.com/26445991/77691964-8cfd5400-6f84-11ea-91e9-23be4403da0f.png" width="400px" />
  <img title="Print" src="https://user-images.githubusercontent.com/26445991/77691969-8f5fae00-6f84-11ea-9cd5-358e6330dc6d.png" width="400px" />
  <img title="Print" src="https://user-images.githubusercontent.com/26445991/77691972-9090db00-6f84-11ea-8fc0-88c4b999f197.png" width="400px" />
</h1>

Verifiquei que o json que seria consumido não possuia algumas informações então tive que mockar para exibir em tela.

Abaixo segue o único renavam que possuia no json.
Renavam: 00000000027

Para execução deste projeto, rode os seguintes comandos para execução:

```
yarn install
```

```
cd ios && pod install
```

```
react-native run-ios
```

Como desenvolvi o projeto totalmente rodando em IOS se caso for executar em Android terá que fazer alguns ajustes como configuração de libs utilizadas, caso contrário está tudo de acordo para rodar em Iphone.

Para debug da aplicação foi utilizado o Reactotron a configuração do mesmo se encontra na pasta src/config/ReactotronConfig.js