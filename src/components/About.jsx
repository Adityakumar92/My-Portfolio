import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="bg-zinc-100">
          Hi, I'm Aditya Kumar, a dedicated web developer and programmer currently pursuing my studies at the Indian Institute of Technology (BHU), Varanasi. With a passion for crafting dynamic web experiences and solving complex coding challenges, I thrive at the intersection of creativity and technology. I am continuously honing my skills to create seamless, responsive, and innovative digital solutions.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <table className="table-auto w-[100%]">
          <thead className="bg-zinc-200">
            <tr>
              <th>Degree/Certification</th>
              <th>Institution</th>
              <th>Percentage/CGPA</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-100">
            <tr>
              <td className="text-center">CBSE (XII)</td>
              <td className="text-center">Kendriya Vidyalaya BHU Campus Varanasi</td>
              <td className="text-center">91.8</td>
              <td className="text-center">2020</td>
            </tr>
            <hr/>
            <tr>
              <td className="text-center">CBSE (X)</td>
              <td className="text-center">Kendriya Vidyalaya BHU Campus Varanasi</td>
              <td className="text-center">76.8</td>
              <td className="text-center">2018</td>
            </tr>
          </tbody>
        </table>
        {/* <span>
          [Degree/Certification], [Institution], [Year] [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year]
        </span> */}
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <div className="bg-zinc-200 mt-2">
          <span className="font-semibold">Proficient in : </span>C++, JavaScript
        </div>
        <div className="bg-zinc-200 mt-2">
          <span className="font-semibold">Experienced with : </span>React JS, MongoDB, Express, Node Js
        </div>
        <div className="bg-zinc-200 mt-2">
          <span className="font-semibold">Strong grasp of : </span>JavaScript, Data Structure and Algorithms
        </div>
        <br />
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <div className="mt-2">
          <div className=" bg-zinc-200 flex items-center justify-between">
            <span className="font-semibold">Frontend Developer Intern | BLUESTOCK</span>
            <span className="font-semibold">1/july/2024 - 30/july/2024</span>
          </div>
          <div>
            <ul>
              <li className="bg-zinc-100 mt-1">Spearheaded the design and development of a robust admin web portal, leveraging HTML, CSS, and JavaScript to deliver a seamless user experience.</li>
              <li className="bg-zinc-100 mt-1">Implemented cutting-edge authentication and authorization mechanisms, ensuring secure user verification and role based redirection to tailored dashboards.</li>
              <li className="bg-zinc-100 mt-1">Crafted a dynamic, data-driven admin dashboard, showcasing key performance metrics, including active user count, admin placement, and real-time analytics.</li>
              <li className="bg-zinc-100 mt-1">Developed a fully responsive, mobile-first website, utilizing CSS media queries, flexible grids, and JavaScript event listeners to ensure a consistent, intuitive interface across devices.</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Extra-Curricular Activities
        </h1>
        <div className="mt-2">
          <div className=" bg-zinc-200 flex items-center justify-between">
            <span className="font-semibold">Marketing Executive | JAGRITI ' 23 | Annual Social Service Fest Of IIT-BHU</span>
            <span className="font-semibold">july/2023 - April/2023</span>
          </div>
          <div>
            <ul>
              <li className="bg-zinc-100 mt-1">Lead acquring sponsorship from multiple local and national brands, thus enchancing the quality of fest.</li>
              <li className="bg-zinc-100 mt-1">Devised optimal 'PublicityPoint' for for maximizing the sponsors reach in offline and online events in JAGRITI'23.</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p className="bg-zinc-100 mt-2">
          My mission is to leverage my skills and creativity to deliver cutting-edge web development and programming solutions that not only meet but exceed client expectations. I am dedicated to creating impactful digital experiences that enhance the user journey and contribute positively to the evolving digital landscape. With a commitment to continuous learning and innovation, I am always seeking new challenges and opportunities to push the boundaries of web technology.
        </p>
      </div>
    </div>
  );
}

export default About;
