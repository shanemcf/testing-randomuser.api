
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('families');
const ul2 = document.getElementById('families2');
const url = 'https://randomuser.me/api/?results=5';
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let families = data.results;
        return families.map(function (family) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = family.picture.medium;
            span.innerHTML = `${family.name.first} ${family.name.last} ${family.email}`;
            append(li, img);
            append(li, span);
            append(ul, li);
            let names = `${family.name.first}`;
            let emails = `${family.email}`;
            let birthdate = `${family.dob.date}`;
            let cell = `${family.cell}`;
            let dataArray = `${family.name.first} ${family.name.last} ${family.email} ${family.dob.date} ${family.cell}`;
            let familyMember = { names, emails, birthdate, cell }
            console.log(dataArray, JSON.stringify(family.cell));
            console.log(familyMember) // familyMember is returned json as array

        })

    })
// .catch(function (error) {
//     console.log(JSON.stringify(error));
// });   
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let families2 = data.results;
        return families2.map(function (family) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = family.picture.medium;
            span.innerHTML = `${family.name.first} ${family.name.last} ${family.email}`;
            append(li, img);
            append(li, span);
            append(ul2, li);
            let dataArray2 = `${family.name.first} ${family.name.last} ${family.email} ${family.dob.date} ${family.cell}`;
            console.log(dataArray2);
        })

    })





    // https://randomuser.me/api/1.3/?format=pretty&inc=name,email,dob,location,cell&seed=myseed&results=10