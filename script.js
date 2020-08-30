// $(document).ready(function () {

//     var url = "https://randomuser.me/api/?results=5";
//     var p = "";
//     var radioValue;
//     var loadMore;

// });
// fetch("https://randomuser.me/api/?results=5")
//     .then((response) => response.json())
//     .then(function (data) {
//         url = "https://randomuser.me/api/?results=5";
//         fetchInformation("https://randomuser.me/api/?results=5");
//     })
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function (data) {
//         console.log(data);
//     }
// });

//const ul = document.getElementById('family'); // Get the list to place family members
//const url = 'https://randomuser.me/api/?results=5'; // Get 5 family members
// fetch(url)
//   .then((resp) => resp.json()) // Transform the data into json
//   .then(function(data) {
//     // Create and append the li's to the ul
//     })
//   })
//   function createNode(element) {
//     return document.createElement(element);
// }

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('families');
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
            span.innerHTML = `${family.name.first} ${family.name.last}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })

    })
    // .catch(function (error) {
    //     console.log(JSON.stringify(error));
    // });   
