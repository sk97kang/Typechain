# Typechain

Learning Typescript by making a Blockchain with it

## Setting Typescript Up

1. yarn initialize

```
yarn init
```

2. `tsconfig.json` 설정

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true
  },
  "include": ["index.ts"],
  "exclude": ["node_modules"]
}
```

3. TS Comfile

- Make `index.js`, `index.js.map`

```
tsc
```

- tsc가 안될 시 아래 실행

```
npm install -g typescript
```

4. `package.json` 추가

- `yarn start`시 `tsc` 후 `index.js` 실행

```json
  "scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  }
```

---

## Typescript 기초

### Programe의 문제를 사전에 확인할 수 있다.

- Ok Case

```ts
const name = "Kan",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);

export {};
```

- Error Case : JS에서는 실행가능하나 TS에서는 ERROR 발생

```ts
const name = "Kan",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};
```

### Use Type

- 변수와 함수에 Value Type, Retrun Type을 각각 지정할 수 있다.

```ts
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi("Kan", 24, "male"));

export {};
```

### Use Interface

- Interface는 JS에서 사용이 안되므로 컴파일되지 않는다.
- Object를 받을 때 Interface로 argument 구현해놓는다.

```ts
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Kan",
  age: 24,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
```

### Use Class

- interface와 비슷하지만 JS로 컴파일됨(단, public, private 제외)
- permission
  - public : 내/외부 모두 접근 가능
  - private : 내부에서만 접근 가능, 외부에서 접근 불가

```ts
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const Kan = new Human("Kan", 24, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(Kan));

export {};
```

---

## Use tsc-watch

- Install tsc-watch

```bash
$ yarn add tsc-watch --dev
```

- Make Directory

  - dist : Comfile File
  - src : All ts File

- Change `tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

- Change `package.json`

```json
"scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
  }
```

- Add `.gitignore`

```
dist
```

- 실행
  - index.ts가 바뀔때마다 실행시켜줌

```
yarn start
```

- 실행이 안될때

```
yarn add typescript
```

---

## Make Simple BlockChaine

- TypeScript를 이용하여 Simple BlockChanine 구현
