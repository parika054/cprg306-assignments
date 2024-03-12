import Link from "next/link";



export default function HomePage() {
  return (
      <main className="flex main-h-screen flex-col items-centre justify-centre bg-blue-200 p-10">
         
              <h1 className="text-4xl font-mono font-bold text-black mb-5">CPRG 306: Web Development-2 Assignments</h1>
              <Link href="/week-2" className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover: text-orange-900 transition duration-200">
                  Click here to see my Project!
              </Link>
              <Link href="/week-3" className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover: text-orange-900 transition duration-200">
                  Click here to see my Project part 3!
              </Link>
              <Link href="/week-4" className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover: text-orange-900 transition duration-200">
                    Click here to see my Project part 4!
              </Link>
              <Link href="/week-5" className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover: text-orange-900 transition duration-200">
                    Click here to see my Project part 5!
              </Link>
                <Link href="/week-6" className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover: text-orange-900 transition duration-200">
                        Click here to see my Project part 6!
                </Link>
              <Link href="/week-7" className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover: text-orange-900 transition duration-200">
                        Click here to see my Project part 7!
              </Link>
          
      </main>
  );
}