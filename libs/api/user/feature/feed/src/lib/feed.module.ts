import { Module } from '@nestjs/common';
import { FeedService } from './data-access/feed.service';
import { FeedController } from './feed.controller';

@Module({
  controllers: [FeedController],
  providers: [FeedService],
  exports: [FeedService],
})
export class FeedModule {}
