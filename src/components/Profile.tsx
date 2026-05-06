import React from "react";
import { withPrefix } from "gatsby";
import avatar from "../images/2026-05-04-avatar.png";

const email = "andrii.ponamarov@outlook.com";
const linkedin = "https://www.linkedin.com/in/andrii-ponamarov-7b413484/";

const Profile = () => (
  <section className="p-2 flex flex-col items-center">
    <img
      src={withPrefix(avatar)}
      className="object-cover w-40 h-40 rounded-full border-2 border-cyan-50"
      alt="Andrii Ponamarov"
    />
    <a href={`mailto:${email}`}>{email}</a>
    <a target="_blank" href={linkedin} className="print:hidden underline mt-2">
      Linkedin profile
    </a>
  </section>
);

export default Profile;
