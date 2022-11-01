/** 
 * 编写引入 .vue 文件的时候 能识别出组件的类型
*/

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
} 