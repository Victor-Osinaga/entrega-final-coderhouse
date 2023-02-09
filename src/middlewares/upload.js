import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, path.join(process.cwd(), 'public/images' ))
    },
    filename(req, file, cb){
        cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage})
export {
    upload
}