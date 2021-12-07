// function User (name, username, email) {
//   this.name = name
//   this.username = username
//   this.email = email
//   this.level = 1
//   this.printInfo = function () {
//     console.log(`
//       Name: ${this.name}
//       Username: ${this.username}
//       Email: ${this.email}
//       Level: ${this.level}
//     `)
//   }
// }

// function Mod (name, username, email, phone) {
//   User.call(this, name, username, email)
//   this.phone = phone
//   this.canBan = true
//   this.canKick = true
//   this.canMove = true
// }

// const user1 = new User('John Doe', 'johndoe', 'johndoe@gmail.com')
// const user2 = new User('Jane Doe', 'janedoe', 'janedoe@gmail.com')

// user2.email = 'something else'
// user2.level = 2

// console.log(user1)
// console.log(user2)

// user1.printInfo()
// user2.printInfo()

// const mod1 = new Mod('Jack Doe', 'jackdoe', 'jackdoe@gmail.com', 1234567890)

// console.log(mod1)

// class User {
//   constructor(name, username, email) {
//     this.name = name
//     this.username = username
//     this.email = email
//     this.level = 1
//   }

//   printInfo() {
//     console.log(`
//       Name: ${this.name}
//       Username: ${this.username}
//       Email: ${this.email}
//       Level: ${this.level}
//     `)
//   }
// }

// class Mod extends User {
//   constructor(name, username, email, phone) {
//     super(name, username, email)
//     this.phone = phone
//     this.canBan = true
//     this.canKick = true
//     this.canMove = true
//   }
// }

// const user1 = new User('John Doe', 'johndoe', 'johndoe@gmail.com')
// const user2 = new User('Jane Doe', 'janedoe', 'janedoe@gmail.com')

// user2.email = 'something else'
// user2.level = 2

// console.log(user1)
// console.log(user2)

// user1.printInfo()
// user2.printInfo()

// const mod1 = new Mod('Jack Doe', 'jackdoe', 'jackdoe@gmail.com', 1234567890)

// console.log(mod1)


// const user = (name, username, email) => ({
//     name, username, email,
//     level: 1,
//     printInfo() {
//       console.log(`
//       Name: ${this.name}
//       Username: ${this.username}
//       Email: ${this.email}
//       Level: ${this.level}
//     `)
//     }
//   })

//   const mod = (name, username, email, phone) => ({
//     ...user(name, username, email),
//     phone,
//     canBan: true,
//     canKick: true,
//     canMove: true
//   })

// const user1 = user('John Doe', 'johndoe', 'johndoe@gmail.com')
// const user2 = user('Jane Doe', 'janedoe', 'janedoe@gmail.com')

// user2.email = 'something else'
// user2.level = 2

// console.log(user1)
// console.log(user2)

// user1.printInfo()
// user2.printInfo()

// const mod1 = mod('Jack Doe', 'jackdoe', 'jackdoe@gmail.com', 1234567890)

// console.log(mod1)

// let obj1 = {
//   a: 5
// }

// let obj2 = {
//   ...obj1,
//   b: 2
// }

// console.log(obj2)
