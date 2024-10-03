enum Fanlar {
  Mathematics = "Mathematics", // To'g'ri yozilishi kerak edi
  Physics = "Physics",
  Information = "Information",
  Chemistry = "Chemistry", // Capital letter bilan yoziladi
  History = "History",
}

interface Grades {
  fan: Fanlar;
  grade: number;
}

type Gradestype = 1 | 2 | 3 | 4 | 5;

class Fanbaholari {
  public grades: Grades[] = []; // 'Grades' -> 'grades' to'g'rilandi

  addGrade(fan: Fanlar, grade: Gradestype): void {
    this.grades.push({ fan, grade });
  }

  calculateAverageGrade(fan: Fanlar): number {
    // Method nomi kichik harflarda
    const filteredGrades = this.grades // 'filterdowngrade' nomi o'zgaruvchan bo'lishi kerak edi
      .filter((g) => g.fan === fan)
      .map((b) => b.grade);

    const overallGrade = filteredGrades.reduce((sum, value) => sum + value, 0);

    return filteredGrades.length ? overallGrade / filteredGrades.length : 0;
  }
}

interface MiddleGrade {
  fan: Fanlar;
  middleGrade: number;
}

class OverallGrade {
  private grades: Grades[] = [];

  addGrade(fan: Fanlar, grade: Gradestype): void {
    this.grades.push({ fan, grade });
  }

  hisoblaUmumiyOrtabaho(): MiddleGrade[] {
    const result: MiddleGrade[] = [];
    Object.values(Fanlar).forEach((fan) => {
      const filteredGrades = this.grades
        .filter((g) => g.fan === fan)
        .map((b) => b.grade);

      const overallGrade = filteredGrades.reduce(
        (sum, value) => sum + value,
        0
      );

      const ortaBaho = filteredGrades.length
        ? overallGrade / filteredGrades.length
        : 0;

      result.push({ fan, middleGrade: ortaBaho }); // 'middleGrade' qo'shildi
    });

    return result;
  }
}

class EditGrades extends Fanbaholari {
  editGrade(fan: Fanlar, oldBaho: Gradestype, newGrade: Gradestype): void {
    const index = this.grades.findIndex(
      // 'grades' to'g'rilandi
      (b) => b.fan === fan && b.grade === oldBaho
    );

    if (index !== -1) {
      this.grades[index].grade = newGrade;
    }
  }
}

console.log();
console.log();

export {};
