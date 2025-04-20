import React, { useRef } from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
const App = () => {
  const Items = [
    {
      name: "Courses",
      subItems: [
        {
          name: "NEET",
          link: "neet",
          subItems: [
            { name: "class 11th" },
            { name: "class 12th" },
            { name: "class 12th plus" },
          ],
        },
        {
          name: "JEE",
          link: "jee",
          subItems: [
            { name: "class 11th" },
            { name: "class 12th" },
            { name: "class 12th plus" },
          ],
        },
        {
          name: "Class 6 - 10",
          link: "class 6-10",
          subItems: [
            { name: "class 6th" },
            { name: "class 7th" },
            { name: "class 8th" },
            { name: "class 9th" },
            { name: "class 10th" },
          ],
        },
        {
          name: "View all options",
          link: "view all",
          subItems: [
            { name: "Online Courses" },
            { name: "Offline Courses" },
            { name: "Distance Leraning" },
            { name: "Hindi Medium Courses" },
          ],
        },
      ],
    },
    {
      name: "Test Series",
      
      subItems: [
        {
          name: "NEET",
          link: "neet",
          subItems: [
            { name: "class 11th"},
            { name: "class 12th"},
            { name: "class 12th plus"},
          ],
        },
        {
          name: "JEE (main + advance)",
          link: "JEE(main + advance)",
          subItems: [
            { name: "class 11th" },
            { name: "class 12th" },
            { name: "class 12th plus" },
          ],
        },
        {
          name: "JEE MAIN",
          link: "JEE Main",
          subItems: [
            { name: "class 11th" },
            { name: "class 12th" },
            { name: "class 12th plus" },
          ],
        },
        { name: "CEUT", link: "Test Series", subItems: [{ name: "class 12th" }] },
      ],
    },
    {
      name: "Results",
      link: "results",
      subItems: [
        { name: "JEE MAIN 2025" },
        {
          name: "NEET",
          subItems: [{ name: "2024" }, { name: "2023" }, { name: "2022" }],
        },
        { name: "Class 6-10" },
      ],
    },
    {
      name: "Study Material",
      link: "study-material",
      subItems: [
        {
          name: "JEE MAIN",
          subItems: [
            { name: "Previous Year Papers" },
            { name: "Sample Papers" },
            { name: "Result" },
            { name: " Analysis" },
            { name: "Syllabus" },
            { name: "Exam Date" },
          ],
        },
        {
          name: "JEE Advance",
          link: "Jee-advance",
          subItems: [
            { name: "Previous Year Papers", link:"",  },
            { name: "Sample Papers", link:"",  },
            { name: "mock test", link:"",  },
            { name: "Result", link:"",  },
            { name: " Analysis", link:"",  },
            { name: "Syllabus", link:"",  },
            { name: "Exam Date", link:"",  },
          ],
        },
        {
          name: "NEET",
          link: "neet",
          subItems: [
            { name: "Previous Year Papers" , link:"", },
            { name: "Sample Papers", link:"",  },
            { name: "mock test", link:"",  },
            { name: "Result", link:"",  },
            { name: " Analysis", link:"",  },
            { name: "Syllabus", link:"",  },
            { name: "Exam Date", link:"",  },
          ],
        },
        {
          name: "NCERT Soltution",
          link: "ncert-solutions",
          subItems: [
            { name: "Class 6th", link:"",  },
            { name: "Class 7th", link:"",  },
            { name: "Class 8th", link:"",  },
            { name: "Class 9th", link:"",  },
            { name: "Class 10th", link:"",  },
          ],
        },
        { name: "CBSE", link:"cbse", subItems: [] },
        { name: "Olympiad", link:"olymiad",  subItems: [] },
      ],
    },
    { name: "Books", link:"books",  subItems: [{ name: "ALLEN e-store" }] },
    {
      name: "more",
      link: "more",
      subItems: [
        { name: "AOSAT", link:"aosat",  },
        { name: "ALLEN For Schools", link:"allen-for-school",  },
        { name: "About Allen", link:"about-allen",  },
        { name: "Blogs" , link:"blogs", },
        { name: "News", link:"mews",  },
        { name: "Career", link:"carrer",  },
      ],
    },
  ];

  const [openItem, setOpenItem] = useState(null);
  const [openSubItem, setOpenSubItem] = useState(null);
  const closeItem = useRef();
  
  

  return (
    <div className="w-screen h-screen bg-[rgb(237,242,250)] p-6 relative" ref={closeItem}>
      <div className=" flex  items-center gap-14">
        <h1 className=""><svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Allen logo" data-testid="onboardingAllenLogo" class="w-23 h-7"><path d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z" fill="#005BAA"></path></svg></h1>
        <ul className="flex gap-14" >
          {Items.map((item, index)=> (
            <li 
               key={index}
              className="cursor-pointer "
              onClick={(e) =>{
                setOpenItem(openItem === item.name ? null : item.name)
                setOpenSubItem(null)
              }  
              }
             
            >
              <span className="focuss:border-b-4 focus:rounded  focus:border-blue-600">{item.name}</span>

              {item.subItems &&
                item.subItems.length > 0 &&
                openItem == item.name && (
                  <div className="flex gap-5 absolute top-14 mt-3 p-2" onMouseLeave={(e)=>{e.preventDefault(); setOpenItem(null)}} >
                    <ul className="flex flex-col bg-[#fff] shadow-2xl p-3 h-fit rounded-xl  w-60">
                    {item.subItems.map((sub, index) => (
                      <li className="hover:bg-[rgb(237,242,250)] rounded  p-2 "
                      
                      key={index}
                        onMouseEnter={(e) => {
                         
                          setOpenSubItem(
                            openSubItem === sub.name
                              ? null
                              : sub.name
                          ) 
                        }}
                        
                      >
                        {sub.link ? (
                        <Link className="flex justify-between" to={`/${sub.link}`}>{sub.name}<svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></Link>
                      ) : (
                        <span>{sub.name}</span>
                      )}
                      </li>
                    ))}
                  </ul>
                  {item.subItems.find(sub => sub.subItems && sub.name === openSubItem && sub.subItems.length > 0) && (
                  <ul className="shadow-2xl h-fit bg-[#fff] p-2 mt-10 rounded-xl  w-60 ">
                  {item.subItems
                       .find(sub => sub.subItems && sub.name === openSubItem)
                       ?.subItems.map((subSub, subSubIndex) => (
                          <li key={subSubIndex} className="hover:bg-[rgb(237,242,250)] p-2 rounded">
                            <Link
                              onClick={() => {
                                setOpenItem(null);
                                setOpenSubItem(null);
                              }}
                              to={`/${subSub.name}`}
                              className=" flex justify-between"
                            >
                              {subSub.name}
                              <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
                            </Link>
                          </li>
                        ))}
                      
                  </ul>)}
                  </div>
                )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
