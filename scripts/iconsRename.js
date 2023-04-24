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
    const iconName = item.split('.')[0]
    if (item.indexOf('sort=') === 0) {
      icons.push(iconName)
    } else {
      unnameIcons.push(iconName)
    }
  })

  /** 获取最后一个图标的sort排序索引 */
  const startIndex = Number(parse(icons[icons.length - 1])?.sort || 0) + 1

  /** 将还没有生成名称的图标文件，按规则新生成名称 */
  unnameIcons.forEach((item, index) => {
    const iconName = stringify({
      sort: startIndex + index,
      id: uuidv4().split('-').join(''),
    })

    fs.renameSync(getIconPath(item), getIconPath(`${iconName}.png`))
    icons.push(iconName)
  })

  icons.sort((a, b) => {
    return parse(a).sort - parse(b).sort
  })

  fs.writeFileSync(
    join(__dirname, '../src/config/icons.json'),
    JSON.stringify(
      {
        length: icons.length,
        list: icons.map(item => {
          const { id } = parse(item)
          return { id, iconName: item, type: 'image' }
        }),
      },
      null,
      2
    )
  )
}

iconsRename()
