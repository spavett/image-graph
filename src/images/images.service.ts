import { Injectable } from '@nestjs/common';
import { Image } from './models/image.model';

@Injectable()
export class ImagesService {
  private images: Image[] = [
    {
      id: "1",
      width: 300,
      height: 200,
      description: 'A beautiful landscape',
    },
    {
      id: "2",
      width: 1024,
      height: 768,
      description: 'A cute cat',
    },
  ];

  findAll() {
    return this.images;
  }

  findOneById(id: string) {
    return this.images.find((image) => image.id === id);
  }
}
