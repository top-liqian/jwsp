<template>
    <i :class="bem.b()" :style="style">
        <slot></slot>
    </i>
</template>

<script lang="ts" setup>
import { createNamespace } from '@lego-service-packages/utils/create';
import { computed, CSSProperties } from 'vue';
import { iconProps } from './icon';
const bem = createNamespace('icon')
defineOptions({
    name:'GSIcon'
})
const props = defineProps(iconProps);
console.log('--defineProps---', props)
const style = computed<CSSProperties>(() => {
    if (!props.size && !props.color) {
        return {}
    }
    return {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { 'color': props.color } : {})
    }
});
</script>