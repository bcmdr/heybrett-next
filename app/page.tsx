import { FC, createRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the shape of an app item
interface AppItem {
  name: string;
  id: number;
  filename: string;  // This is the name of the image file in your directory
  url: string;
}

const Home: FC = () => {
  // List of apps in the "Apps" category
  const apps: AppItem[] = [
    { name: "ScreenList", id: 1, filename: "screenlist-screenshot.png", url: "https://screenlist.surge.sh" },
    { name: "Orchard", id: 2, filename: "orchard-screenshot.png", url: "https://orchard-habits.netlify.app" },
    { name: "QuibList", id: 3, filename: "quiblist-screenshot.png", url: "https://quiblist.com" },
    { name: "GoDo", id: 4, filename: "godo-screenshot.png", url: "https://godo.netlify.app" },
    { name: "Genni", id: 5, filename: "genni-screenshot.png", url: "https://genni.dev" }
    // Add more apps as needed
  ];

  const refsArray: Ref = apps.map(() => createRef());

  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-4">
      <section><h2 className="text-xl font-bold pb-4">Apps</h2>
        <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4">
          {apps.map((app, index) => (
            <div id={`app-${app.id}`} ref={refsArray[index]?.current} key={app.id} className="flex-shrink-0 scroll-mx-4 max-w-full md:max-w-64 lg:max-w-96">
              <a href={app.url} className="block">
                <Image
                  src={`/images/screenshots/${app.filename}`}
                  alt={`Screenshot of ${app.name}`}
                  className={`object-fit snap-center rounded-xl shadow`}
                  width={750}  // Placeholder, adjust based on actual image aspect ratio
                  height={1336}  // Placeholder, adjust based on actual image aspect ratio
                  priority={app.id === 1}
                />
                <p className="text-lg font-bold mt-2 text-center">{app.name}</p>
              </a>
              {/* <div className="flex justify-between items-center">
              <button
                className="button-class"
                onClick={() => {
                  const newId = app.id - 1 === 0 ? 1 : app.id - 1;
                  document.querySelector(`#app-${newId}`).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                &larr;
              </button>
              <button
                className="button-class"
                onClick={() => {
                  const newId = app.id + 1 > apps.length ? 1 : app.id + 1;
                  document.querySelector(`#app-${newId}`).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                &rarr;
              </button>
            </div> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
