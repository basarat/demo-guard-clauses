function update(button: number, person: Person | null) {
  if (button !== 1 || !person) { return; }
  if (person.age == null) { throw new Error('Person age not set'); }
  if (person.experience == null) { throw new Error('Person experience not set'); }

  person.experience += 10;
  person.age++;
}
