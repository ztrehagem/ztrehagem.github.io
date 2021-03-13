<template>
  <div class="flex flex-col items-center space-y-16 pt-4 px-4 pb-16">
    <section class="container space-y-4 leading-loose">
      <h1 class="text-6xl font-bold">As A Web Application Developer</h1>

      <ul class="flex space-x-2">
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

      <p>WIP</p>

      <p>個人ウェブサイト・特設サイトをはじめ、様々なWebサービス開発に携わる。 クライアントサイド（JavaScript, CSS）を得意とする。</p>

      <p>言語：JavaScript/TypeScript, CSS, HTML, Java, C/C++, Ruby, Go, Lisp(Scheme), Haskell</p>

      <p>相棒：Vue.js, Nuxt.js, Node.js, Docker, ...</p>
    </section>

    <section class="container space-y-4 leading-loose">
      <h2 class="text-3xl font-bold border-b border-solid border-dark">Websites</h2>

      <ul class="flex flex-wrap -m-2">
        <li class="m-2">
          <a href="https://teikyou.com/" class="block">
            <figure>
              <img src="https://teikyou.com/images/teikyou-dot-com.png" alt="thumbnail" class="h-64 w-auto max-w-full" />
              <figcaption>テイキョウドットコム</figcaption>
            </figure>
          </a>
        </li>

        <li class="m-2">
          <a href="https://elmina.net/" class="block">
            <figure>
              <img src="https://elmina.net/ogp.png" alt="thumbnail" class="h-64 w-auto max-w-full" />
              <figcaption>elmina.net</figcaption>
            </figure>
          </a>
        </li>
      </ul>

      <p>その他、ポートフォリオサービス等に掲載しています。</p>
    </section>

    <section class="container space-y-4 leading-loose">
      <h2 class="text-3xl font-bold border-b border-solid border-dark">Libraries</h2>

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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkText from '../components/LinkText.vue'
export default Vue.extend({
  components: { LinkText },
  head() {
    return {
      title: 'As A Web Application Developer',
    }
  },
})
</script>
