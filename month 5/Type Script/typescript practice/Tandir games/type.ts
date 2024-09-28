interface Person {
  id: number;
  name: string;
  lastName: string;
  age: number;
}

interface SportsMen extends Person {
  sport: string;
  medals: number;
}

interface CoachMen extends Person {
  experience: number;
}

type Role = SportsMen | CoachMen;

class AcedemyMembers {
  private members: Role[] = [];
  addMember(member: Role): void {
    this.members.push(member);
  }

  counterMembersRole(role: "SportsMen" | "CoachMen"): number {
    return this.members.filter(
      (member) =>
        (role === "SportsMen" && "medals" in member) ||
        (role === "CoachMen" && "experience" in member)
    ).length;
  }

  getTopAtletes(): SportsMen[] {
    const sportsmen = this.members.filter(
      (member) => "medals" in member
    ) as SportsMen[];

    return sportsmen.sort((a, b) => a.medals - b.medals).splice(0, 2);
  }
}

const academy = new AcedemyMembers();

academy.addMember({
  id: 1,
  name: "Hasanjon",
  lastName: "Abdulazizov",
  age: 21,
  sport: "Futbol",
  medals: 2,
});

academy.addMember({
  id: 2,
  name: "Abbozbek",
  lastName: "Usmonov",
  age: 22,
  sport: "Valeybol",
  medals: 21,
});

academy.addMember({
  id: 3,
  name: "Husain",
  lastName: "Buxoriy",
  age: 32,
  experience: 5,
});

academy.addMember({
  id: 4,
  name: "Sohib",
  lastName: "Burxonov",
  age: 34,
  experience: 6,
});

console.log(academy.counterMembersRole("CoachMen"));
console.log(academy.counterMembersRole("SportsMen"));

export{};
