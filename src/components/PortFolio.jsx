import React from "react";
import news from "../../public/news.png"
import book from "../../public/Book.png"
import chatter from "../../public/chat-logo.avif"
import notepade from "../../public/notepade.jpg"
import genralWebsite from "../../public/website.png"

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: chatter,
      name: "Chatter-Box",
      link: "https://github.com/Adityakumar92/Chatter-Box"
    },
    {
      id: 2,
      logo: book,
      name: "BookStore Application",
      link: "https://github.com/Adityakumar92/BookStore"
    },
    {
      id: 3,
      logo: news,
      name: "News App",
      link: "https://github.com/Adityakumar92/News-App"
    },
    {
      id: 4,
      logo: notepade,
      name: "Notepade",
      link: "https://github.com/Adityakumar92/iNoteBook"
    },
    {
      id: 5,
      logo: genralWebsite,
      name: "Genral Website",
      link: "https://github.com/Adityakumar92/General_website"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          {cardItem.map(({ id, logo, name, link }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 hover:bg-zinc-100 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] ml-2"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button> */}
                <a href={link} target="_blank">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
