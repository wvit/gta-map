const fs = require('fs')
const { join } = require('path')
const { v4: uuidv4 } = require('uuid')
const { stringify, parse } = require('qs')

/** 获取图标文件路径 */
const getIconPath = (iconPath = '') => join(__dirname, '../src/assets/gtaIcons', iconPath)

/** 重命名icon */
const iconsRename = () => {
  const icons = []
  const unnameIcons = []
  fs.readdirSync(getIconPath()).forEach(item => {
    if (item.indexOf('id:') === 0) {
      icons.push(item)
    } else {
      unnameIcons.push(item)
    }
  })
  const startIndex = icons.length + 1

  /** 将还没有生成名称的图标文件，按规则新生成名称 */
  unnameIcons.forEach((item, index) => {
    const iconName = `${stringify({
      id: uuidv4().split('-').join(''),
      sort: startIndex + index,
    })}.png`

    fs.renameSync(getIconPath(item), getIconPath(iconName))
    icons.push(iconName)
  })

  icons.sort((a, b) => {
    return parse(a.split('.')[0]).sort - parse(b.split('.')[0]).sort
  })

  fs.writeFileSync(
    join(__dirname, '../src/config/icons.json'),
    JSON.stringify({ length: icons.length, list: icons }, null, 2)
  )
}

iconsRename()
