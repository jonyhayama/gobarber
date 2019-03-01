const path = require('path')

class FileController {
  show (req, res) {
    let { file } = req.params
    let filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file
    )

    return res.sendFile(filePath)
  }
}

module.exports = new FileController()
