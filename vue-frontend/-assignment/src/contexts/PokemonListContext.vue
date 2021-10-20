<template>
  <PokemonList
    :pokemon="[]"
    :selectedId="selectedId"
    :caughtIds="caughtIds"
    @select="onSelected"
    @throw-poke-ball="console.log('poke ball thrown emit received')"
  />
</template>

<script setup lang="ts">
import { DataSet } from '@/data/model';
import Data from '@/data/dataset.json';
import PokemonList from '@/components/pokemon-list/PokemonList.vue';
import { ref } from 'vue';

const selectedId = ref<number>(0);
const caughtIds = ref<number[]>([]);

function onSelected(id: number) {
  selectedId.value = id;
}
</script>
