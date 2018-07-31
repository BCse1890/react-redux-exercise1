import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDOPZ-Gx1PaKPr3ircFtKKG5T5zNzBZTHo",
    authDomain: "expensify-69ea3.firebaseapp.com",
    databaseURL: "https://expensify-69ea3.firebaseio.com",
    projectId: "expensify-69ea3",
    storageBucket: "expensify-69ea3.appspot.com",
    messagingSenderId: "298270438541"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/* 
// child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// child added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


const onValueChange = database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
}, (e) => {
    "Error reading data";
});
 */


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });



//   database.ref('expenses').push({
//     description: 'Bread',
//     note: 'loaf',
//     amount: 233,
//     createdAt: 1000
//   });

//   database.ref('expenses').push({
//     description: 'Rent',
//     note: 'April',
//     amount: 40000,
//     createdAt: 2000
//   });

//   database.ref('expenses').push({
//     description: 'Fruit',
//     note: 'Apples',
//     amount: 492,
//     createdAt: 3001
//   });


//   const onValueChange = database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//   }, (e) => {
//       console.log('Error with fetching data', e);
//   });

//   database.ref().update({
//     name: 'George',
//     'job/title': 'Removals manager',
//     'location/city': 'Timbuktoo'
//   })

//   const onValueChange = database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with fetching data', e);
//   });

//   database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     });

//     setTimeout(() => {
//         database.ref('age').set(32);
//     }, 3500);

//     setTimeout(() => {
//         // calling off turns subscription off if we wish to
//         database.ref('age').off();
//     }, 7000);

//     setTimeout(() => {
//         database.ref('age').set(31);
//     }, 10500);

//   database.ref()
//     // use once when referencing the database once
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }) 
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });
    

//   database.ref().set({
//       name: 'Bristol Bob Currie', 
//       age: 52,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Bristol',
//           country: 'United Kingdom'
//       },
//   }).then(() => {
//       console.log("Data is saved.");
//   }).catch((e) => {
//       console.log('This failed,', e);
//   });

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/City': 'Seattle'
//   });

//   //database.ref().set('This is my data');

//   database.ref('age').set(53);
//   //database.ref('isSingle').set(false);
//   //database.ref('location/city').set('South Molton');
//   database.ref('attributes').set({
//       height: 1.92,
//       weight: 81
//   }).then(() => {
//     console.log('Second call worked');
//   }).catch((e) => {
//       console.log('Failure message,', e);
//   });
  
//   database.ref('isSingle').remove().then(() => {
//       console.log('isSingle removed from database');
//   }).catch((e) => {
//       console.log('isSingle remove failed', e);
//   });
  // set null is the same as using remove()
  //database.ref('isSingle').set(null);

//   database.ref().update({
//       name: 'Mike',
//       age: 29,
//       job: 'Software developer',
//       isSingle: null
//   });
  