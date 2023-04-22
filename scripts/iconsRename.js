const fs = require('fs')
const { join } = require('path')
const { v4: uuidv4 } = require('uuid')
const { stringify } = require('qs')

/** 获取图标文件路径 */
const getIconPath = (iconPath = '') => join(__dirname, '../src/assets/gtaIcons', iconPath)

/** 重命名icon */
const iconsRename = () => {
  const icons = []
  const unnameIcons = []

  fs.readdirSync(getIconPath()).forEach((item, index) => {
    /** 如果还没生成过id，则需要新生成id */
    if (item.indexOf('id:') !== 0) {
      const iconName = `${stringify({ id: uuidv4().split('-').join(''), sort: index + 1 })}.png`
      // fs.renameSync(getIconPath(item), getIconPath(iconName))
      unnameIcons.push(iconName)
    } else {
      icons.push(item)
    }
  })

  console.log(11111, unnameIcons)

  // fs.writeFileSync(
  //   join(__dirname, '../src/config/icons.json'),
  //   JSON.stringify({ length: icons.length, list: icons }, null, 2)
  // )
}

iconsRename()
