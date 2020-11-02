import { Person } from './data';

export function Search(person: Person, text: string) {
    // Normalizar a string todos los datos
    return Object.values(person).some((val: string | number) => {
        const strmdfd = String(val).toLowerCase();
        return strmdfd.includes(text);
    });
}