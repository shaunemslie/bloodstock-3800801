import { Module } from '@nestjs/common';
import { FeedModule } from '@bloodstock/api/user/feature/feed';
import { UserModule } from '@bloodstock/api/user/feature/user';

@Module({
  imports: [UserModule, FeedModule],
  controllers: [],
})
export class AppModule {}
