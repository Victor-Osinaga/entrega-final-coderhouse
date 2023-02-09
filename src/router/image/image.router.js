import { Router } from "express";

import * as imageController from "../../controller/image/image.controller.js";
import { upload } from "../../middlewares/upload.js";

const v1Image = new Router();

v1Image.post('/', upload.single('img'), imageController.upload)

export {
    v1Image
}