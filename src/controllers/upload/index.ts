import multer from 'multer';
import * as path from 'path';

// Set up storage engine
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req: any, file: any, cb: any) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // Limit file size to 1MB
    fileFilter: function (req: any, file: any, cb: any) {
        checkFileType(file, cb);
    }
}).single('myFiles');

// Check file type
function checkFileType(file: any, cb: any) {
    const filetypes = /jpeg|jpg|png|gif|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

module.exports.upload = (req: any, res: any) => {

    upload(req, res, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            console.log(req.file);
            if (req.file == undefined) {
                res.send('Error: No File Selected!');
            } else {
                res.send(`File Uploaded: ${req.file.filename}`);
            }
        }
    });
    // res.status(200).json({message: 'Uploaded file successfully'});
}