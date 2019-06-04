



  readBooks: (req, res) => {
    BookModel
    .find()
    .then( data => {
      if(data.length === 0) {
        res.status(404).send({message: "Todavia no hay libros"})
      } else {
        res.status(200).send(data)
      }
    })
    .catch( err => {
      res.status(500).send({message: "Error en la base"})
    });
 }};












//leerun libro
readBook: (req, res) => {
    let id = req.body.id;
    BookModel
      .findOne({ _id: id })
      .then(data => {
        if (data) {
          res.status(200).send({ data:data }).end();
        } else {
          res.status(400).send({ Error: 'No se encuentra el libro' });
        }
      })
      .catch(err => {
        res.status(500).send({ message: "Error en la base" }).end();
      });

  };





// crear libro
createBook: (req, res)=> {
  if (req.body.title && req.body.author && req.body.pageNumber){
  const title = req.body.title; 
  const author = req.body.author;
  const pageNumber = req.body.pageNumber;
  BookModel
.create({
  title,
  author,
  pageNumber
})
.then( data => {
  res.status(200).send({data:data}).end()   
})
.catch( err => {
 res.status(500).send({message: "Error en la base"}).end()
})
} else {
  res.status (400).send ({message: "Te falta alguno de estos: datos, manda titulo, autor y página"});
   }
 ;
} 


















_____



// Actualiza un libro
const title = "test", author = "test", pageNumber = "test", id = "id del libro"
BookModel
.findOneAndUpdate({
  _id: id
}, {
  title,
  author,
  pageNumber
})
.then( data => {
  res.status(200).send({data:data}).end()
})
.catch( err => {
  res.status(500).send({message: "Error en la base"}).end()
})




.find()
.then( data => {
  if(data.length === 0) {
    // codigo para cuando no existan libros
  } else {
    // codigo para cuando existan libros
  }
})
.catch( err => {
  res.status(500).send({message: "Error en la base"}).end()
});





  updateBook: (req, res) => {
    if (!(req.body.title && req.body.author && req.body.pageNumber && req.body.id)) {
      res.status(400).send({ Error: 'No son todos los campos' }).end();
    } else {
      const title = req.body.title;
      const author = req.body.author;
      const pageNumber = req.body.pageNumber;
      const id = req.body.id;
      BookModel
        .findOneAndUpdate({
          _id: id
        }, {
            title,
            author,
            pageNumber
          })
        .then(data => {
          res.status(201).send({ data: data }).end(); 
        .catch(err => {
          res.status(500).send({ message: "error en la base" }).end();
        })
    }
  }

__










/ Crear un libro
  createBook: (req, res) => {
    if (!(req.body.title && req.body.author && req.body.pageNumber)) {
      res.status(400).send({ Error: ' El usuario no se agrego! , Intentalo de nuevo ( Revisa los nombres )' });
    } else {
      const title = req.body.title;
      const author = req.body.author;
      const pageNumber = req.body.pageNumber;
      BookModel
        .create({
          title,
          author,
          pageNumber
        })
        .then(data => {
          res.status(201).send({ data: data }).end();
        })
        .catch(err => {
          res.status(500).send({ message: "Trono la Base de Datos o la creación del libro! D:" });
        })

    }
  },

  


  deleteBook: (req, res) => {
    let id = req.body.id;
    BookModel
      .deleteOne({ _id: id })
      .then(data => {
        res.status(200).send({ message: "Libro borrado!" }); //manda mensaje de borrado y el libro que se borro
      })
      .catch(err => {
        res.status(500).send({ message: "Trono la Base de Datos! D:" });
      });
  }

}