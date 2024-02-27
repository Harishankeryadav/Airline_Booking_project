const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) { 
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.error("Error creating city:", error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.error("Error deleting city:", error);
            throw error;
        }
    }

    async updateCity(cityId, data) {
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // return city;
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;

        } catch (error) {
            console.error("Error update city:", error);
            throw error;
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
            
        } catch (error) {
            console.error("Error fetch city:", error); 
            throw error;  
        }
    }
    async getAllCity(){
        try {
            const cities = await City.findAll();
            return cities;
            
        } catch (error) {
            console.error("Error fetching all cities:", error); 
            throw error;  
        }
    }
}


module.exports = CityRepository;
