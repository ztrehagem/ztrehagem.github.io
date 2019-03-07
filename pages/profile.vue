<template lang="pug">
.page-profile
  .panel
    h3.heading Shigeki Suwa
    p.
      FLASH、Java Applet、ブラウザゲー、隠しページ・・・などが跋扈していた2000年代初頭にインターネットの世界に爆誕。
      早々にHTML・CSSと出会い、今の今まで続く腐れ縁である。
    p.
      中学で吹奏楽部に入り音楽と出会うが、不運なことにボカロEDMの世界に迷い込んでしまう。
      高校から本格的にDTMをはじめ、大学ではサークルを立ち上げる。
      現在は音楽サークル『<a class="_textlink" href="https://elmina.net" target="_blank">elmina</a>』
      として楽曲制作とアルバムCDの企画・制作進行をしている。
    p.
      その傍ら、こつこつと積み重ねていたWebサイト制作の経験を活かし、インターン・アルバイトとして複数のWebサービス開発に携わってきた。
    p.
      本当に使いやすいWebサイトを作るのがどうやら好きみたいだ。
    p
      small (2018/06/03)
    hr
    h3.heading Web屋
    p.
      個人ウェブサイト・特設サイトをはじめ、様々なWebサービス開発に携わる。
      クライアントサイド（JavaScript, CSS）を得意とする。
    p.
      言語：JavaScript/TypeScript, CSS, HTML, Java, C/C++, Ruby, Go, Lisp(Scheme), Haskell
    p.
      相棒：Vue.js, Nuxt.js, Node.js, Docker, ...
    p
      a.link(target="_blank", href="https://twitter.com/ztrehagem")
        i.fab.fa-twitter
        span &ensp;Twitter
      a.link(target="_blank", href="https://github.com/ztrehagem")
        i.fab.fa-github
        span &ensp;GitHub
      a.link(target="_blank", href="https://gitlab.com/megahertz")
        i.fab.fa-gitlab
        span &ensp;GitLab
      a.link(target="_blank", href="https://qiita.com/ztrehagem")
        i.fas.fa-pencil-alt
        span &ensp;Qiita
    hr
    h3.heading 音屋
    small.hn Rious / Megahertz
    p.
      トランス・ドラムンベースなど、シンセサウンドをメインとしたエレクトロニックな楽曲を得意とする。
      ボーカル編集・マスタリングなども行う。
      音楽サークル『<a class="_textlink" href="https://elmina.net" target="_blank">elmina</a>』主宰。
    p
      a.link(target="_blank", href="https://twitter.com/ztrinfo")
        i.fab.fa-twitter
        span &ensp;Twitter
      a.link(target="_blank", href="https://soundcloud.com/ztrehagem")
        i.fab.fa-soundcloud
        span &ensp;SoundCloud
      a.link(target="_blank", href="https://megahertz.booth.pm/")
        i.fas.fa-shopping-cart
        span &ensp;BOOTH
    hr
    h3.heading 研究・論文
    dl
      dt Liquid: A concurrent calculus with declaring first-order asynchronous functions
      dd Trends in Functional Programming 2018 (presented on June 11, 2018)
    dl
      dt Liquid：非同期一階関数による並行計算体系
      dd 情報処理学会第80回全国大会（2018年3月15日発表）
      dd 大会奨励賞受賞
    dl
      dt 対話を行う分散ロボットによる迷子探索システム (クラウドネットワークロボット)
      dd 電子情報通信学会技術研究報告 = IEICE technical report : 信学技報 117(198):2017.9.1 p.19-24
</template>

<style lang="stylus" scoped>
@require "~assets/styles/include"

.page-profile
  &
    padding 2rem
    display flex
    justify-content center
    +mobile()
      padding 2rem 1rem

  .panel
    width 100%
    max-width 800px
    background-color white
    box-shadow 0 0 12px rgb(235, 235, 235)
    padding 2rem
    +mobile()
      padding 2rem 1rem

  p
    font-size 0.9rem

  .heading
    font-weight bold
    display inline-block

  .hn
    margin-left 1em

  .link
    display inline-block
    padding 0.2rem 0.6rem
    margin-bottom 0.5rem
    margin-right 1em
    border 1px solid black
    border-radius 3px
    font-size 0.8rem
</style>


<script>
export default {
}
</script>
