# Netflix クローン

[Zenn](https://zenn.dev/) で公開されている [【React+TypeScript】Netflixのクローンを作るチュートリアル](https://zenn.dev/gunners6518/books/4c4672f32dd100) の書籍の写経用リポジトリです。  
一部、書籍のままでは動作しなかったので改修＆リファクタしてあります。

![sample](https://raw.githubusercontent.com/dodonki1223/image_garage/master/clone_netflix/sample.gif)

## ⭐️環境

| 環境    | バージョン |
|:--------|:----------:|
| Node.js | 16.0.0     |
| React   | 17以上     |

## 💻 開発

Netflix クローンの動かし方など説明します。

### 🔧The Movie Database から API key を取得する

こちらに関しては [APIKeyの取得しpostmanからAPIを送る｜【React+TypeScript】Netflixのクローンを作るチュートリアル](https://zenn.dev/gunners6518/books/4c4672f32dd100/viewer/454bcb) を参考に取得してください。  
API key を取得後、`./src/request.js` の `export const API_KEY = "";` の箇所に API key をセットしてください。

```js
export const API_KEY = "取得した API Key";
```

### 💥Netflix クローンを起動する

ローカルで動かすための手順を記載します。

#### 依存関係のインストール

```shell
$ yarn install 
```

#### 起動させる

下記コマンドの実行後、http://localhost:3000 にアクセスしてください。

```shell
$ yarn start
```

## 🗯その他

取得している画像のクリック後に表示されるトレーラー動画が画像と紐付いていないバグがあります。  
ただ、取得するための API は間違っていなさそうな気がします……。ちゃんと確認する必要あるかもです🤔
