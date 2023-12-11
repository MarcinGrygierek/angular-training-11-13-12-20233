// 1. Typy proste
let value = 100;
value = 2345;

const value2: number = 100;

// 2. Typy złożone
// 2.1 tablica
const arr = [1, 2, 3, 4, 5];
arr.push(100);
// arr.push("2123"); // błąd
const arr2: (number | string)[] = [1, 2, 3, 4, 5];
arr2.push("123");

// 2.2 obiekt
interface Obj {
    a: number;
    b: number;
    c?: number;
}

const obj: Obj = {
    a: 100,
    b: 234,
    c: 9
}

const obj2: Obj = {
    a: 23,
    b: 23,
}

// 2.3 krotka
const tupple: [number, string] = [1, "Marcin"];
// tupple.push("asd"); // TypeScript nie jest w stanie kontrtolować zawartości krotki po jej utworzeniu

// type aliases
type UserTupple = [number, string];
const user: UserTupple = [2, "Marian"];

// 3. any, never, unknown
let valueAny: any = 1000;
valueAny = "asdasd";
valueAny = true;
console.log(valueAny.length);

const foo = () => {
    throw new Error();
}

let valueUnknown: unknown = "lorem ipsum";
valueUnknown = 12123;
valueUnknown = "Lorem ipsum";
console.log((valueUnknown as string).length); // rzutowanie, sposób 1
console.log((<string>valueUnknown).length); // rzutowanie, sposób 2

// 4. typowanie funkcji
function bar(a: number, b = 12): number {
    return a + b;
}

const baz = (a: number, b = 12): number => a + b;

// 5. enum
enum UserRole {
    Admin = 'admin',
    User = 'user',
    Client = 'client'
}

enum UserRole2 { // antywzorzec - wartości elementów nie są stabilne
    SuperAdmin,
    Admin,
    User,
    Client
}

console.log(UserRole.Admin);

// 6. Unie i intersekcje
interface Foo {
    a: number;
    b: number;
}

interface Bar {
    c: number;
    d: number;
}

type Either = Foo | Bar;

const either: Either = {
    a: 10,
    b: 3,
}

type Both = Foo & Bar;

const both: Both = {
    a: 10,
    b: 11,
    c: 30,
    d: 12,
}

// 7. Typy generyczne
const apiCall = <P, R>(payload: P): R => {
    return {} as R;
}

const barData = apiCall<string, Bar>('testsetset');
