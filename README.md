# Teracoder2.0
Teracoderのジャッジシステムを新しくするテストプロジェクトです。

## Requirement
### フロントエンド　
Typescript ^5.7.2

### バックエンド
Go 

### DB
MySQL

## Installation
node.js   https://nodejs.org/en/

go        https://go.dev/doc/install

Docker    https://www.docker.com/get-started/

## Usage
このプロジェクトをクローンしDocker Desktopを起動してください
### 開始
```
$cd monacoEditorExample
$docker build -t teracoder2.0:latest .
$docker container run -it -d -p 9000:9000 --name teracoder2.0 teracoder2.0$
```
以上のコマンドを実行するとlocalhost:9000にWebアプリケーションが立ち上がります

### 終了
```
docker container stop teracoder2.0
docker container rm teracoder2.0
docker rmi teracoder2.0
```
以上のコマンドを実行することでWebアプロケーションを削除することができます
