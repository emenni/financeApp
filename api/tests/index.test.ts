import "reflect-metadata";
import "dotenv/config";
import { MikroORM, EntityManager, EntityRepository } from "@mikro-orm/core";
import { User } from '../src/entities/User'
import { testConn } from './test-utils/testConn'


//jest.mock('MikroORM')

describe('database server loader', () => {

    const MockOrm = { em: { getRepository: jest.fn() } };

    beforeEach(() => {
        jest.spyOn(MikroORM, 'init').mockResolvedValue(MockOrm as any);
    });

    afterEach(() => {
        (MikroORM.init as jest.Mock).mockRestore();
        MockOrm.em.getRepository.mockRestore();
    });

    it('should connect to database', async () => {

        // given/when
        await testConn();

        // then
        expect(MikroORM.init).toHaveBeenCalledTimes(1);

    });
})