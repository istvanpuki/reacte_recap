import React from 'react';

function Input ({query, qlength}) {

    const user = {
        name: "Jane Doe",
        age: 15,
        city: "Budapest",
        country: "USA",
        address: {
            street: "Vaci",
            number: 118
        }
    }

    const user2 = {...user};
    user2.country="Magyarország";
    user2.address.number= 111;
    console.log("user: ", user);
    console.log("user2: ", user2);

    

   /*  let userName = user.name;
    let userAge = user.age;

    console.log(userName);
    console.log(userAge);
 */

    const {name, age} = user;
    console.log("Name: ", name);
    console.log("Age: ", age);

    //referencia
    const array1 = ["A", "B", "C"]
    const arrayX = ["X", "Y", "Z"]
    //spread operátor másolatot csinál, mert ha siman aztirod, hogy array2=array1 akkor ugyanarra a memóriaterületre mutat ezért megcsinalja mind2 tömbben a push-t
    const array2 = [...array1, ...arrayX];
    array2.push("D");
    console.log("Array1: ",array1)
    console.log("Array2: ",array2)

    let string1 = "ABC";
    let string2= string1;
    string2 += "D";
    console.log("String1: ",string1);
    console.log("String2: ",string2);

    const [a,b,c] = array1;
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);

    const [firstValue, ...leftover] = array2;
    console.log("first value:",firstValue)
    console.log("leftover:",leftover)

    return (
    //     <input type="text" className="inputElement" value={props.data.value} maxLength={props.data.length} />
        <input type="text" className="inputElement" value={query} maxLength={qlength} />
    )

}


export default Input;