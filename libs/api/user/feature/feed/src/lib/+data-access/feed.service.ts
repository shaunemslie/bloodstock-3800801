import { Feed } from '@bloodstock/shared/interfaces';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class FeedService {
  async fetchFeed(id: string): Promise<Feed[]> {
    return (
      await prisma.listing.findMany({
        where: {
          NOT: {
            OR: {
              startPrice: null,
              price: null,
            },
          },
          userId: null,
          startDate: {
            lte: new Date(),
          },
          endDate: {
            gte: new Date(),
          },
          loft: {
            followers: {
              some: {
                userId: id,
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          loft: true,
          bids: {
            orderBy: {
              amount: 'desc',
            },
          },
        },
      })
    )
  }
}
