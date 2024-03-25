import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesResolver } from './images.resolver';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  providers: [ImagesService, ImagesResolver],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      path: '/images',
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: 'src/schema.gql',
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
})
export class ImagesModule {}
