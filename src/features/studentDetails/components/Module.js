import React, { useEffect } from "react";
import { Accordion, Modal } from "flowbite";
import AlertDialog from "./AlertDialog";

const Module = () => {
  const moduleData = [
    {
      sessionId: 1,
      title: "Introduction to chess",
      description: "Getting started with chess!!",
      status: "In progress",
      resources: "https://www.google.com/",
      instructorFdbk: "Navaneeth sucks at chess",
      studentFdbk: "IKR, he does suck at chess...",
    },
    {
      sessionId: 2,
      title: "Introduction to chess",
      description: "Getting started with chess!!",
      status: "In progress",
      resources: "https://www.google.com/",
      instructorFdbk: "Navaneeth sucks at chess",
      studentFdbk: "IKR, he does suck at chess...",
    },
    {
      sessionId: 3,
      title: "Introduction to chess",
      description: "Getting started with chess!!",
      status: "In progress",
      resources: "https://www.google.com/",
      instructorFdbk: "Navaneeth sucks at chess",
      studentFdbk: "IKR, he does suck at chess...",
    },
    {
      sessionId: 4,
      title: "Introduction to chess",
      description: "Getting started with chess!!",
      status: "In progress",
      resources: "https://www.google.com/",
      instructorFdbk: "Navaneeth sucks at chess",
      studentFdbk: "IKR, he does suck at chess...",
    },
    {
      sessionId: 5,
      title: "Introduction to chess",
      description: "Getting started with chess!!",
      status: "In progress",
      resources: "https://www.google.com/",
      instructorFdbk: "Navaneeth sucks at chess",
      studentFdbk: "IKR, he does suck at chess...",
    },
  ];
  useEffect(() => {
    let accordionItems = [];
    for (let i = 0; i < moduleData.length; ++i) {
      accordionItems.push({
        id: `accordion-flush-heading-${i + 1}`,
        triggerEl: document.querySelector(`#accordion-flush-heading-${i + 1}`),
        targetEl: document.querySelector(`#accordion-flush-body-${i + 1}`),
        active: false,
      });
    }

    // options with default values
    const options = {
      alwaysOpen: false,
      activeClasses: "dark:bg-gray-800 text-gray-900 dark:text-white",
      inactiveClasses: "text-gray-500 dark:text-gray-400",
    };

    //   console.log(accordionItems)
    const accordion = new Accordion(accordionItems, options);
  });

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      className="m-6"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      {moduleData.map((d, i) => (
        <>
          <h2 id={`accordion-flush-heading-${i + 1}`}>
            <button
              type="button"
              class="flex items-center justify-between w-full m-2 p-5 font-medium text-left text-gray-500 focus:border-2 focus:rounded focus:border-violet-700"
              data-accordion-target={`#accordion-flush-body-${i + 1}`}
              aria-expanded="true"
              aria-controls={`accordion-flush-body-${i + 1}`}
            >
              <span>
                Session {i + 1}: {d.title}
              </span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-flush-body-${i + 1}`}
            class="hidden"
            aria-labelledby={`accordion-flush-heading-${i + 1}`}
          >
            <div class="m-2 p-5 border-b border-gray-200">
              <p class="mb-2 text-black">{d.description}</p>
              <div class="flex justify-between mb-2">
                <span class="text-gray-500 italic">Status: {d.status}</span>
                <a
                  href={d.resources}
                  class="font-medium text-purple-700 hover:underline"
                >
                  Resources
                </a>
              </div>

              <div className="flex justify-end gap-2">
                <AlertDialog
                  title="Instructor Feedback"
                  content={d.instructorFdbk}
                />
                <AlertDialog title="Parent Feedback" content={d.studentFdbk} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Module;
