const person = {
  name: 'Teja',
  Age: 8,
  location: {
    city: 'Hyderabad',
    temp: 39
  }
};

const { name: firstName = 'Anonymous', Age } = person;

console.log(`${firstName} is ${Age}`);
const { city, temp: temperature } = person.location;
console.log(`Its ${temperature} in ${city}`);

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pensylvania',
  '19147'
];

const [street, city = 'Houston', state = 'Texas'] = address;
console.log(`you are in ${city} ${state}`);
