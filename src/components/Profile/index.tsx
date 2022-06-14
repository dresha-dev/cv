import React from "react";
import avatar from "../../images/avatar.jpg";

const email = "ponamarevandrej@gmail.com";
const linkedin = "https://www.linkedin.com/in/andrii-ponamarov-7b413484/";

export default function Profile() {
  return (
    <section className="p-2 flex flex-col items-center">
      <img
        src={avatar}
        className="object-cover w-40 h-40 rounded-full border-2 border-cyan-50"
      />
      <a href={`mailto:${email}`}>{email}</a>
      <a
        target="_blank"
        href={linkedin}
        className="print:hidden underline mt-2"
      >
        Linkedin profile
      </a>
    </section>
  );
}
