import { DiscoveryService } from './discovery.service';
import { v4 as uuid } from 'uuid';

export function loadPost(discoveryService: DiscoveryService, nb: number) {
  const yesterday = Date.now() - 24 * 60 * 60 * 1000;
  for (let i = 0; i < nb; i++) {
    discoveryService.insert({
      uuid: uuid(),
      owner: uuid(),
      postTime: new Date(yesterday + Math.random() * 24 * 60 * 60 * 1000),
    });
  }
}
