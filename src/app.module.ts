import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { PetsModule } from './pet/pets.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    PetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
