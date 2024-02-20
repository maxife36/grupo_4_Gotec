"use strict";
const { User } = require("../models");
const { v4: uuidv4 } = require("uuid");

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersArray = [
      {
        userId: uuidv4(),
        admin: 1,
        fullname: "John Doe",
        email: "john@example.com",
        birthday: new Date(1990, 5, 15),
        address: "123 Main St, Cityville",
        profileImg: "/profile_user1.png",
        username: "john_doe_123",
        password: "securePass1",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Jane Smith",
        email: "jane@example.com",
        birthday: new Date(1988, 8, 22),
        address: "456 Oak St, Townsville",
        profileImg: "/profile_user2.png",
        username: "jane_smith_456",
        password: "strongPassword456",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Alice Johnson",
        email: "alice@example.com",
        birthday: new Date(1995, 3, 10),
        address: "789 Pine St, Villagetown",
        profileImg: "/profile_user3.png",
        username: "alice_johnson_789",
        password: "passForAlice789",
      },
      {
        userId: uuidv4(),
        admin: 1,
        fullname: "Bob Anderson",
        email: "bob@example.com",
        birthday: new Date(1985, 12, 5),
        address: "101 Elm St, Hamletville",
        profileImg: "/profile_user4.png",
        username: "bob_anderson_101",
        password: "bobPass101",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Eva Taylor",
        email: "eva@example.com",
        birthday: new Date(1992, 6, 30),
        address: "222 Maple St, Riverside",
        profileImg: "/profile_user5.png",
        username: "eva_taylor_222",
        password: "evaPass222",
      }, 
      {
        userId: uuidv4(),
        admin: 1,
        fullname: "Michael Brown",
        email: "michael@example.com",
        birthday: new Date(1987, 9, 18),
        address: "555 Oak Lane, Greenvale",
        profileImg: "/profile_user6.png",
        username: "michael_brown_555",
        password: "michaelPass555",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Emily White",
        email: "emily@example.com",
        birthday: new Date(1993, 4, 8),
        address: "777 Cedar Road, Lakeside",
        profileImg: "/profile_user7.png",
        username: "emily_white_777",
        password: "emilyPass777",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Daniel Miller",
        email: "daniel@example.com",
        birthday: new Date(1989, 11, 25),
        address: "888 Pine Street, Hilltop",
        profileImg: "/profile_user8.png",
        username: "daniel_miller_888",
        password: "danielPass888",
      },
      {
        userId: uuidv4(),
        admin: 1,
        fullname: "Olivia Davis",
        email: "olivia@example.com",
        birthday: new Date(1991, 7, 12),
        address: "999 Birch Avenue, Meadowview",
        profileImg: "/profile_user9.png",
        username: "olivia_davis_999",
        password: "oliviaPass999",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Matthew Turner",
        email: "matthew@example.com",
        birthday: new Date(1986, 2, 28),
        address: "333 Maple Drive, Brookside",
        profileImg: "/profile_user10.png",
        username: "matthew_turner_333",
        password: "matthewPass333",
      },
      {
        userId: uuidv4(),
        admin: 1,
        fullname: "Sophia Clark",
        email: "sophia@example.com",
        birthday: new Date(1988, 6, 22),
        address: "123 Pine Lane, Hillside",
        profileImg: "/profile_user11.png",
        username: "sophia_clark_123",
        password: "sophiaPass123",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Jackson Lee",
        email: "jackson@example.com",
        birthday: new Date(1992, 3, 14),
        address: "456 Oak Road, Lakeshore",
        profileImg: "/profile_user12.png",
        username: "jackson_lee_456",
        password: "jacksonPass456",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Abigail Turner",
        email: "abigail@example.com",
        birthday: new Date(1989, 11, 5),
        address: "789 Cedar Street, Meadowview",
        profileImg: "/profile_user13.png",
        username: "abigail_turner_789",
        password: "abigailPass789",
      },
      {
        userId: uuidv4(),
        admin: 1,
        fullname: "Ethan Martinez",
        email: "ethan@example.com",
        birthday: new Date(1993, 8, 18),
        address: "101 Elm Avenue, Brookside",
        profileImg: "/profile_user14.png",
        username: "ethan_martinez_101",
        password: "ethanPass101",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Ava Taylor",
        email: "ava@example.com",
        birthday: new Date(1987, 5, 2),
        address: "222 Birch Drive, Riverside",
        profileImg: "/profile_user15.png",
        username: "ava_taylor_222",
        password: "avaPass222",
      },{
        userId: uuidv4(),
        admin: 1,
        fullname: "Lucas Brown",
        email: "lucas@example.com",
        birthday: new Date(1989, 4, 15),
        address: "321 Maple Street, Hilltop",
        profileImg: "/profile_user16.png",
        username: "lucas_brown_321",
        password: "lucasPass321",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Scarlett White",
        email: "scarlett@example.com",
        birthday: new Date(1995, 10, 8),
        address: "654 Birch Lane, Meadowview",
        profileImg: "/profile_user17.png",
        username: "scarlett_white_654",
        password: "scarlettPass654",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Henry Turner",
        email: "henry@example.com",
        birthday: new Date(1986, 7, 25),
        address: "987 Cedar Road, Riverside",
        profileImg: "/profile_user18.png",
        username: "henry_turner_987",
        password: "henryPass987",
      },
      {
        userId: uuidv4(),
        admin: 1,
        fullname: "Mia Martinez",
        email: "mia@example.com",
        birthday: new Date(1991, 2, 18),
        address: "555 Oak Drive, Brookside",
        profileImg: "/profile_user19.png",
        username: "mia_martinez_555",
        password: "miaPass555",
      },
      {
        userId: uuidv4(),
        admin: 0,
        fullname: "Noah Davis",
        email: "noah@example.com",
        birthday: new Date(1988, 9, 30),
        address: "789 Elm Avenue, Lakeside",
        profileImg: "/profile_user20.png",
        username: "noah_davis_789",
        password: "noahPass789",
      }
    ]

    await User.bulkCreate(usersArray);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
