import {Request, Response, NextFunction} from 'express';
import { QueryConfig, QueryOptions } from 'mariadb';
import { getNameOfJSDocTypedef } from 'typescript';
import db from './db';

const EIA_DB = new db({
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT as string) || 3360,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB
});

async function executeQuery(query: [string | QueryOptions, any]){
    try {
        return await EIA_DB.query(query)
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default {
    getStates: async (req : Request, res : Response, next : NextFunction)=>{
        let sql = "SELECT * FROM State WHERE 1=1"
        if(req.query.region_id){
            sql = sql.concat(" AND region_id=:region_id")
        }
        if(req.query.state_id){
            sql = sql.concat(" AND state_id=:state_id")
        }
        if(req.query.state_name){
            sql = sql.concat(" AND state_name=:state_name")
        }
        let query : [string | QueryOptions, any] = [
            {namedPlaceholders: true, sql: sql},
            {region_id: req.query.region_id, state_id: req.query.state_id, state_name: req.query.state_name}
        ];
        res.locals.queryData = await executeQuery(query);
        return next();
    },
    getRegions: async (req : Request, res : Response, next : NextFunction)=> {
        let sql = "SELECT * FROM Region WHERE 1=1"
        if(req.query.region_id){
            sql = sql.concat(" AND region_id=:region_id")
        }
        if(req.query.region_name){
            sql = sql.concat(" AND region_name=:region_name")
        }
        let query : [string | QueryOptions, any] = [
            {namedPlaceholders: true, sql: sql},
            {region_id: req.query.region_id, region_name: req.query.region_name}
        ];
        res.locals.queryData = await executeQuery(query);
        return next();
    },
    getConsumption: async (req : Request, res : Response, next : NextFunction)=> {
        let sql = "SELECT * FROM Consumption WHERE 1=1"
        if(req.query.state_id){
            sql = sql.concat(" AND state_id=:state_id")
        }
        if(req.query.year){
            sql = sql.concat(" AND year=:year")
        }
        let query : [string | QueryOptions, any] = [
            {namedPlaceholders: true, sql: sql},
            {state_id: req.query.state_id, year: req.query.year}
        ];
        res.locals.queryData = await executeQuery(query);
        return next();
    },
    getProduction: async (req : Request, res : Response, next : NextFunction) => {
        let sql = "SELECT * FROM Production WHERE 1=1"
        if(req.query.state_id){
            sql = sql.concat(" AND state_id=:state_id")
        }
        if(req.query.year){
            sql = sql.concat(" AND year=:year")
        }
        let query : [string | QueryOptions, any] = [
            {namedPlaceholders: true, sql: sql},
            {state_id: req.query.state_id, year: req.query.year}
        ];
        res.locals.queryData = await executeQuery(query);
        return next();
    },
    getPopulation: async (req : Request, res : Response, next : NextFunction) => {
        let sql = "SELECT * FROM Population WHERE 1=1"
        if(req.query.state_id){
            sql = sql.concat(" AND state_id=:state_id")
        }
        if(req.query.year){
            sql = sql.concat(" AND year=:year")
        }
        let query : [string | QueryOptions, any] = [
            {namedPlaceholders: true, sql: sql},
            {state_id: req.query.state_id, year: req.query.year}
        ];
        res.locals.queryData = await executeQuery(query);
        return next();
    },
    getEmissions: async (req : Request, res : Response, next : NextFunction) => {
        let sql = "SELECT * FROM Emission WHERE 1=1"
        if(req.query.state_id){
            sql = sql.concat(" AND state_id=:state_id")
        }
        if(req.query.year){
            sql = sql.concat(" AND year=:year")
        }
        let query : [string | QueryOptions, any] = [
            {namedPlaceholders: true, sql: sql},
            {state_id: req.query.state_id, year: req.query.year}
        ];
        res.locals.queryData = await executeQuery(query);
        return next();
    }

}