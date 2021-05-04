import axios from 'axios';

class EIA_API {
    API;

    constructor(baseURL) {
        this.API = axios.create({
            baseURL: baseURL
        });
    }

    async getConsumptions(year, sector){
        let result;
        try {
            result = await this.API.get('/consumption', {
                params: {
                    year: year,
                    sector: sector
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getProductions(year, sector){
        let result;
        try {
            result = await this.API.get('/production', {
                params: {
                    year: year,
                    sector: sector
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getEmissions(year){
        let result;
        try {
            result = await this.API.get('/emission', {
                params: {
                    year: year
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getPopulations(year){
        let result;
        try {
            result = await this.API.get('/population', {
                params: {
                    year: year
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getStates(region_id, state_id, state_name){
        let result;
        try {
            result = await this.API.get('/state', {
                params: {
                    region_id: region_id,
                    state_id: state_id,
                    state_name: state_name
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getRegions(region_id, region_name){
        let result;
        try {
            result = await this.API.get('/region', {
                params: {
                    region_id: region_id,
                    region_name: region_name
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getYears(table){
        let result;
        try {
            result = await this.API.get(`/year/${table}`);
            result = result.data ? result.data : [];
            let formattedResult = [];
            result.forEach(record =>{
                formattedResult.push(record[0]);
            });
            return formattedResult;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getRenewableConsumptions(year, sector){
        let result;
        try {
            result = await this.API.get(`/renewable/consumption`, {
                params: {
                    year: year,
                    sector: sector
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getRenewableProductions(year, sector){
        let result;
        try {
            result = await this.API.get(`/renewable/production`, {
                params: {
                    year: year,
                    sector: sector
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getNonRenewableConsumptions(year, sector){
        let result;
        try {
            result = await this.API.get(`/nonrenewable/consumption`, {
                params: {
                    year: year,
                    sector: sector
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getNonRenewableProductions(year, sector){
        let result;
        try {
            result = await this.API.get(`/nonrenewable/production`, {
                params: {
                    year: year,
                    sector: sector
                }
            });
            result = result.data ? result.data : [];
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default EIA_API;