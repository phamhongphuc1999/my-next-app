export const Code1 = `import { action, autorun, computed, makeObservable, observable } from 'mobx';

class Person {
  firstName: string;
  lastName: string;
  nickName: string;

  constructor(firstName: string, lastName: string, nickName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;

    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      nickName: observable,
      fullName: computed,
      setFirstName: action,
      setLastName: action,
      setNickName: action,
    });
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  setNickName(nickName: string) {
    this.nickName = nickName;
  }
}

const person = new Person('John', 'Doe', 'Dog');

autorun(() => {
  console.log('auto run when firstName changed', person.firstName);
});

autorun(() => {
  console.log('auto run when fullName change', person.fullName);
});

autorun(() => {
  console.log('auto run when nickName change', person.nickName);
});

autorun(() => {
  console.log('auto run when firstName or nickName change', person.fullName, ',', person.nickName);
});
console.log('-----------------------------------1');
person.setFirstName('ABC');
console.log('-----------------------------------2');
person.setLastName('DDDDD');
console.log('-----------------------------------3');
person.setNickName('AAAAAAAA');`;

export const ProxyImplement = `const observables = new Map(); // Stores tracked values
const dependencies = new Map(); // Maps state properties to dependent functions

function observable(obj) {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      if (!dependencies.has(prop)) dependencies.set(prop, new Set());
      observables.set(prop, target[prop]);
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      Reflect.set(target, prop, value, receiver);
      if (dependencies.has(prop)) {
        dependencies.get(prop).forEach((fn) => fn()); // Trigger reactions
      }
      return true;
    }
  });
}

const state = observable({ count: 0 });

function reaction(fn) {
  dependencies.get("count").add(fn);
}

reaction(() => {
  console.log(\`Count changed to: \${state.count}\`);
});

state.count = 1; // Logs: "Count changed to: 1"
state.count = 2; // Logs: "Count changed to: 2"
`;

export const ComputedImplement = `class ComputedValue {
  constructor(computeFn) {
    this.computeFn = computeFn;
    this.cachedValue = null;
    this.dirty = true;
  }

  get() {
    if (this.dirty) {
      this.cachedValue = this.computeFn();
      this.dirty = false;
    }
    return this.cachedValue;
  }

  markDirty() {
    this.dirty = true;
  }
}

const state = observable({ count: 1 });

const doubleCount = new ComputedValue(() => state.count * 2);

reaction(() => {
  console.log(\`Double count is: \${doubleCount.get()\`);
});

state.count = 2; // Logs: "Double count is: 4"
state.count = 3; // Logs: "Double count is: 6"
`;
