import express from 'express'
import Song from '../models/Song'

const router = express.Router()

//Rutas ----------------------------------------------------

//Todas las canciones
router.get('/', async(req, res, next) => {
    let allSongs = await Song.find()
    res
    .status(200)
    .json(allSongs)
})

//Añadir canción
router.post('/', (req, res, next) => {
    console.log('Body recibido', req.body)
    res
    .status(201)
    .json(req.body)
})

//Canción por título
router.get('/:id', async(req, res, next) => {
    let aSong = await Song.findOne({ id: req.params.id })
    res
    .status(200)
    .json(aSong)
	
})

//Borrar canción por título
router.delete('/:id', async(req, res, next) => {
  let aSong = await Song.deleteOne({ id: req.params.id })
  res
  .status(204)
  .json({ message: 'Song deleted.'})

})
//FIN Rutas

export default router