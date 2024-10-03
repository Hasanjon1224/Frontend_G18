
var AcedemyMembers = /** @class */ (function () {
    function AcedemyMembers() {
        this.members = [];
    }
    AcedemyMembers.prototype.addMember = function (member) {
        this.members.push(member);
    };
    AcedemyMembers.prototype.counterMembersRole = function (role) {
        return this.members.filter(function (member) {
            return (role === "SportsMen" && "medals" in member) ||
                (role === "CoachMen" && "experience" in member);
        }).length;
    };
    AcedemyMembers.prototype.getTopAtletes = function () {
        var sportsmen = this.members.filter(function (member) { return "medals" in member; });
        return sportsmen.sort(function (a, b) { return a.medals - b.medals; }).splice(0, 2);
    };
    return AcedemyMembers;
}());
var academy = new AcedemyMembers();
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
