import { Query, Resolver, Args, ResolveReference, Int } from '@nestjs/graphql';
import { ImagesService } from './images.service';
import { Image } from './models/image.model';

@Resolver((of) => Image)
export class ImagesResolver {
  constructor(private imagesService: ImagesService) {}

  @Query(returns => [Image])
  async allImages() {
    return this.imagesService.findAll();
  }

  @Query(returns => Image)
  async image(@Args({ name: 'id', type: () => Int }) id: string) {
    return this.imagesService.findOneById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.imagesService.findOneById(reference.id);
  }
}
