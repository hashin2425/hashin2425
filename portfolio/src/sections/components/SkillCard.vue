<!-- SkillCard.vue -->
<template>
  <div class="skill-card shadow-box">
    <table>
      <thead>
        <tr>
          <td class="nowrap-this"></td>
          <td class="nowrap-this">技術</td>
          <td class="nowrap-this">開発歴</td>
          <td class="nowrap-this">レベル</td>
          <td class="nowrap-this">概要</td>
        </tr>
      </thead>
      <tbody v-for="skill in skills" :key="skill.name">
        <tr v-for="(skill_contents, index) in skill.contents" :key="skill_contents.name">
          <th class="nowrap-this" v-if="index === 0" :rowspan="skill.contents.length">{{ skill.section }}</th>
          <td class="nowrap-this" style="background-color: rgb(235, 235, 235);">{{ skill_contents.name }}</td>
          <td class="nowrap-this">{{ skill_contents.years }}年目</td>
          <td class="nowrap-this">
            <LvIcon :level="skill_contents.level"></LvIcon>
          </td>
          <td>{{ skill_contents.message }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LvIcon from './LvIcon.vue';

export default {
  name: "SkillCard",
  components: {
    LvIcon,
  },
  props: {
    skills: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.skill-card {
  background-color: white;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0;
}

table {
  border-collapse: collapse;
  min-width: 800px;
}

th,
td {
  padding: 0.2rem 0.8rem;
  border: rgba(32, 32, 32, 0.25) 1px solid;
  vertical-align: top;
  justify-content: left;
  text-align: left;
}

.nowrap-this {
  white-space: nowrap;
}
</style>
