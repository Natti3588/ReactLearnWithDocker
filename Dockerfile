# Node.js20が既にインストール済みの軽量Linux（Alpine）を土台にする
FROM node:20-alpine

# コンテナ内の作業フォルダを決める
WORKDIR /app

# 依存関係だけを先にインストールする
# ソースコードより先にpackage.jsonだけをコピーしてnpm installをする。
COPY package*.json ./
RUN npm install

# 残りのすべてのソースコードをコンテナにコピーする
COPY . .

# 5173番ポートを使用すると宣言
EXPOSE 5173

# コンテナ起動時に自動実行をするコマンド
# --hostがないと、コンテナ内のViteがホスト（私のPC）からのアクセスを拒否
CMD ["npm", "run", "dev", "--", "--host"]