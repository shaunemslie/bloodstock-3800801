import { Module } from '@nestjs/common';
import { FeedModule } from '@bloodstock/api/users/feature/feed';

@Module({
  imports: [FeedModule],
  controllers: [],
})
export class AppModule {}
