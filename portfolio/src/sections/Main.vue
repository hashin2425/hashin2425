<template>
  <div id="main">
    <h1>About</h1>
    <About :sns="sns"></About>
    <h1>Skills</h1>
    <SkillCard :skills="skills" />
    <h1>Projects</h1>
    <CreativeCard :projects="projects" />
  </div>
  <TriangleBackground></TriangleBackground>
</template>

<script>
import CreativeCard from "./components/CreativeCard.vue";
import SkillCard from "./components/SkillCard.vue";
import About from "./components/About.vue";
import TriangleBackground from "./components/TriangleBackground.vue";

function calculateAge(year, month) {
  return Math.floor((new Date() - new Date(year, month, 1)) / (1000 * 60 * 60 * 24 * 365))
}

export default {
  name: "Main-section",
  components: {
    CreativeCard,
    SkillCard,
    About,
    TriangleBackground
  },
  data() {
    return {
      sns: [
        { name: "Twitter", url: "https://twitter.com/HashIn2425" },
        { name: "GitHub", url: "https://github.com/hashin2425" },
        { name: "Qiita", url: "https://qiita.com/hashin2425" },
        { name: "AtCoder", url: "https://atcoder.jp/users/HashIn2425" },
      ],
      projects: [
        {
          name: "ポートフォリオサイト(このサイト)",
          period: "2023年10月",
          team: "個人開発",
          about: "ポートフォリオサイトをVue.jsによって作成しました。",
          description: "GitHub Pagesを用いることによって静的Webサイトを公開しています。Vue.jsファイルからビルドする作業はローカルで行わず、GitHub Actionsを用いて、自動的に行うように設定しています。具体的には、リポジトリのmainブランチにコードがプルされたときに自動的にビルドが開始し、GitHub Pagesへのデプロイまでを行うように設定しています。",
          technologies: ["Vue.js", "GitHub Actions"],
          codeLink: "https://github.com/hashin2425/hashin2425",
          appealPoint: "               ",
          whyDid: "GitHub ActionsによるCI/CDを勉強したかったので",
        }, {
          name: "ゲーム「競え！初夏の夢祭り」",
          period: "2023年8月から10月",
          team: "デザイナ・サウンドクリエイタを含む8名チームで、私はプログラマとして参加しました。",
          about: "夏祭りの気分を味わえるゲーム「競え！初夏の夢祭り」の作成に参加しました。",
          description: "               ",
          technologies: ["Unity", "C#"],
          codeLink: "https://github.com/hashin2425/CGP_team_2023_c",
          appealPoint: "               ",
          whyDid: "               ",
        }, {
          name: "学生食堂の混雑度状況がわかるアプリ",
          period: "2023年5月から(継続)",
          team: "エンジニア2名チームで、私はバックエンド・フロントエンドでの開発に取り組みました。",
          about: "                 ",
          description: "               ",
          technologies: ["Python", "JavaScript", "MySQL", "Node.js", "Express.js", "Redis", "Docker", "サーバー構築", "FastAPI", "Linux",],
          codeLink: "https://github.com/hashin2425/dockerWebAppTemperate",
          appealPoint: "               ",
          whyDid: "               ",
        }, {
          name: "ソーラーカー監視ソフトウェア",
          period: "2023年4月から6月",
          team: "個人開発",
          about: "ソーラーカーに搭載されたセンサー類を監視するためのGUIアプリケーション",
          description: "               ",
          technologies: ["Python", "eel-Python", "Chart.js",],
          codeLink: "https://github.com/hashin2425/SolarCarSensorMonitor",
          appealPoint: "               ",
          whyDid: "               ",
        }, {
          name: "LazyRename",
          period: "               ",
          team: "               ",
          about: "一括でファイル名を変更するためのWindows向けソフトウェア",
          description: "               ",
          technologies: ["C#", ".NET Framework"],
          codeLink: "https://github.com/hashin2425/LazyRename",
          appealPoint: "               ",
          whyDid: "               ",
        }, {
          name: "ロボカップ得点計算ソフト",
          period: "               ",
          team: "個人開発",
          about: "ロボカップレスキューの得点を計算するためのオフライン用アプリ",
          description: "               ",
          technologies: ["JavaScript"],
          codeLink: "https://github.com/hashin2425/robocup_calc",
          appealPoint: "               ",
          whyDid: "               ",
        },
      ],
      skills: [
        {
          section: "プログラミング言語",
          contents: [
            { name: "Python", years: calculateAge(2021, 9), level: 3, message: "もっとも頻繁に使っている言語だと思います。簡単な処理やアプリ開発、競技プログラミング(AtCoder)など、さまざまな場面で利用しています。" },
            { name: "JavaScript", years: calculateAge(2020, 5), level: 2, message: "Node.jsによるバックエンドやブラウザの拡張機能を開発するときに利用しています。" },
            { name: "C#", years: calculateAge(2020, 1), level: 2, message: "Unityでのゲーム開発や.NET Framework開発などに利用しています。" }
          ]
        }, {
          section: "フレームワークなど",
          contents: [
            { name: "Node.js", years: calculateAge(2023, 6), level: 1, message: "" },
            { name: "Vue.js", years: calculateAge(2023, 6), level: 2, message: "このページもVue.jsで作成しています。" },
            { name: "Scikit-learn", years: calculateAge(2022, 1), level: 2, message: "" },
          ]
        }, {
          section: "開発環境",
          contents: [
            { name: "Unity", years: calculateAge(2021, 1), level: 2, message: "" },
          ]
        }, {
          section: "コンテナ技術",
          contents: [
            { name: "Docker", years: calculateAge(2023, 7), level: 1, message: "" },
          ]
        }, {
          section: "データベース",
          contents: [
            { name: "MySQL", years: calculateAge(2023, 7), level: 1, message: "" },
            { name: "SQLite3", years: calculateAge(2021, 9), level: 2, message: "" },
          ]
        }, {
          section: "オペレーションシステム",
          contents: [
            { name: "Windows", years: calculateAge(2014, 8), level: 3, message: "XPの頃から、ほぼ毎日使っています。" },
            { name: "Debian/Linux", years: calculateAge(2021, 9), level: 2, message: "" },
          ]
        }, {
          section: "マイコン",
          contents: [
            { name: "Arduino", years: calculateAge(2021, 6), level: 2, message: "" },
          ]
        }, {
          section: "CI/CD",
          contents: [
            { name: "GitHub Actions", years: calculateAge(2023, 9), level: 1, message: "Webフロントエンドでのビルド・テストを自動化するために勉強しています。" },
          ]
        },
      ],
    };
  },
};
</script>

<style>
h1 {
  font-size: 1.6rem;
  padding-left: 0.4rem;
  border-left: rgb(32, 32, 32) solid 0.2rem;
}

p {
  font-size: 1.2rem;
}

#main {
  margin: 1rem;
}

.shadow-box {
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.15s ease-in-out;
}

.shadow-box:hover {
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.4);
}
</style>
