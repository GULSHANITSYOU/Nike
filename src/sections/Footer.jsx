import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>

          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center mt-8 gap-5 ">
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className="flex justify-center items-center rounded-full bg-white w-12 h-12 ">
                <a href="/">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap flex-1 justify-between gap-20 lg:gap-10">

          {footerLinks.map((section)=>(
            <div key={section.title}>
               <h4c className = "text-white text-2xl font-medium font-montserrat">{section.title}</h4c>

               <ul>
                {section.links.map((link)=>(
                  <li key={link} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray font-medium" >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
               </ul>
            </div>
          ))}

        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
          <img src={copyrightSign} alt="copyrigt"
          width={20}
          height={20}
          className="rounded-full m-0  " />
          <p>Copyright. All rights reserved</p>
        </div>

        <p className="font-montserrat cursor-pointer">Term & Conditions </p>
      </div>
    </footer>
  );
};

export default Footer;
