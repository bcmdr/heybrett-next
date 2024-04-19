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

  return (
    <>
    <main className="min-h-screen">
      <section id="apps" className="border-b-2 pb-2">
        <h2 className="text-xl font-bold p-4 pb-0">Apps I&apos;ve Built</h2>
        <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto p-4">
          {apps.map((app, index) => (
            <div id={`app-${app.id}`} key={app.id} className="flex-shrink-0 scroll-mx-4 max-w-64">
              <a href={app.url} className="block">
                <Image
                  src={`/images/screenshots/${app.filename}`}
                  alt={`Screenshot of ${app.name}`}
                  className={`snap-center rounded-xl shadow max-h-96 object-cover object-top`}
                  width={750}
                  height={1336}
                  priority={app.id === 1}
                />
                <p className="text-lg font-bold mt-2 text-center">{app.name}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="music" className="mt-2">
        <h2 className="text-xl font-bold p-4 pb-0">Music I&apos;ve Recorded</h2>
        <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto p-4">
          <iframe
            className="h-96 scroll-mx-4 flex-shrink-1 max-w-xl rounded-xl shadow"
            src="https://open.spotify.com/embed/album/3S8kMvO9dOWUY7LBkQCblG?utm_source=generator"
            width="100%"
            height="100%"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe className="h-96 flex-shrink-1 max-w-xl rounded-xl shadow" width="100%" height="100%" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1811953023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"></iframe>
        </div>
      </section>
    </main>
    <footer className="text-xs p-2 text-left m-2 mb-4"><span className="bg-black text-white p-2 rounded-md">© 2024 Brett Commandeur. Some Rights Reserved.</span></footer>
    </>
  );
};

export default Home;
