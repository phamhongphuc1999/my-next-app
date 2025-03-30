export const Code1 = `class Person {
  @observable firstName = "Michel";
  @observable lastName = "Weststrate";
  @observable nickName;
  
  @computed get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const michel = new Person();

// Reaction: log the profile info whenever it changes
autorun(() => console.log(person.nickName ? person.nickName : person.fullName));

// Example React component that observes state
const profileView = observer(props => {
  if (props.person.nickName)
    return <div>{props.person.nickName}</div>
  else
    return <div>{props.person.fullName}</div>
});

// Action:
setTimeout(() => michel.nickName = "mweststrate", 5000)

React.render(React.createElement(profileView, { person: michel }), document.body);`;

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
