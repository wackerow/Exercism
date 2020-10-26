type Roster = Map<string, string[]>;

export default class {
  private roster: Roster = new Map();

  public studentRoster(): Roster {
    let newRoster: Roster = new Map();
    this.roster.forEach((value, key) => {
      newRoster.set(key, [...value]);
    })
    return newRoster;
  }

  public addStudent(name: string, grade: number): void {
    const gradeString = grade.toString();
    const gradeRoster = this.roster.get(gradeString) || [];
    
    gradeRoster.push(name);
    gradeRoster.sort();
    this.roster.set(gradeString, gradeRoster);
  }

  public studentsInGrade(grade: number): string[] {
    const gradeRoster = this.roster.get(grade.toString()) || [];
    return [...gradeRoster];
  }
}