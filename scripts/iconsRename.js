const fs = require('fs')
const { join } = require('path')
const { v4: uuidv4 } = require('uuid')

/** 获取图标文件路径 */
const getIconPath = (iconPath = '') => join(__dirname, '../src/assets/gtaIcons', iconPath)

/** 重命名icon */
const iconsRename = () => {
  const icons = []

  fs.readdirSync(getIconPath()).forEach(item => {
    let iconName = item

    /** 如果还没生成过id，则需要新生成id */
    if (item.indexOf('id:') !== 0) {
      iconName = `id:${uuidv4().split('-').join('')}.png`
      fs.renameSync(getIconPath(item), getIconPath(iconName))
    }

    icons.push(iconName)
  })

  fs.writeFileSync(
    join(__dirname, '../src/config/icons.json'),
    JSON.stringify({ length: icons.length, list: icons }, null, 2)
  )
}

iconsRename()
