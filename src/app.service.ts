import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from './services/prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async getHello(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }
}
