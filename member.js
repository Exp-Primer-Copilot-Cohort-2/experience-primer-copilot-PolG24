function skillsMember() {
    var member = "Johne Doe";
    var skills = ['HTML', 'CSS', 'JavaScript'];
    return {
        getMember: function () {
            return member;
        },
        getSkills: function () {
            return skills;
        },
        addSkill: function (skill) {
            skills.push(skill);
        }
    };
}