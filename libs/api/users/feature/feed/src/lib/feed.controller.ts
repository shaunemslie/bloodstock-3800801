import { Feed } from '@bloodstock/shared/interfaces';
import { Controller, Get, Query } from '@nestjs/common';
import { delay, from, Observable } from 'rxjs';
import { FeedService } from './data-access/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Get()
  getFeed(@Query('id') id: string): Observable<Feed[]> {
    return from(this.feedService.fetchFeed(id)).pipe(delay(2000));
  }
}
