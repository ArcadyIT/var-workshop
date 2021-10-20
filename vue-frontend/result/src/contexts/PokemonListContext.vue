<template>
  <PokemonList
    :pokemon="dataSet.pokemon"
    :selectedId="selectedId"
    :caughtIds="caughtIds"
    @select="onSelected"
    @throw-poke-ball="onThrowPokeBall"
  />
</template>

<script setup lang="ts">
import { DataSet } from '@/data/model';
import Data from '@/data/dataset.json';
import PokemonList from '@/components/pokemon-list/PokemonList.vue';
import { ref } from 'vue';

const dataSet: DataSet = Data;

const selectedId = ref<number>(0);
const caughtIds = ref<number[]>([]);

function onSelected(id: number) {
  selectedId.value = id;
}

function onThrowPokeBall(id: number) {
  let minutes = new Date().getMinutes();
  if (minutes % 2 === 0) {
    caughtIds.value.push(id);
    return;
  }
  console.log('failed');
}
</script>
