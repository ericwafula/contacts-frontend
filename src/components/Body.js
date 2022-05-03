import React from "react";
import "./Body.css";
import User from "../assets/user.svg";
import contactIcon from "../assets/user-contact.svg";
import { HiPencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import { useState } from "react";
import { data } from "../data";

function Body() {
  const [users, setUsers] = useState(data);
  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <>
      <Desktop
        users={users}
        contactIcon={contactIcon}
        HiPencilAlt={HiPencilAlt}
        HiTrash={HiTrash}
        removeUser={removeUser}
      />
      <Mobile
        users={users}
        contactIcon={contactIcon}
        HiPencilAlt={HiPencilAlt}
        HiTrash={HiTrash}
        removeUser={removeUser}
      />
    </>
  );
}

const Desktop = ({ users, contactIcon, HiPencilAlt, HiTrash, removeUser }) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="bg-desktop bg-no-repeat bg-top bg-cover pt-24 pl-48 pr-48 grid grid-cols-12 h-screen pb-24">
          <div className="col-span-8">
            <p className="text-white font-bold text-7xl">
              Seamless{" "}
              <span className="text-color_Medium_Aquamarine_LG">Contacts</span>
            </p>
            <p className="font-bold text-color_Hot_Pink_LP mt-4 text-3xl tracking-[.25em]">
              All Day EveryDay
            </p>
          </div>
          <div className="col-span-4 bg-color_Lucky_Point_LB el px-8 py-12 h-full overflow-hidden">
            <div className="flex items-center gap-4">
              <img src={User} alt="user" />
              <p className="text-3xl text-white">
                Hello, <span className="font-bold">User!</span>
              </p>
            </div>
            <p className="text-3xl font-bold mt-12 mb-6 text-white">Contacts</p>
            <div className="overflow-y-scroll h-3/4 mb-6">
              {users.map((user) => {
                const { id, name, phoneNumber } = user;
                return (
                  <Contact
                    key={id}
                    id={id}
                    name={name}
                    phoneNumber={phoneNumber}
                    contactIcon={contactIcon}
                    HiPencilAlt={HiPencilAlt}
                    HiTrash={HiTrash}
                    removeUser={removeUser}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Mobile = ({ users, contactIcon, HiPencilAlt, HiTrash, removeUser }) => {
  return (
    <>
      <div className="md:hidden">
        <div className="bg-mobile bg-no-repeat bg-left bg-cover pt-6 h-screen">
          <div className="px-4">
            <p className="text-white font-bold text-7xl">
              Seamless{" "}
              <span className="text-color_Medium_Aquamarine_LG">Contacts</span>
            </p>
            <p className="font-bold text-color_Hot_Pink_LP mt-4 text-3xl tracking-[.25em] mb-12">
              All Day EveryDay
            </p>
          </div>
          <div className="col-span-4 bg-color_Lucky_Point_LB el px-8 py-12 h-full overflow-hidden">
            <div className="flex items-center gap-4">
              <img src={User} alt="user" />
              <p className="text-3xl text-white">
                Hello, <span className="font-bold">User!</span>
              </p>
            </div>
            <p className="text-3xl font-bold mt-12 mb-6 text-white">Contacts</p>
            <div className="overflow-y-scroll h-3/4 mb-6">
              {users.map((user) => {
                const { id, name, phoneNumber } = user;
                return (
                  <Contact
                    key={id}
                    id={id}
                    name={name}
                    phoneNumber={phoneNumber}
                    contactIcon={contactIcon}
                    HiPencilAlt={HiPencilAlt}
                    HiTrash={HiTrash}
                    removeUser={removeUser}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Contact = ({
  id,
  name,
  phoneNumber,
  contactIcon,
  HiPencilAlt,
  HiTrash,
  removeUser,
}) => {
  return (
    <div className="flex justify-between bg-color_Midnight_Express_DB p-3 rounded-3xl gap-6 mb-6 mr-8">
      <img src={contactIcon} alt="contact icon" />
      <div className="text-white">
        <p>{name}</p>
        <p className="font-bold">{phoneNumber}</p>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <HiPencilAlt size="1.5em" color="white" />
        </div>
        <div className="hover:cursor-pointer" onClick={() => removeUser(id)}>
          <HiTrash size="1.5em" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Body;
