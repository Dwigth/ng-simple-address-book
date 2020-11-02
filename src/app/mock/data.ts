export interface Person {
    id: number;
    name: string;
    lastName: string;
    phoneNumber: number;
    address: string;
}

export interface AddressBook {
    persons: Person[];
}

export const MOCK_DATA: AddressBook = {
    persons: [
        {
            id: 1,
            name: 'Pamela',
            lastName: 'Beesley Halpert',
            address: 'Scranton, Pensilvania',
            phoneNumber: 9923231231
        },
        {
            id: 2,
            name: 'Jim',
            lastName: 'Halpert',
            address: 'Scranton, Pensilvania',
            phoneNumber: 51564656516
        },
        {
            id: 3,
            name: 'Oscar',
            lastName: 'Martinez',
            address: 'Scranton, Pensilvania',
            phoneNumber: 65465454654
        },
        {
            id: 4,
            name: 'Dwight',
            lastName: 'Schrute',
            address: 'Scranton, Pensilvania',
            phoneNumber: 54654654654
        }
    ]
}