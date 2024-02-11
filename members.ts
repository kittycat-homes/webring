export type MemberImage = {
  description: string;
  url: URL;
};

export type Member = {
  name: string;
  url: URL;
  description?: string;
  image?: MemberImage;
};

export const members: Array<Member> = [
  {
    name: "tiger",
    url: new URL("https://tiger.kittycat.homes"),
    description: "the tiger",
  },
  {
    name: "zoe",
    url: new URL("https://zoe.kittycat.homes"),
  },
];

export function memberRoutes(): Array<string> {
  return members.map((member) => {
    return `members/${member.name}.json`;
  });
}
