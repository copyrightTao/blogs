const components = [
  'pagination',
  'input',
  'button',
  'date-picker',
  'form',
  'form-item',
  'loading',
  'cascader',
  'time-picker',
]
const componentsEntry = components.map(item => `element-plus/lib/${item}`)
// dllplugin 入口地址集合
module.exports = componentsEntry

