<template>
  <div class="character-table">
    <div class="gender">
      <select v-model="gender">
        <option value="all">All</option>
        <option value="m">m</option>
        <option value="f">f</option>
        <option value="other">other</option>
      </select>
    </div>
   <div class="header">
     <button type="button" class="filter-btn" @click="filterByName('name')">
      Name
    </button>
     <button type="button" class="filter-btn">
      Gender
    </button>
     <button type="button" class="filter-btn" @click="filterByHeight('height')">
      Height
    </button>
   </div>
   <div class="cells">
     <CharacterRow v-for="(character, i) in filterPersons" :key="i" :character="character" />
   </div>
  </div>
</template>

<script>
  import { ref, watch } from 'vue';
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
    setup(props) {
      const persons = ref(props.characters);
      const filterPersons = ref(props.characters);
      const sortOrder = ref(true);
      const gender = ref('all');
      const filterByName = (key = '') => {
        if (!sortOrder.value) {
          filterPersons.value = filterPersons.value.sort((a, b) => {
            if (a[key] > b[key]) {
              return 1;
            }
            if (a[key] < b[key]) {
              return -1;
            }
            return 0;
          });
          sortOrder.value = !sortOrder.value;
        } else {
          filterPersons.value = filterPersons.value.sort((a, b) => {
            if (a[key] > b[key]) {
              return -1;
            }
            if (a[key] < b[key]) {
              return 1;
            }
            return 0;
          });
          sortOrder.value = !sortOrder.value;
        }
      };
      const filterByHeight = (key = '') => {
        if (!sortOrder.value) {
          filterPersons.value = filterPersons.value.sort((a, b) => {
            if (parseInt(a[key]) > parseInt(b[key])) {
              return 1;
            }
            if (parseInt(a[key]) < parseInt(b[key])) {
              return -1;
            }
            return 0;
          });
          sortOrder.value = !sortOrder.value;
        } else {
          filterPersons.value = filterPersons.value.sort((a, b) => {
            if (parseInt(a[key]) > parseInt(b[key])) {
              return -1;
            }
            if (parseInt(a[key]) < parseInt(b[key])) {
              return 1;
            }
            return 0;
          });
          sortOrder.value = !sortOrder.value;
        }
      };

      watch(gender, (newGender) => {
        if (newGender === 'all') {
          filterPersons.value = persons.value;
        }
        if (newGender === 'm') {
          filterPersons.value = persons.value.filter((person) => person.gender === 'male');
        }
        if (newGender === 'f') {
          filterPersons.value = persons.value.filter((person) => person.gender === 'female');
        }
        if (newGender === 'other') {
          filterPersons.value = persons.value.filter((person) => (person.gender !== 'female') && (person.gender !== 'male'));
        }
      });
      return {
        persons,
        filterByName,
        filterByHeight,
        gender,
        filterPersons,
      }
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