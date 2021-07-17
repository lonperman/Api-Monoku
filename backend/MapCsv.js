const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
const fastcsv = require("fast-csv");


//Connection BD Mongo
const url = "mongodb://127.0.0.1:27017/";

//Instancias
const stream = fs.createReadStream("prueba_back.csv");
const csvData = [];

const csv = fastcsv
    .parse()
    .on("data", function (data) {
        csvData.push({
            FECHA: data[0],
            ID_EXTERNO: data[1],
            NOMBRE: data[2],
            ALBUM: data[3],
            BANDA: data[4],
            ARTISTA: data[5],
            DURACION: data[6],
            GENERO: data[7],
            SUBGENERO: data[8],
            BANDAS_SIMILARES: data[9],
            LABELS: data[10],
            INSTRUMENTOS: data[11],
        });
    })
    .on("end", function () {
        csvData.shift();

        console.log(csvData);

        mongodb.connect(
            url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err, client) => {
                if (err) throw err;

                client
                    .db("Api-Canciones")
                    .collection("Canciones")
                    .insertMany(csvData, (err, res) => {
                        if (err) throw err;

                        console.log(`Inserted: ${res.insertedCount} rows`);
                        client.close();
                    });
            }
        );
    });

stream.pipe(csv);