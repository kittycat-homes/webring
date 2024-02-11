export type MemberImage = {
  description: string;
  url: string;
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
    image: {
      url: "/images/tiger-pink.webp",
      description: "google noto color emoji tiger but it's pink",
    },
  },
  {
    displayname: "zoe",
    username: "zoe",
    url: new URL("https://zoe.kittycat.homes"),
    image: {
      url: "/images/zoe.svg",
      description: "mutant standard bat emoji"
    }
  },
  {
    displayname: "real mc personface",
    username: "notfake",
    url: new URL("https://example.com"),
    image: {
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F56%2Fba%2Fc5%2F56bac5d0e29578e14e19c7ff03d936a3--mr-bean-electrical-engineering.jpg&f=1&nofb=1&ipt=4bcaf95947127f122b8b61f4da41964c101212c5d39a2936587b047326fed369&ipo=images",
      description: "mr eban"
    }
  },
  {
    displayname: "dream",
    username: "dream",
    url: new URL("https://youtube.com/@dreamwastaken"),
    description: "dream from minecraft",
    image: {
      url: "https://yt3.googleusercontent.com/t3jzM4s6Ao_QQ4Dnj7VT4vww77suGNwEEmQ-nIEDHEa8ehF4M-WfASj0rU8S6daX3eZfknKjufs=s176-c-k-c0x00ffffff-no-rj",
      description: "dream from minecraft"
    }
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
