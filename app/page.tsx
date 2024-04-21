import { FC, createRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SoundCloudFrame from './components/SoundCloudFrame';

// Define the shape of an app item
interface AppItem {
  name: string;
  id: number;
  filename: string;  // This is the name of the image file in your directory
  url: string;
}

interface MusicItem {
  name: string;
  id: number;
  date: number; // Date.now() of release day. 
  url: string;
  embed: string,
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

  const music: MusicItem[] = [
    {name: "Fragments", id: 1, date: 1713657663388, url: "https://soundcloud.com/bcmdr/sets/fragments", embed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1812765684&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"},
    {name: "Experiments", id: 2, date: 1713053224087, url: "https://soundcloud.com/bcmdr/sets/experiments", embed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1811953023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false" }
  ]

  return (
    <>
    <main className="min-h-screen">
      <section id="apps" className="shadow">
        <h2 className="category-heading">Apps</h2>
        <div className="category-items">
          {apps.map((app, index) => (
            <div id={`app-${app.id}`} key={app.id} className="flex-shrink-0 scroll-mx-4 max-w-64">
              <a href={app.url} className="block">
                <Image
                  src={`/images/screenshots/${app.filename}`}
                  alt={`Screenshot of ${app.name}`}
                  className={`snap-center rounded-xl shadow max-h-96 object-cover object-top`}
                  width={530}
                  height={945}
                  priority={app.id === 1}
                />
                <p className="text-lg font-bold mt-2 text-center">{app.name}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="music" className="">
        <h2 className="category-heading">Music</h2>
        <div className="category-items">
        {music.map((item, index) => (
          <SoundCloudFrame key={item.id} embed={item.embed}></SoundCloudFrame>
        ))}
        </div>
      </section>
    </main>
    <footer className="bg-black text-xs text-center p-2"><span className="text-white 2">© 2024 Brett Commandeur. Some Rights Reserved.</span></footer>
    </>
  );
};

export default Home;
