export type MemberImage = {
  url: string;
  description: string;
};

export type Member = {
  displayname: string;
  username: string;
  pronouns: string;
  url: string;
  description?: string;
  image?: MemberImage;
};

// add new members here!
export const members: Array<Member> = [
  {
    displayname: "tiger",
    pronouns: "she/her",
    username: "tiger",
    url: "https://tiger.kittycat.homes",
    description: "the tiger",
    image: {
      url: "/images/tiger-pink.webp",
      description: "google noto color emoji tiger but it's pink",
    },
  },
  {
    displayname: "zoe",
    username: "zoe",
    pronouns: "they/them",
    url: "https://zoe.kittycat.homes",
    image: {
      url: "/images/zoe.svg",
      description: "mutant standard bat emoji",
    },
  },
];

// tells the router where the json pages for members are
export function memberRoutes(): Array<string> {
  const jsonRoutes = members.map((member) => {
    return `/members/${member.username}.json`;
  });
  const frameRoutes = members.map((member) => {
    return `/frame/${member.username}`;
  });
  return jsonRoutes.concat(frameRoutes);
}

export function doesMemberAndPathMatch(member: Member, path: string): boolean {
  return path === `/members/${member.username}.json`;
}

export type MemberRelation = {
  last: Member;
  current: Member;
  next: Member;
};

function mod(x: number, m: number) {
  return ((x % m) + m) % m;
}

export function memberInRelation(index: number): MemberRelation {
  return {
    last: members[mod(index - 1, members.length)],
    current: members[index % members.length],
    next: members[(index + 1) % members.length],
  };
}
