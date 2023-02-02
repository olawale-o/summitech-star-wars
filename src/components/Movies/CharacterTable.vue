<template>
  <div class="character-table">
   <div class="header">
     <button type="button" class="filter-btn">Name</button>
     <button type="button" class="filter-btn">Gender</button>
     <button type="button" class="filter-btn">Height</button>
   </div>
   <div class="cells">
     <CharacterRow v-for="(character, i) in characters" :key="i" :character="character" />
   </div>
  </div>
</template>

<script>
  import CharacterRow from '@/components/Movies/CharacterRow.vue';
  export default {
    name: 'CharacterTable',
    components: {
      CharacterRow,
    },
    props: {
      characters: {
        type: Array,
      },
    },
    setup() {
      return {}
    },
  };
</script>

<style scoped>
  .character-table {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .filter-btn {
    padding: 0.8rem;
    font-size: 1.5rem;
  }

  .filter-btn:nth-child(1) {
    width: 50%;
  }

  .filter-btn:nth-child(2), 
  .filter-btn:nth-child(3) {
    width: 25%;
  }

  .cells {
    width: 100%;
  }
</style>