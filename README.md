# TempleteReactAuth
![image](https://github.com/Melonps/CloudSeed-Frontend/assets/95263124/7a7e9b85-cb27-4933-acc2-e4a787cce1ed)

★を付けてあげてください！

## TempleteReactAuthの使い方
このドキュメントは、BIPROGY（旧日本ユニシス）様主催のイベントに参加した際に作成した、CloudSeedというアプリから作成されたテンプレートを紹介します。

以下に実行手順を示します。なお、様々な.envファイルが必要です。今回必要なものは以下の通りです。これらの情報はFirebaseのキーとなりますので、Firebaseのドキュメント等で調べて入力してください。

```shell
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_IREBASE_PROJECTID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_API_MESSAGE_SENDER_ID=""
VITE_FIREBASE_APP_ID=""

```
プロジェクトのディレクトリに移動してください。

また、以下の手順は、ローカルにNodeがインストールされていることを前提としています。。npm派です。

```shell
git clone https://github.com/Melonps/TempleteReactAuth.git
```

上記コマンドでリポジトリをダウンロードし、フロントエンドのAPI_KEYを入力してください。詳細はリポジトリ内のドキュメントを参照してください。

```shell
cd TempleteReactAuth

```

で、ディレクトリ移動

```shell
npm install
```

で、モジュールをインストールしてください。

```shell
npm start
```
上記コマンドでプロジェクトを起動します。
