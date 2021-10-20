<template>
  <div class="c-pokemon-detail">
    <h4>{{ prop.pokemon.name }}</h4>
    <img
      class="visual"
      :alt="prop.pokemon.name"
      :src="prop.pokemon.sprites.front_default"
    />

    <button :disabled="isCaught" @click="throwPokeBall">
      Throw Poke Ball
    </button>
  </div>
</template>

<style lang="scss">
@import './PokemonDetail.scss';
</style>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Pokemon } from '@/data/model';

const emit = defineEmits(['throw-poke-ball']);
const prop = defineProps<{ pokemon: Pokemon; isCaught: boolean }>();

function throwPokeBall() {
  emit('throw-poke-ball', prop.pokemon?.id);
}
</script>
