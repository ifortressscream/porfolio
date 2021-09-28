import React from "react";

function SecondContent() {
  return (
    <div>
      <div className="text-white" style={{ backgroundColor: "#7510F7" }}>
        <div className="relative">
          <div className="flex items-center justify-center max-w-3xl mx-auto text-center">
            <div className="m-20">
              <div className="mb-4 text-2xl font-semibold">
                Hi, I’m Matt. Nice to meet you.
              </div>
              <div className="pb-32 text-sm font-normal leading-loose">
                Since beginning my journey as a freelance designer nearly 10
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </div>
            </div>
          </div>
          <div className="absolute flex h-auto max-w-5xl mx-auto text-center text-black bg-white border border-blue-200 rounded-lg top-3/4 inset-x-32">
            <div className="w-1/3 p-4 border-r border-blue-100">
              <div className="py-4">
                <i className="text-purple-700 fill-current fa-2x fa fa-pencil"></i>
              </div>
              <p className="pb-4 font-sans text-lg font-semibold">Designer</p>
              <p className="pb-6 text-xs leading-loose">
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <p className="pb-2 text-sm font-semibold text-purple-700">
                Things I enjoy designing:
              </p>
              <p className="pb-8 text-sm">UX, UI, Web, Mobile, Apps, Logos</p>
              <ul>
                <li className="font-semibold text-purple-700">Design Tools:</li>
                <div className="pb-4 text-sm leading-loose">
                  <li>Balsamiq Mockups</li>
                  <li>Figma</li>
                  <li>Invision</li>
                  <li>Marvel</li>
                  <li>Pen & Paper</li>
                  <li>Sketch</li>
                  <li>Webflow</li>
                  <li>Zeplin</li>
                </div>
              </ul>
            </div>
            <div className="w-1/3 p-4 border-r border-blue-100">
              <div className="py-4">
                <i className="text-purple-700 fill-current fa-2x fa fa-pencil"></i>
              </div>
              <p className="pb-4 font-sans text-lg font-semibold">
                Front-end Developer
              </p>
              <p className="pb-6 text-xs leading-loose">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <p className="pb-2 text-sm font-semibold text-purple-700">
                Languages I speak:
              </p>
              <p className="pb-8 text-sm">HTML, Pug, Slim, CSS, Sass, Less</p>
              <ul>
                <li className="font-semibold text-purple-700">Dev Tools:</li>
                <div className="pb-4 text-sm leading-loose">
                  <li>Atom</li>
                  <li>Bitbucket</li>
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>Codekit</li>
                  <li>Codepen</li>
                  <li>Github</li>
                  <li>Gitlab</li>
                  <li>Terminal</li>
                </div>
              </ul>
            </div>
            <div className="w-1/3 p-4">
              <div className="py-4">
                <i className="text-purple-700 fill-current fa-2x fa fa-pencil"></i>
              </div>
              <p className="pb-4 font-sans text-lg font-semibold">Mentor</p>
              <p className="pb-6 text-xs leading-loose">
                I genuinely care about people, and love helping fellow designers
                work on their craft.
              </p>
              <p className="pb-2 text-sm font-semibold text-purple-700">
                Experiences I draw from:
              </p>
              <p className="pb-8 text-sm">UX/UI, Product design, Freelancing</p>
              <ul>
                <li className="font-semibold text-purple-700">Mentor Stats:</li>
                <div className="pb-4 text-sm leading-loose">
                  <li>5 years experience</li>
                  <li>26 short courses</li>
                  <li>42 bootcamps</li>
                  <li>125+ students</li>
                  <li>1,400+ mentor sessions</li>
                  <li>60+ group critiques</li>
                  <li>12,000+ comments</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default SecondContent;
