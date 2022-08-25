import "reflect-metadata";
import "dotenv/config";
import { MikroORM, EntityManager, EntityRepository } from "@mikro-orm/core";
import { User } from './entities/User'


const DI = {} as {
    orm: MikroORM,
    em: EntityManager,
    userRepository: EntityRepository<User>
};

(async () => {

    DI.orm = await MikroORM.init();

    await DI.orm.getSchemaGenerator().updateSchema();

    DI.userRepository = DI.orm.em.getRepository(User);

    const user = DI.orm.em.create(User, { name: "Negrao Michel" });

    await DI.userRepository.persistAndFlush(user);

})()


