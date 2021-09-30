<template>
  <template v-if="pokemon">
    <PokemonSummary
      @select="$emit('select', $event)"
      v-for="(pokemon, index) in props.pokemon"
      :pokemon="pokemon"
      :key="index"
      :isCaught="isCaught(pokemon.id)"
    />
  </template>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Pokemon, Item } from '@/data/model';
import PokemonSummary from '@/components/PokemonSummary.vue';

const props = defineProps<{
  pokemon: Pokemon[];
  items: Item[];
  caughtIds: number[];
}>();
defineEmits(['select']);

function isCaught(id: number) {
  return props.caughtIds.some((x) => x === id);
}
</script>
