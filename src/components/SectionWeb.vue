<template>
  <div class="space-y-16">
    <section class="space-y-8 leading-loose">
      <h2 class="text-6xl font-bold leading-tight">As A Web Application Developer</h2>

      <ul class="flex space-x-4">
        <li>
          <a href="https://github.com/ztrehagem">
            <link-text>GitHub</link-text>
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/ztrehagem">
            <link-text>GitLab</link-text>
          </a>
        </li>
        <li>
          <a href="https://qiita.com/ztrehagem">
            <link-text>Qiita</link-text>
          </a>
        </li>
      </ul>

      <p>Webアプリケーションフロントエンドの実装を得意としており、業務では主に JavaScript/TypeScript + Vue.js/Nuxt.js による環境構築～設計～実装を担当している。OpenAPI を利用したコード自動生成ツールの作成をはじめ、開発効率化への貢献も積極的に行っている。</p>
      <p>CSSについても一通り理解があり、CSSアニメーションの実装や、カルーセルやアコーディオン等JSが絡んだ複雑なUIの実装も行う。</p>
      <p>大学で学んだ知識や趣味で制作しているアプリケーションの経験から、サーバサイド・インフラ・ネットワーク等についても知識・経験があり、Webアプリケーション全体について議論することができる。</p>

      <dl>
        <dt class="font-bold underline">得意</dt>
        <dd class="ml-4">JavaScript, TypeScript, Vue.js, Nuxt.js, Node.js, CSS3, Sass, Stylus, HTML5</dd>

        <dt class="font-bold underline">まあ分かる</dt>
        <dd class="ml-4">Java, C/C++, Swift, SwiftUI, Ruby, Ruby on Rails, Docker, Vagrant, DB/SQL, Firebase</dd>

        <dt class="font-bold underline">触ったことはある</dt>
        <dd class="ml-4">Go, Lisp(Scheme), Haskell, Lambda Calculus, GCP, Deno</dd>
      </dl>
    </section>

    <section class="space-y-8 leading-loose">
      <h3 class="text-3xl font-bold leading-tight border-b border-solid border-dark">Websites</h3>

      <ul class="flex flex-wrap -m-2">
        <li class="m-2">
          <a href="https://teikyou.com/" class="block">
            <figure>
              <img src="~@/assets/images/thumbnails/teikyou-dot-com.png" alt="thumbnail" class="h-64 w-auto max-w-full" />
              <figcaption>テイキョウドットコム</figcaption>
            </figure>
          </a>
        </li>

        <li class="m-2">
          <a href="https://elmina.net/" class="block">
            <figure>
              <img src="~@/assets/images/thumbnails/elmina-logo-bk.png" alt="thumbnail" class="h-64 w-auto max-w-full" />
              <figcaption>elmina.net</figcaption>
            </figure>
          </a>
        </li>
      </ul>

      <p>その他、ポートフォリオサービス等に掲載しています。</p>
    </section>

    <section class="space-y-8 leading-loose">
      <h3 class="text-3xl font-bold leading-tight border-b border-solid border-dark">Libraries</h3>

      <ul class="list-disc pl-6 space-y-4">
        <li>
          <dl>
            <dt>
              <a href="https://www.npmjs.com/package/@ztrehagem/openapi-codegen-typescript">
                <link-text>@ztrehagem/openapi-codegen-typescript</link-text>
              </a>
              <span>
                <span>(</span>
                <a href="https://github.com/ztrehagem/openapi-codegen-typescript">
                  <link-text>GitHub</link-text>
                </a>
                <span>)</span>
              </span>
            </dt>
            <dd>OpenAPI ドキュメントからTypeScriptコードを自動生成するやつ。レスポンスのHTTPステータス毎に型定義されるのが特徴。README書いてなくてすみません。</dd>
          </dl>
        </li>

        <li>
          <dl>
            <dt>
              <a href="https://www.npmjs.com/package/@ztrehagem/vue-accordion">
                <link-text>@ztrehagem/vue-accordion</link-text>
              </a>
              <span>
                <span>(</span>
                <a href="https://github.com/ztrehagem/vue-accordion">
                  <link-text>GitHub</link-text>
                </a>
                <span>)</span>
              </span>
            </dt>
            <dd>縦向きに開閉するアコーディオンCSS制御だけを提供するVueコンポーネント。ここまでシンプルなライブラリって意外と無かったりするよね？</dd>
          </dl>
        </li>

        <li>
          <dl>
            <dt>
              <a href="https://www.npmjs.com/package/@ztrehagem/daty">
                <link-text>@ztrehagem/daty</link-text>
              </a>
              <span>
                <span>(</span>
                <a href="https://github.com/ztrehagem/daty">
                  <link-text>GitHub</link-text>
                </a>
                <span>)</span>
              </span>
            </dt>
            <dd>プルダウンで年月日を別々に選択するUIのために作った日付クラス。でもUIコンポーネント内にこの制御を埋め込んじゃえばよくない？ってなっちゃって今のところ自分でも使ってない。さようなら。</dd>
          </dl>
        </li>
      </ul>
    </section>

    <section class="space-y-8 leading-loose">
      <h3 class="text-3xl font-bold leading-tight border-b border-solid border-dark">Papers</h3>

      <ul class="list-disc pl-6 space-y-4">
        <li>
          <dl>
            <dt>Liquid：非同期一階関数による並行計算体系</dt>
            <dd>情報処理学会第80回全国大会（2018年3月15日発表）</dd>
            <dd>大会奨励賞受賞</dd>
          </dl>
        </li>

        <li>
          <dl>
            <dt>Liquid: A concurrent calculus with declaring first-order asynchronous functions</dt>
            <dd>Trends in Functional Programming 2018 (presented on June 11, 2018)</dd>
          </dl>
        </li>

        <li>
          <dl>
            <dt>対話を行う分散ロボットによる迷子探索システム (クラウドネットワークロボット)</dt>
            <dd>電子情報通信学会技術研究報告 = IEICE technical report : 信学技報 117(198):2017.9.1 p.19-24</dd>
          </dl>
        </li>
      </ul>
    </section>
  </div>
</template>
