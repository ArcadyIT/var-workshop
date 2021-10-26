<template>
  <div class="c-pokemon-list">
    <div class="list">
      <PokemonSummary
        v-for="(pokemon, index) in prop.pokemon"
        :pokemon="pokemon"
        :key="index"
        :is-caught="isCaught(pokemon.id)"
        @select="onSelected"
      />
    </div>
    <div class="detail">
      <PokemonDetail
        v-if="selectedPokemon"
        :pokemon="selectedPokemon"
        :is-caught="isCaught(selectedPokemon.id)"
        @select="onSelected"
        @throw-poke-ball="onThrowPokeBall"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import './PokemonList.scss';
</style>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import PokemonSummary from '@/components/pokemon-summary/PokemonSummary.vue';
import PokemonDetail from '@/components/pokemon-detail/PokemonDetail.vue';
import { computed } from 'vue';
import { Pokemon } from '@/data/model';

const prop = defineProps<{
  pokemon: Pokemon[];
  selectedId: number;
  caughtIds: number[];
}>();

const emit = defineEmits(['select', 'throw-poke-ball']);

const selectedPokemon = computed(() => {
  if (!prop.pokemon || prop.selectedId <= 0) return null;
  return prop.pokemon.filter((x) => x.id === prop.selectedId)[0];
});

function onSelected(id: number) {
  emit('select', id);
}

function onThrowPokeBall(id: number) {
  emit('throw-poke-ball', id);
}

function isCaught(id: number) {
  return prop.caughtIds.some((x) => x === id);
}
</script>
