export type MemberImage = {
  description: string;
  url: URL;
};

export type Member = {
  displayname: string;
  username: string;
  url: URL;
  description?: string;
  image?: MemberImage;
};

// add new members here!
export const members: Array<Member> = [
  {
    displayname: "tiger",
    username: "tiger",
    url: new URL("https://tiger.kittycat.homes"),
    description: "the tiger",
  },
  {
    displayname: "zoe",
    username: "zoe",
    url: new URL("https://zoe.kittycat.homes"),
  },
  {
    displayname: "real mc personface",
    username: "notfake",
    url: new URL("https://example.com"),
  },
];

// tells the router where the json pages for members are
export function memberRoutes(): Array<string> {
  return members.map((member) => {
    return `/members/${member.username}.json`;
  });
}

export function doesMemberAndPathMatch(member: Member, path: string): boolean {
  return path === `/members/${member.username}.json`;
}

export type MemberRelation = {
  last: Member;
  current: Member;
  next: Member;
};

export function memberInRelation(index: number): MemberRelation {
  return {
    last: members[(index - 1) % members.length],
    current: members[index % members.length],
    next: members[(index + 1) % members.length],
  };
}
