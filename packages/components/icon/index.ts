import _GSIcon from './src/icon.vue'
import { withInstall } from '@lego-service-packages/utils/withInstall';

const GSIcon = withInstall(_GSIcon); // 生成带有install方法的组件

export type IconInstanceType = InstanceType<typeof GSIcon> // 让用户可以通过ref使用组件的类型，还需要增加instance实例类型

export * from './src/icon'

export default GSIcon // 导出Icon组件

declare module 'vue' {
    export interface GlobalComponents {
        GSIcon: typeof GSIcon 
    }
}