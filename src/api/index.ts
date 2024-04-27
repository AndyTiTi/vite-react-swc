// 定义一个接口来表示用户对象的结构
export interface User {
  id: number;
  login: string;
  avatar_url: string;

  node_id: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export const getUserList = <T>(): Promise<T[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users: T[] = [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Jim" },
      ] as T[];
      resolve(users);
    }, 1000);
  });
};
