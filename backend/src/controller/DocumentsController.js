const { v4: uuidv4 } = require("uuid");

const documents = [
  {
    id: uuidv4(),
    author: "Heytor",
    updated_at: new Date("2023-08-26"),
    title: "",
  },
  {
    id: uuidv4(),
    author: "Jhonatan",
    updated_at: new Date("2021-10-07"),
    title: "",
  },
  {
    id: uuidv4(),
    author: "Rafael",
    updated_at: new Date("2021-02-28"),
    title: "",
  },
  {
    id: uuidv4(),
    author: "Eduardo",
    updated_at: new Date("2022-01-05"),
    title: "",
  },
];

class DocumentsController {
  findAll(request, response) {
    const { initial_date, final_date } = request.query;

    if (!initial_date || !final_date) {
      return response
        .json({
          status: "error",
          message: "Data inicial e final são obrigatórias",
        })
        .status(400)
        .send();
    }

    const documentsFiltered = [];

    documents.forEach((doc) => {
      if (
        doc.updated_at >= new Date(initial_date) &&
        doc.updated_at <= new Date(final_date)
      ) {
        documentsFiltered.push(doc);
      }
    });

    const orderedDocuments = documentsFiltered.sort(function (a, b) {
      if (a.updated_at > b.updated_at) {
        return 1;
      }
      if (a.updated_at < b.updated_at) {
        return -1;
      }
      return 0;
    });

    return response.json(orderedDocuments).send();
  }

  findById(request, response) {
    const { id } = request.params;

    if (!id) {
      return response
        .json({
          status: "error",
          message: "Id é obrigatório",
        })
        .status(400)
        .send();
    }

    const document = documents.find((doc) => doc.id === id);
    return response.json(document).send();
  }

  create(request, response) {
    const { author, title } = request.body;

    if (!author) {
      return response
        .json({
          status: "error",
          message: "Parâmetro author é obrigatório",
        })
        .status(400)
        .send();
    }

    if (!title) {
      return response
        .json({
          status: "error",
          message: "Parâmetro title é obrigatório",
        })
        .status(400)
        .send();
    }

    documents.push({
      id: uuidv4(),
      author,
      title,
      updated_at: new Date(),
    });

    return response.status(201).send();
  }

  update(request, response) {
    const { id } = request.params;
    const { author, title } = request.body;

    const index = documents.findIndex((doc) => doc.id === id);

    if (!author) {
      return response
        .json({
          status: "error",
          message: "Parâmetro author é obrigatório",
        })
        .status(400)
        .send();
    }

    if (!title) {
      return response
        .json({
          status: "error",
          message: "Parâmetro title é obrigatório",
        })
        .status(400)
        .send();
    }

    documents[index] = {
      id,
      author,
      title,
      updated_at: new Date(),
    };
    return response.status(204).send();
  }

  delete(request, response) {
    const { id } = request.params;

    const index = documents.findIndex((doc) => doc.id === id);

    documents.splice(index, 1);

    return response.status(204).send();
  }
}

module.exports = DocumentsController;
