import "dotenv/config";
import { MikroORM } from "@mikro-orm/core";
import { DB_CA, DB_DATABASE, DB_PASSWORD, DB_URL, DB_USER } from "../../src/constants";

export const testConn = async (drop: boolean = false) => {
    try {

        const orm = await MikroORM.init({
            entities: ['./dist/entities/*.js'],
            entitiesTs: ['./src/entities/*.ts'],
            user: DB_USER,
            password: DB_PASSWORD,
            type: 'postgresql',
            clientUrl: `${DB_URL}/${DB_DATABASE}`,
            debug: false,
            connect: false,
            driverOptions: DB_CA ? {
                connection: {
                    ssl: {
                        ca: DB_CA,
                    }
                }
            } : {},
            migrations: {
                disableForeignKeys: false,
            },
            schemaGenerator: {
                disableForeignKeys: false
            }
        })

        if (drop) {
            const generator = orm.getSchemaGenerator()
            await generator.dropSchema()
            await generator.updateSchema()
        }
    } catch (e) {
        console.error(e)
    }
}