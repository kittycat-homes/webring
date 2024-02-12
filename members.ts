export type MemberImage = {
  url: string;
  description: string;
};

export type Member = {
  displayname: string;
  username: string;
  pronouns?: string;
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
    description: "funny little creature who does stuff",
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
    description: "world's best at rotating things in my brain",
    image: {
      url: "/images/zoe.svg",
      description: "mutant standard bat emoji",
    },
  },
  {
    displayname: "elysia",
    pronouns: "it she they fae xyr etc",
    username: "elysia",
    url: "https://le.alphamethyl.barr0w.net/~elysia/index.html",
    description: "girliepop high with blossoms and rainbows and autism",
    image: {
      url: "/images/elysia.webp",
      description:
        "pink image with a kitty type creature. next to it it says elysia",
    },
  },
  {
    displayname: "erysdren",
    pronouns: "it/she/they",
    username: "erysdren",
    url: "https://erysdren.me/",
    image: {
      url: "/images/erysdren.png",
      description:
        "a fuzzy humanoid shape, vaguely feminine, under an overwhelmingly bright light",
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
  const nextRoutes = members.map((member) => {
    return `/next/${member.username}`;
  });
  const lastRoutes = members.map((member) => {
    return `/next/${member.username}`;
  });
  return jsonRoutes
    .concat(frameRoutes)
    .concat(nextRoutes)
    .concat(lastRoutes)
    .concat("/everyone.json");
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
