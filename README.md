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

## 📖 書籍の chapter ごとのコミット

chapter ごとのコミット履歴です。

### [📕 Chapter 03 - Reactの環境構築とAPI取得の下準備](https://zenn.dev/gunners6518/books/4c4672f32dd100/viewer/ae4010)

- [Initialize project using Create React App](https://github.com/dodonki1223/clone-netflix/commit/61353cc0b9886c7d357b5e259d5e2231fc33cd3a)
- [first commit](https://github.com/dodonki1223/clone-netflix/commit/8c956c41417ece4b424ca5a69d0d07e914e5c09b)
- [🔥 今回必要ないファイルの削除 ](https://github.com/dodonki1223/clone-netflix/commit/2c2b819d128c14eb38a123dcb1936c5bef3b8f98)
- [✨ axios のインストール、TMDBからデータを取得するための準備](https://github.com/dodonki1223/clone-netflix/commit/fbe4058632398b4abbab4bca28e91eafe1f387bd)
- [✨ request.jsの作成](https://github.com/dodonki1223/clone-netflix/commit/6b4496ec72e008506c10b1db0b40e0612547fec8)

### [📕 Chapter 04 - Rowコンポーネントの作成](https://zenn.dev/gunners6518/books/4c4672f32dd100/viewer/12d870)

- [✨ Row コンポーネントを作成](https://github.com/dodonki1223/clone-netflix/commit/caa3bedf410003c9c3c8fa47aff7a00ecce8add4)
- [✨ App.tsx に Row コンポーネントを追加し API からデータを取得してみる](https://github.com/dodonki1223/clone-netflix/commit/f1efea9dd721a3642b7d917da8fb49449560db0c)
- [🔧 sass のインストール](https://github.com/dodonki1223/clone-netflix/commit/6893cdb2ba4f7c2d8babef8551642b94465e9269)
- [✨ APIから取得した映画の画像が表示されるようにスタイリング](https://github.com/dodonki1223/clone-netflix/commit/f92616323c4797cde5776084c085bff289ea34de)
- [♻️ Movie を取得する処理を hook 化 ](https://github.com/dodonki1223/clone-netflix/commit/779c572a91eec52a9756c65131b2a76efe436915)

### [📕 Chapter 05 - Bannerコンポーネントの作成](https://zenn.dev/gunners6518/books/4c4672f32dd100/viewer/bbfca2)

- [✨ Banner コンポーネントを作成](https://github.com/dodonki1223/clone-netflix/commit/8d799d9a874f03cbf8c546ebdf67c630f6af38ae)
- [✨ 作成した Banner コンポーネントを画面に表示する](https://github.com/dodonki1223/clone-netflix/commit/0e2099788e2fbffcace0b5847caa3bc565fbdec3)
- [♻️ Banner 内のコンテンツが真ん中揃えになっていたので左揃えにする](https://github.com/dodonki1223/clone-netflix/commit/e8bb4c66413a0ce5966c456e8ece9d4dcb29fd97)

### [📕 Chapter 06 - Navコンポーネントの追加](https://zenn.dev/gunners6518/books/4c4672f32dd100/viewer/64a5a9)

- [✨ Navコンポーネントの作成](https://github.com/dodonki1223/clone-netflix/commit/938afca0de63e822aab8ee076c90518706a300a1)
- [✨ 作成した Nav コンポーネントを画面に表示する](https://github.com/dodonki1223/clone-netflix/commit/f5947679e99374d291468be693dd9e9057b112ae)
 
### [📕 Chapter 07 - 映画の画像クリックでトレイラーを表示する](https://zenn.dev/gunners6518/books/4c4672f32dd100/viewer/a60270)

- [✨ YouTubeの動画を再生できるように movie-trailer, react-youtube のライブラリを追加](https://github.com/dodonki1223/clone-netflix/commit/e1261cb122f13bb946d7772e9043fa44d85ff1d0)
- [✨ Row.tsx で Movie Type を使えるように読み込み可能とする](https://github.com/dodonki1223/clone-netflix/commit/f2d82e28e3040091336ceadea1ceda7202916a0a)
- [✨ 画像クリックで YouTube の動画が表示される機能を追加](https://github.com/dodonki1223/clone-netflix/commit/8522c22d695902620c9fee67848c04eee0964802)
- [🐛 react-scripts に依存している postcss に既知のバグがあり動かなくなるので Node のバージョンを下げる](https://github.com/dodonki1223/clone-netflix/commit/b96143531659e9cf14314f6fa7ed2e262412db94)


## 🗯その他

取得している画像のクリック後に表示されるトレーラー動画が画像と紐付いていないバグがあります。  
ただ、取得するための API は間違っていなさそうな気がします……。ちゃんと確認する必要あるかもです🤔
