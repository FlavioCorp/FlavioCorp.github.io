const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB (debes tener MongoDB instalado localmente o configurar una conexión remota)
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Definición del esquema de comentario
const CommentSchema = new mongoose.Schema({
    name: String,
    content: String,
    timestamp: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', CommentSchema);

// Middleware para procesar JSON y datos de formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para obtener todos los comentarios
app.get('/comments', async (req, res) => {
    try {
        const comments = await Comment.find().sort({ timestamp: -1 });
        res.json(comments);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Ruta para crear un nuevo comentario
app.post('/comments', async (req, res) => {
    try {
        const { name, content } = req.body;
        const newComment = new Comment({ name, content });
        await newComment.save();
        res.status(201).send('Comentario creado correctamente');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
