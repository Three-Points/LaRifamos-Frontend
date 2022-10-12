import { createServer, Factory, JSONAPISerializer, Model } from "miragejs";
import data from "./data/rifasPage.mock.json";
import { faker } from "@faker-js/faker";

const raffles = data.raffles;
const generator = (schema, min = 1, max) => {
  max = max || min;
  return Array.from({
    length: faker.random.number({
      min,
      max,
    }),
  }).map(() => {
    const innerGen = (anySchema) =>
      Object.keys(anySchema).reduce((entity, key) => {
        if (
          Object.prototype.toString.call(anySchema[key]) === "[object Object]"
        ) {
          entity[key] = innerGen(anySchema[key]);
          return entity;
        }
        entity[key] = faker.fake(anySchema[key]);
        return entity;
      }, {});

    return innerGen(schema);
  });
};

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      raffle: Model,
    },

    factories: {
      image: Factory.extend({
        url() {
          return faker.image.imageUrl();
        },
      }),
      raffle: Factory.extend({
        id() {
          return faker.datatype.uuid();
        },

        title() {
          return faker.commerce.productName();
        },
        price() {
          return faker.commerce.price(20, 400, 2);
        },
        init_date() {
          return faker.datatype.datetime();
        },
        raffle_date() {
          return faker.datatype.datetime();
        },
        delivery_date() {
          return faker.datatype.datetime();
        },
        participants() {
          return faker.datatype.number({ min: 0, max: 149 });
        },
        total_participants() {
          return faker.datatype.number({ min: 150, max: 900 });
        },
        category() {
          let categories = [
            "Celulares",
            "Televisores",
            "Consolas",
            "Eventos",
            "Viajes",
          ];
          let randomCategoryIndex = Math.floor(
            Math.random() * categories.length
          );
          let randomCategory = categories[randomCategoryIndex];
          return randomCategory;
        },
        images() {
          let image = [
            {
              url: faker.image.imageUrl(),
            },
            {
              url: faker.image.imageUrl(),
            },
            {
              url: faker.image.imageUrl(),
            },
            {
              url: faker.image.imageUrl(),
            },
            {
              url: faker.image.image(),
            },
          ];
          return image;
        },
        description() {
          return faker.commerce.productDescription();
        },
        user() {
          return faker.name.fullName();
        },
      }),
    },

    seeds(server) {
      let raffles = server.createList("raffle", 8);
      server.db.createCollection(raffles);
    },

    routes() {
      this.namespace = "api";

      this.get("/raffles", (schema) => {
        return this.db.raffles;
        //return  schema.raffles.all();
      });

      this.get("/raffles/:id", (schema, request) => {
        let id = request.params.id;
        return this.db.raffles.findBy({ id: id });
      });
    },
  });

  return server;
}
