export const keys = [
    {key: 'id', value: 'ID'},
    {key: 'firstName', value: 'Имя'},
    {key: 'lastName', value: 'Фамилия'},
    {key: 'email', value: 'Email'},
    {key: 'phone', value: 'Телефон'}
];

export const options = [
    {
        value: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
        label: 'Маленький объем данных'
    },
    {
        value: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
        label: 'Большой объем данных'
    },
];