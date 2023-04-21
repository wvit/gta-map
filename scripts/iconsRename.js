const fs = require('fs')
const { join } = require('path')

/** 获取图标文件路径 */
const getIconPath = (iconPath = '') => join(__dirname, '../src/assets/gtaIcons', iconPath)

const icons = fs.readdirSync(getIconPath()).sort((a, b) => {
  return a.split('.')[0] - b.split('.')[0]
})

icons.forEach((item, index) => {
  const newName = `${index + 1}.png`
  const iconPath = getIconPath(newName)

  /** 如果已经存在同名文件，就先重命名 */
  if (item !== newName && fs.existsSync(iconPath)) {
    fs.renameSync(iconPath, getIconPath(`${Math.random()}${index}.png`.slice(2)))
  }

  fs.renameSync(getIconPath(item), iconPath)
})

