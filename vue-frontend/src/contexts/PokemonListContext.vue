<template>
  <PokemonList
    @select="onSelected"
    v-if="!selectedPokemon"
    :pokemon="dataSet?.pokemon"
    :items="dataSet?.items"
    :caughtIds="caughtIds"
  />
  <PokemonDetail
    @select="onSelected"
    @caught="onCaught"
    v-else
    :pokemon="selectedPokemon"
    :caughtIds="caughtIds"
  />
</template>

<script setup lang="ts">
import { DataSet } from '@/data/model';
import Data from '@/data/dataset.json';
import PokemonList from '@/components/PokemonList.vue';
import PokemonDetail from '@/components/PokemonDetail.vue';
import { computed, ref } from 'vue';

const dataSet: DataSet = Data;

const selectedId = ref<number | null>(null);
const caughtIds = ref<number[]>([]);

const selectedPokemon = computed(() => {
  if (!selectedId.value) return null;
  return dataSet?.pokemon.filter((x) => x.id === selectedId.value)[0];
});

function onSelected(id: number) {
  selectedId.value = id;
}

function onCaught(id: number) {
  caughtIds.value.push(id);
}
</script>
