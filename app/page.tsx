import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({ weight: ["400", "700"], subsets: ["latin"] });
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-20">
      <div className="flex gap-2">
        {/* <div className="flex bg-gray-700 w-1/2 rounded-md">
          <div className="w-1/2 relative">
            <img className="absolute border-collapse rounded-md -top-2 left-2 w-40" src="https://m.media-amazon.com/images/I/71nkRHoA2qL._AC_UF894,1000_QL80_.jpg" alt="card picture" />
            <svg className="absolute bottom-0 left-2" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#ca1212" d="M178 44c-21.44 0-39.92 10.19-50 27.07C117.92 54.19 99.44 44 78 44a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a334 334 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a334 334 0 0 0 52.7-36.73C218 160.47 236 130.59 236 102a58.07 58.07 0 0 0-58-58m-50 175.42c-14-8-100-59.35-100-117.42a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 63.31 156.89 52 178 52a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42" /></svg>
            <svg className="absolute bottom-0 left-10" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#0786b0" fill-opacity="0.25" d="M20.188 10.934c.388.472.582.707.582 1.066c0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066c0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934" /><circle cx="12" cy="12" r="3" fill="#0786b0" /></svg>
          </div>
          <div className="">
            <div className="p-4 text-center text-gray-400">
              <h4>XX</h4>
              <hr className="bg-gray-400 mt-2" />
            </div>
            <div className="px-2 pb-4 text-gray-400">
              <p>Psted at: 2020/01/20 By: MERRY-BAL</p>
              <p>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: Ponyo.</p>
              <p>RAiting: 92% | Mode: dark:3</p>
              <button className="btn btn-outline text-gray-400 mr-4">Watch the Anime</button>
              <button className="btn btn-outline text-gray-400">Save it for Later</button>
            </div>
          </div>
        </div> */}
        <div className="flex bg-gray-700 w-1/2 rounded-md">
          <div className="w-1/2 relative">
            <img className="absolute border-collapse rounded-md -top-2 left-2 w-40" src="https://m.media-amazon.com/images/I/71nkRHoA2qL._AC_UF894,1000_QL80_.jpg" alt="card picture" />
            <svg className="absolute bottom-0 left-2" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#ca1212" d="M178 44c-21.44 0-39.92 10.19-50 27.07C117.92 54.19 99.44 44 78 44a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a334 334 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a334 334 0 0 0 52.7-36.73C218 160.47 236 130.59 236 102a58.07 58.07 0 0 0-58-58m-50 175.42c-14-8-100-59.35-100-117.42a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 63.31 156.89 52 178 52a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42" /></svg>
            <svg className="absolute bottom-0 left-10" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#0786b0" fill-opacity="0.25" d="M20.188 10.934c.388.472.582.707.582 1.066c0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066c0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934" /><circle cx="12" cy="12" r="3" fill="#0786b0" /></svg>
          </div>
          <div className="">
            <div className="p-4 text-center text-gray-400">
              <h4>XX</h4>
              <hr className="bg-gray-400 mt-2" />
            </div>
            <div className="px-2 pb-4 text-gray-400">
              <p>Psted at: 2020/01/20 By: MERRY-BAL</p>
              <p>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: Ponyo.</p>
              <p>RAiting: 92% | Mode: dark:3</p>
              <button className="btn btn-outline text-gray-400 mr-4">Watch the Anime</button>
              <button className="btn btn-outline text-gray-400">Save it for Later</button>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-700 w-1/2 rounded-md">
          <div className="w-1/2 relative">
            <img className="absolute border-collapse rounded-md -top-2 left-2 w-40" src="https://m.media-amazon.com/images/I/71nkRHoA2qL._AC_UF894,1000_QL80_.jpg" alt="card picture" />
            <svg className="absolute bottom-0 left-2" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#ca1212" d="M178 44c-21.44 0-39.92 10.19-50 27.07C117.92 54.19 99.44 44 78 44a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a334 334 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a334 334 0 0 0 52.7-36.73C218 160.47 236 130.59 236 102a58.07 58.07 0 0 0-58-58m-50 175.42c-14-8-100-59.35-100-117.42a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 63.31 156.89 52 178 52a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42" /></svg>
            <svg className="absolute bottom-0 left-10" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#0786b0" fill-opacity="0.25" d="M20.188 10.934c.388.472.582.707.582 1.066c0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066c0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934" /><circle cx="12" cy="12" r="3" fill="#0786b0" /></svg>
          </div>
          <div className="">
            <div className="p-4 text-center text-gray-400">
              <h4>XX</h4>
              <hr className="bg-gray-400 mt-2" />
            </div>
            <div className="px-2 pb-4 text-gray-400">
              <p>Psted at: 2020/01/20 By: MERRY-BAL</p>
              <p>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: Ponyo.</p>
              <p>RAiting: 92% | Mode: dark:3</p>
              <button className="btn btn-outline text-gray-400 mr-4">Watch the Anime</button>
              <button className="btn btn-outline text-gray-400">Save it for Later</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
