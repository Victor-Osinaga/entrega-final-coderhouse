const upload = async (req, res) => {
    try {
        if (!req.file) throw {msg: "Fallo al subir el recurso"}
        const image_url = `http://localhost:8080/images/${req.file.filename}`
        res.status(200).json({image_url})
    } catch (error) {
        res.status(400).json({status: "failed", error: error.msg})
    }
}

export {
    upload
}