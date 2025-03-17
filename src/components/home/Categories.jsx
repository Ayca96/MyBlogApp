import React from "react";

const images = [
  {
    title: "Sport",
    src: "https://images.pexels.com/photos/28005837/pexels-photo-28005837/free-photo-of-mountainbiken.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Photo by Minh Pham",
    span: "md:col-span-1"
  },
  {
    title: "Health",
    src: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Photo by Magicle",
    span: "md:col-span-2"
  },
  {
    title: "Team",
    src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Photo by Martin Sanchez",
    span: "md:col-span-2"
  },
  {
    title: "Coding",
    src: "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Photo by Lorenzo Herrera",
    span: "md:col-span-1"
  }
];

const Categories = () => {
  return (
    <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto w-[80%] px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
             Most Popular Articles
            </h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
            Discover our most popular posts on balancing coding and a healthy lifestyle. From ergonomic work setups and mindful productivity to fitness tips for developers, explore how to write better code while staying physically and mentally well.
            </p>
          </div>
          <a
            href="#"
            className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            More
          </a>
        </div>

        {/* Resimleri Listele */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((img, index) => (
            <a
              key={index}
              href="#"
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${img.span}`}
            >
              <img
                src={img.src}
                loading="lazy"
                alt={img.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {img.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
