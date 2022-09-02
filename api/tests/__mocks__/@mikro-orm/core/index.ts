import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";

function log(target: any) {
    console.log(target)
}

jest.spyOn(MikroORM, "init").mockImplementation(async () => {


    return {} as MikroORM<IDatabaseDriver<Connection>>

}) // mocked method on mocked module

export { MikroORM }
