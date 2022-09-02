import { MikroORM } from "@mikro-orm/core";


describe('database server loader', () => {


    beforeEach(() => {
    });

    afterEach(() => {
        (MikroORM.init as jest.Mock).mockRestore();
    });

    it('should load mikro-orm instance', async () => {

        // given/when
        //const mocked = jest.spyOn(MikroORM, "init")
        let spy = MikroORM.init({}); // mocked method on mocked module
        //console.log('mock instances', typeof MikroORM.init.valueOf(), MikroORM.init.valueOf())
        console.log('mock instances', typeof spy)


        // then
        // expect(MikroORM.init).toHaveBeenCalledTimes(1);
        // expect(spy).toBeInstanceOf(MikroORM.init);

    });
})