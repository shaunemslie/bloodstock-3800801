import { Bid, Listing, Loft } from '@prisma/client';

export interface Feed extends Listing {
  loft: Loft;
  bids: Bid[];
}
