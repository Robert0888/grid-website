let cuvii: number = 3;

const getFullname = (name: string, surname: string) => {
    return name + " " + surname;
};
console.log(getFullname('Robi', 'Boby'));

interface User {
    name: string;
    age: number;
}