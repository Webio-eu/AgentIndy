import { Segment } from './types'

// Cz* Funkse pro mapovanie users do segmentu
export function filterUsersBySegment(users: any[], segment: Segment) {
  return users.filter(user=> user.status == segment.status);
}

/**
* Funkse pro renderovanie statu userujdelie
*/
export function setUserStatus(user: any, status: string) {
  user.status = status;
  return user;
}
