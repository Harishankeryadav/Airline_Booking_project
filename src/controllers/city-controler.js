const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            seccess: true,
            message: 'successfully create a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}
//delete -> /city/:id
const destroy = async (req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: city,
            seccess: true,
            message: 'successfully deleted the city',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
}

//get. ->/city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            seccess: true,
            message: 'successfully fetched the city',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}
//Patch -> /city/:id
const update = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            seccess: true,
            message: 'successfully fetched the city',
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}
