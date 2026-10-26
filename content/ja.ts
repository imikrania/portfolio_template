import type { SiteContent } from "./types";

const content = {
  locale: "ja",
  meta: {
    title: "アレックス・ドウ - ソフトウェアエンジニア",
    description: "アレックス・ドウは TypeScript と Go と Rust で Web プロダクトを作り、後から変えにくい部分について書いています。",
  },
  person: {
    name: "アレックス・ドウ",
    role: "ソフトウェアエンジニア",
    tagline: "TypeScript と Go で、あとから変えにくい部分を設計します。",
    location: "",
    avatar: null,
  },
  labels: {
    skipToContent: "本文へ移動",
    menu: "メニュー",
    navigation: "サイトナビゲーション",
    theme: "配色テーマを切り替える",
    language: "言語を切り替える",
    repository: "リポジトリ",
    live: "公開サイト",
    expandAll: "すべて開く",
    collapseAll: "すべて閉じる",
  },
  hero: {
    facts: { projects: "プロジェクト", certifications: "資格", skills: "技術" },
    scroll: "プロフィールへ",
  },
  nav: {
    about: "Profile",
    skills: "Skills",
    experience: "Experience",
    certifications: "Certifications",
    projects: "Projects",
    contact: "Contact",
  },
  about: {
    title: "Profile",
    paragraphs: [],
    highlights: [
      { label: "関心", value: "Web プラットフォームと開発者向けツール" },
      { label: "使用言語", value: "TypeScript、Go、Rust" },
      { label: "エディタ", value: "Neovim" },
      { label: "タイムゾーン", value: "UTC+9" },
    ],
  },
  skills: {
    title: "Skills",
    intro: "",
    levels: { expert: "得意", intermediate: "実務で使用", beginner: "学習中" },
    groups: {
      languages: "プログラミング言語",
      frontend: "フロントエンド",
      backend: "バックエンド",
      infrastructure: "インフラ",
      tools: "ツール",
    },
  },
  experience: {
    title: "Experience",
    positions: {
      northwind: {
        title: "シニアソフトウェアエンジニア",
        summary: "プラットフォームチーム",
        bullets: [
          "モノリスからモジュール構成の Next.js フロントエンドへ、ルート単位で段階的に移行した。",
          "使われていない依存レイヤーを削除し、本番ビルドの時間をおよそ半分にした。",
          "3 名のエンジニアの初回リリースを支援した。",
        ],
      },
      cirrus: {
        title: "ソフトウェアエンジニア",
        summary: "プロダクトチーム",
        bullets: [
          "プロダクト全体が依存する課金とサブスクリプションの処理を実装した。",
          "E2E テストを導入し、リリースを止める不具合をデプロイ前に 2 件検出した。",
        ],
      },
      foundry: {
        title: "ジュニアデベロッパー",
        summary: "クライアント案件",
        bullets: [
          "共通コンポーネントライブラリを使い、9 件のクライアントサイトを納品した。",
          "デザインの受け渡し手順について社内ガイドを書いた。",
        ],
      },
    },
  },
  certifications: {
    title: "Certifications",
    intro: "",
    categories: { aws: "Amazon Web Services", other: "その他" },
  },
  projects: {
    title: "Projects",
    entries: {
      atlas: {
        name: "Atlas",
        role: "個人開発",
        description: "地図タイルの配信と描画を行うサーバーです。ベクタータイルを配信し、地図ライブラリに依存せずクライアント側で描画します。",
      },
      beacon: {
        name: "Beacon",
        role: "個人開発",
        description: "関連する障害をまとめてから通知するアラートサービスです。チームの夜間呼び出しがおよそ半分になりました。",
      },
      lumen: {
        name: "Lumen",
        role: "個人開発",
        description: "Markdown を WebAssembly モジュールに変換する静的サイトジェネレーターです。同じ内容をサーバー側でもブラウザ側でも描画できます。",
      },
      harbor: {
        name: "Harbor",
        role: "テックリード",
        description: "2 つのリリースの差分と、各工程の承認者を表示するデプロイ dashboard です。",
      },
      prism: {
        name: "Prism",
        role: "個人開発",
        description: "アップロードされた写真を正規化し、主要な色を抽出する画像処理です。キューを挟んだ Lambda 関数として動きます。",
      },
      quill: {
        name: "Quill",
        role: "コントリビューター",
        description: "プレビューとプラグイン API を備えた Markdown エディタです。表組み拡張とドキュメントを担当しています。",
      },
    },
  },
  contact: {
    title: "Contact",
    body: "",
    linkLabels: {
      github: "GitHub",
      x: "X",
      linkedin: "LinkedIn",
      zenn: "Zenn",
      email: "メール",
      rss: "RSS",
    },
  },
  footer: { note: "Next.js と Tailwind CSS で作成し、GitHub Pages で公開しています。" },
} satisfies SiteContent;

export default content;
