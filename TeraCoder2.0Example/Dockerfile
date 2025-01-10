# syntax=docker/dockerfile:1.4

FROM --platform=$BUILDPLATFORM node:22.12.0-bullseye-slim as builder

# 作業ディレクトリの作成
RUN mkdir /project
WORKDIR /project

# TypeScriptとMonaco Editorをインストール
RUN npm init -y
RUN npm install monaco-editor typescript
COPY . .

RUN npx webpack 

# 開発環境の設定
FROM builder as deve-envs
RUN apt-get update && apt-get install -y --no-install-recommends git
RUN useradd -s /bin/bash -m vscode && groupadd docker && usermod -aG docker vscode

# コンテナ起動時にWebpack Dev Serverを実行
CMD ["npx", "webpack", "serve"]
