const _bem = (prefixedName: string, blockSuffix: string, element: string, modifier: string): string => {
    if (blockSuffix) { // 模块名称
      prefixedName += `-${blockSuffix}`
    }
    if (element) { // 元素名称
      prefixedName += `__${element}`
    }
    if (modifier) { // 行为描述
      prefixedName += `--${modifier}`
    }
    return prefixedName
}
function createBEM(prefixedName: string){
const b = (blockSuffix: string = '') => _bem(prefixedName, blockSuffix, '', '')
const e = (element: string = '') =>
    element ? _bem(prefixedName, '', element, '') : ''
const m = (modifier: string = '') =>
    modifier ? _bem(prefixedName, '', '', modifier) : ''
const be = (blockSuffix: string = '', element: string = '') =>
    blockSuffix && element ? _bem(prefixedName, blockSuffix, element, '') : ''
const em = (element: string = '', modifier: string = '') =>
    element && modifier ? _bem(prefixedName, '', element, modifier) : ''
const bm = (blockSuffix: string, modifier: string) =>
    blockSuffix && modifier ? _bem(prefixedName, blockSuffix, '', modifier) : ''
const bem = (blockSuffix: string, element: string, modifier: string) =>
    blockSuffix && element && modifier
    ? _bem(prefixedName, blockSuffix, element, modifier)
    : ''
const is = (name: string = '', state: string = '') => (state ? `is-${name}` : '')
return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
}
}
export function createNamespace(name: string) {
const prefixedName: string = `gs-${name}`
return createBEM(prefixedName)
}
const bem = createNamespace('button'); 
console.log(bem.b()) // gs-button
console.log(bem.b('box')) // gs-button-box
console.log(bem.e('element')); // gs-button__element
console.log(bem.m('disabled')) // gs-button--disabled
console.log(bem.is('checked')) // is-checked
console.log(bem.bem('box', 'element', 'disabled')) // gs-box__element--disabled