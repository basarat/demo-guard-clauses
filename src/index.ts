function update(button: number, person: Person | null) {
  if (button == 1 && person) {
    if (person.age != null) {
      if (person.experience != null) {
        person.experience += 10;
        person.age++;
      } else {
        throw new Error('Person experience not set');
      }
    } else {
      throw new Error('Person age not set');
    }
  }
}