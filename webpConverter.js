/* eslint-disable no-console */
const sharp = require('sharp')
const fs = require('fs-extra')

const imageCoverter = async (src, dest) => {
  await fs.emptyDir(dest)
  try {
    fs.readdirSync(src)
      .forEach(async (filename) => {
        const webpOriSrc = `${src}/${filename}`
        const webpOriDest = `${dest}/${filename}`

        if (filename.includes('webp')) {
          try {
            const webpFilename = await fs.copy(webpOriSrc, webpOriDest)
            console.log(`Copied to ${webpFilename}`)
          } catch (err) {
            console.error(err)
          }
        } else {
          convertToWebp(src, dest, filename)
        }
      })
  } catch (err) {
    console.error(err)
  }
}

const convertToWebp = async (src, dest, file) => {
  const newFilename = file.split('.').shift() + '.webp'
  const destDir = `${dest}/${newFilename}`

  await sharp(src + '/' + file)
    .webp()
    .toBuffer()
    .then(data => {
      fs.writeFile(destDir, data)
        .then(() => console.log(`Converted to ${newFilename}`))
    })
    .catch(err => console.log(err))
}

const jpgSrc = './src/assets/images/jpg-original'
const webpDest = './src/assets/images/webp-converted'

imageCoverter(jpgSrc, webpDest)
