const mapping: Record<string, string> = {
  comments: 'comment',
  likes: 'like',
  platforms: 'platform',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
