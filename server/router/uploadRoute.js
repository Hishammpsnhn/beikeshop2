import express from 'express';
import multer from 'multer';
import path from 'path';

const router  = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/')
    },
    filename(req, file, cb) {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      )
    },
  })
  
  function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
  
    if (extname && mimetype) {
      return cb(null, true)
    } else {
      cb('Images only!')
    }
  }
  
  const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb)
    },
  })
  
  router.post('/', upload.array('files', 10), (req, res) => {
    try {
        const files = req.files;
        console.log(files);
        res.status(200).json({ message: 'Files uploaded successfully', files });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'File upload failed', error });
      }
  })

export default router