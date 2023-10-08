<!-- ProjectCard.vue -->
<template>
  <div class="search">
    <span>絞り込み：</span>
    <span v-for=" technology in uniqueTechnologies" :key="technology">
      <span v-if="selectedTechnologies.includes(technology)" class="search-tech technology-selected shadow-box"
        @click="selectTechnology(technology, true)">
        {{ technology }}
      </span>
      <span v-if="!selectedTechnologies.includes(technology)" class="search-tech technology-not-selected shadow-box"
        @click="selectTechnology(technology, false)">
        {{ technology }}
      </span>
    </span>
  </div>
  <div class="projects">
    <div v-for="project in projects" :key="project.name">
      <div v-if="hasCommonItem(selectedTechnologies, project.technologies) || selectedTechnologies.length === 0"
        class="project-card shadow-box">
        <div class="image-box">
          <img v-if="project.image" :src="project.image" alt="画像">
          <img v-if="!project.image" :src="iconDocument" alt="画像">
        </div>
        <div class="table-box">
          <table>
            <thead>
              <tr>
                <td colspan="2">
                  <div class="project-name"> {{ project.name }} </div>
                  <div> {{ project.about }} </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>期間</th>
                <td>{{ project.period }}</td>
              </tr>
              <tr>
                <th>開発体制</th>
                <td>{{ project.team }}</td>
              </tr>
              <tr>
                <th>開発言語・技術</th>
                <td>
                  <div>
                    <span class="project-technologies" v-for="technology in project.technologies" :key="technology">
                      {{ technology }}
                    </span>
                  </div>
                  <div>{{ project.description }}</div>
                </td>
              </tr>
              <tr>
                <th>リンク</th>
                <td><a :href="project.codeLink" target="_blank">GitHubリポジトリ</a></td>
              </tr>
              <tr>
                <th>きっかけ</th>
                <td>{{ project.whyDid }}</td>
              </tr>
              <tr>
                <th>アピールポイント</th>
                <td>{{ project.appealPoint }}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconDocument from '../assets/document.png';

export default {
  props: {
    projects: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      iconDocument,
      selectedTechnologies: [],
    };
  },
  computed: {
    uniqueTechnologies() {
      const allTechnologies = this.projects.reduce((acc, project) => {
        return acc.concat(project.technologies);
      }, []);
      return [...new Set(allTechnologies)].sort();
    },
  },
  methods: {
    selectTechnology: function (technology, isRemove) {
      if (isRemove) {
        const index = this.selectedTechnologies.indexOf(technology);
        if (index > -1) {
          this.selectedTechnologies.splice(index, 1);
        }
      } else {
        this.selectedTechnologies.push(technology);
      }
    },
    hasCommonItem: function (arr1, arr2) {
      const set1 = new Set(arr1);

      for (let item of arr2) {
        if (set1.has(item)) {
          return true;
        }
      }
      return false;
    }
  },
};
</script>

<style scoped>
.projects {
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0;
  margin: 0;
  width: 100%;
}

.project-card {
  display: flex;
  min-width: 35rem;
  background-color: white;
  border-radius: 1rem;
  padding: 0.2rem;
  margin: 1rem 0;
  user-select: none;
}

th {
  text-align: left;
  white-space: nowrap;
}

.image-box {
  max-width: 15rem;
  max-height: 15rem;
  min-width: 10rem;
  min-height: 10rem;
}

img {
  width: 100%;
  height: 100%;
}

.table-box {
  width: 100%;
  padding: 0.4rem;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr {
  border-bottom: solid 1px rgba(32, 32, 32, 0.5);
  padding: 10.2rem 0;
}

th {
  width: 8rem;
}

.project-name {
  font-size: 1.6rem;
}

.project-technologies {
  display: inline-block;
  background-image: linear-gradient(45deg, #0ba360 0%, #3cba92 100%);
  margin: 0.2rem 0.2rem;
  padding: 0rem 0.4rem;
  color: white;
  border-radius: 0.4rem;
}

.search {
  display: flex;
  align-items: baseline;
  justify-content: left;
  flex-wrap: wrap;
}

.search-tech {
  display: inline-block;
  white-space: nowrap;
  border-radius: 0.4rem;
  margin: 0.2rem 0.2rem;
  padding: 0 0.4rem;
  font-size: 1rem;
  user-select: none;
  border: #0ba360 0.1rem solid;
}

.technology-selected {
  background-image: linear-gradient(45deg, #0ba360 0%, #3cba92 100%);

  color: white;
}

.technology-not-selected {
  background-color: white;
  color: #0ba360;
}
</style>

<!--
  概要
  作業期間
  チーム・個人
  開発言語・技術
  参考URL
  きっかけ
  アピールポイント
-->