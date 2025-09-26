import React from "react";
import { Link } from "react-router-dom";

function OurTeamSection() {
  const members = [
    {
      name: "Lara Mendoza",
      url: "/laraMendoza.jpg",
      position: "Founder & Head Grower",
    },
    {
      name: "Miguel Santos",
      url: "/isabellaFlores.jpg",
      position: "Plant Care Specialist",
    },
    {
      name: "Sophia Cruz",
      url: "/sophiaCruze.jpg",
      position: "Customer Experience Manager",
    },
    {
      name: "Daniel Reyes",
      url: "/rafaelaDelaTorre.jpg",
      position: "Sustainability & Packaging Lead",
    },
    {
      name: "Isabella Flores",
      url: "/sophiaCruz.jpg",
      position: "Creative Director",
    },
    {
      name: "Rafaela Dela Torre",
      url: "/danielReyes.jpg",
      position: "Operations & Logistics Manager",
    },
  ];
  return (
    <div className="w-full h-fit p-3 grid grid-cols-1 grid-rows-[repeat(7,1fr)_auto] gap-3">
      {/* Header Text */}
      <div className="aspect-[9/12] flex items-end">
        <p
          style={{ lineHeight: "70px" }}
          className="text-[clamp(3.5rem,calc(3vw+1rem),3rem)] font-semibold text-text-color"
        >
          The People Behind the Plants
        </p>
      </div>

      {/* Team Members */}
      {members.map((member, index) => {
        return (
          <MemberCard
            key={index}
            memberName={member.name}
            memberImage={member.url}
            memberPosition={member.position}
          />
        );
      })}

      {/* Supporting Text */}
      <div className="text-start h-fit">
        <p>
          We're a team of growers, caretakers, and dreamers working together to
          bring nature closer to your home.
        </p>
      </div>
    </div>
  );
}

export default OurTeamSection;

function MemberCard({ memberName, memberImage, memberPosition }) {
  return (
    <section className="aspect-[9/12] flex flex-col rounded-2xl">
      <div
        className="grow-1 w-full rounded-2xl p-3 flex items-end justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${memberImage})` }}
      >
        <div className="w-fit h-fit flex gap-1 rounded-full ">
          <Link
            to={"https://instagram.com"}
            className="bg-darkGreen aspect-square w-[35px] flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-instagram text-white "></i>
          </Link>
          <Link
            to={"https://facebook.com"}
            className="bg-darkGreen aspect-square w-[35px] flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-facebook-f text-white "></i>
          </Link>
          <Link
            to={"https://twitter.com"}
            className="bg-darkGreen aspect-square w-[35px] flex items-center justify-center rounded-full"
          >
            <i className="fa-brands fa-x-twitter text-white "></i>
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-fit gap-1 p-3 ">
        <p className="text-xl font-semibold text-text-color">{memberName}</p>
        <p className="text-sm text-gray-600">{memberPosition}</p>
      </div>
    </section>
  );
}
