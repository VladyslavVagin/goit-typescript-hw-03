//======================================== Class Key ============================================
class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}
// ==============================================================================================
// ====================================== Class Person ==========================================
class Person {
  constructor(private key: Key) {
    this.key;
  }

  getKey(): Key {
    return this.key;
  }
}
// ===============================================================================================
// ==================================== abstract class House =====================================
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    key.getSignature() === this.key.getSignature() ? this.door = true : console.log('Door closed');
  }
}
// ===============================================================================================
// ========================================== class MyHouse ======================================
class MyHouse extends House {
  openDoor(key: Key): void {
    key.getSignature() === this.key.getSignature()
      ? (this.door = true)
      : console.log("Door closed");
  }
}

// ==============================================================================
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
