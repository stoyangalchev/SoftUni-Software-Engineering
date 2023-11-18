export const getContacts = () => {
    return fetch('http://localhost:3030/jsonstore/phonebook')
        .then(res => res.json())
        .then(result => Object.values(result))
};