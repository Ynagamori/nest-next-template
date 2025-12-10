# env-template（Nest.js + Next.js テンプレート）

このディレクトリは、Nest.js（バックエンド）と Next.js（フロントエンド）の開発環境をすぐに立ち上げるためのテンプレートです。  
アプリ固有のビジネスロジックは含めず、Hello World レベルの最小構成になっています。

## ディレクトリ構成

- `docker-compose.yml`  
  - `backend`（Nest.js）・`frontend`（Next.js）をまとめて起動するための定義
- `backend/`  
  - Nest.js アプリ（`src/main.ts` / `src/app.module.ts` / `src/app.controller.ts` / `src/app.service.ts` など）
- `frontend/`  
  - Next.js アプリ（`app/layout.tsx` / `app/page.tsx` / `app/globals.css` など）

## テンプレートの使い方

1. この `env-template` ディレクトリ一式を新規プロジェクト用の場所にコピーします。
2. コピー先で、`backend`・`frontend` の依存関係をインストールするか、Docker でまとめて起動します。

### Docker で起動する場合（推奨）

事前に Docker / Docker Compose がインストールされている前提です。

```bash
cd env-template

# 初回のみ（ビルド）
docker compose build

# 起動
docker compose up
```

- フロントエンド: `http://localhost:3000`  
  - 「Template Next.js アプリ」と表示されれば OK
- バックエンド: `http://localhost:8000/`  
  - レスポンスで `OK` が返ってくれば OK

### ローカルで直接起動する場合（Node.js 使用）

事前に Node.js（推奨: v20 系）と npm がインストールされている前提です。

#### バックエンド（Nest.js）

```bash
cd env-template/backend
npm install
npm run start:dev
```

- ブラウザまたは `curl` で `http://localhost:8000/` にアクセスし、`OK` が返ることを確認します。

#### フロントエンド（Next.js）

```bash
cd env-template/frontend
npm install
npm run dev
```

- ブラウザで `http://localhost:3000` にアクセスし、「Template Next.js アプリ」と表示されることを確認します。

## 開発を始めるときのガイド

- バックエンドの実装を追加するときは `backend/src` 配下にモジュール・コントローラ・サービスを追加します。
- フロントエンドの画面を作るときは `frontend/app` 配下にページやレイアウトを追加します。
- 既存の Hello World コード（`app.controller.ts`, `page.tsx` など）は、プロジェクトに合わせて自由に変更・削除して構いません。

