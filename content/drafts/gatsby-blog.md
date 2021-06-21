---
title: Gatsby.jsでブログを作る
date: "2021-05-02T19:00:00+09:00"
updated-date: "2021-05-02T19:00:00+09:00"
description: "Gatsby.jsでブログを作る"
tags: ["Gatsbyjs", "Netlify"]
---

## Table of Contents

```toc
# This code block gets replaced with the TOC
```

## Gatsby.js

Reactでつくられた静的サイトジェネレータ

Reactをビルド時に1回だけ実行し、HTML,JSを生成する。
生成されたファイルをホスティングサービスにデプロイするだけで見られるようになる。

## 特徴

### GraphQL

Gatsby.jsではビルド時のさまざまなデータをGraphQLで取得する。

Markdown形式で書いた情報を、ファイルシステムから読み込んで、GraphQL経由で取得し、Reactコンポーネント内で表示する。
GatsbyではMarkdownファイルに限らず、様々なデータを `data source`, `data transformer` という枠組みで一般化することで、多様な処理を統一的にかつ簡潔に記述することができている。

クライアントはビルド時に形成されたGraphQL DBの全体は必要ないので、「クエリの結果」のみをJSONとして合わせてデプロイする。
