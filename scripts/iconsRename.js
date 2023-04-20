const fs = require('fs')
const { join } = require('path')

const assetPath = join(__dirname, '../src/assets/test')

fs.readdirSync(assetPath).forEach((item, index) => {
  const newName = `${index + 1}.png`
  const iconPath = join(assetPath, newName)
  const findIcon = fs.existsSync(iconPath)

  if (findIcon) {
    fs.renameSync(iconPath, `${Math.random()}${index}`.slice(2))
  }

  fs.renameSync(join(assetPath, item), newName)
})
