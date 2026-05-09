import React from "react";
import { withPrefix } from "gatsby";
import avatar from "../images/avatar.png";

const email = "andrii.ponamarov@outlook.com";
const linkedin = "https://www.linkedin.com/in/andrii-ponamarov-7b413484/";

const Profile = () => (
  <section className="p-2 flex flex-col items-center">
    <img
      src={withPrefix(avatar)}
      className="border-2 border-cyan-50 w-[196px]"
      alt="Andrii Ponamarov"
    />

    <p className="hidden print:block ">Andrii Ponamarov</p>
    <a href={`mailto:${email}`}>{email}</a>
    <a target="_blank" href={linkedin} className="print:hidden underline mt-2">
      Linkedin profile
    </a>
  </section>
);

export default Profile;
