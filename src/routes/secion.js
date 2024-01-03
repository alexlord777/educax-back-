const routes = require('express').Router();
const { Users } = require('../config/db');



const diff = (fecha1) => {
    const fecha2 = new Date();

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fecha2 - fecha1;

    // Puedes convertir la diferencia a otros formatos si lo deseas
    const diferenciaEnSegundos = diferenciaEnMilisegundos / 1000;
    const diferenciaEnMinutos = diferenciaEnSegundos / 60;
    const diferenciaEnHoras = diferenciaEnMinutos / 60;
    const diferenciaEnDias = diferenciaEnHoras / 24;

    return {
        segundos: diferenciaEnSegundos,
        minutos: diferenciaEnMinutos
    }
}


routes.post('/init', async (req, res) => {
    const date = new Date();

    console.log("hola");
    const Usuario = await Users.create({
        timeInit: date,
        times: {}
    })

    res.status(201).json({"id":Usuario.id})
})

routes.post('/test', async (req, res) => {
    const { id, tipo } = req.body;


    const u = await Users.findOne({
        where: {
            id: id,
        }
    });

    const t = diff(u.timeInit).segundos + " s"


    const up = await Users.update({ tipo: tipo, times: { test: t } }, {
        where: {
            id: id,
        },
    });

    res.json(up);
})


routes.post('/final',async (req, res) => {
    const { id } = req.body;

    const u = await Users.findOne({
        where: {
            id: id,
        }
    });

    const t = diff(u.timeInit).segundos + " s";

    const o= u.times
    o.total=t

    console.log(o);

    const up = await Users.update({  times: o }, {
        where: {
            id: id,
        },
    });

    res.json(up);

})

module.exports = routes