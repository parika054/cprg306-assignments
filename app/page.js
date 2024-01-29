import Link from "next/link";



export default function HomePage() {
  return (
      <main className="flex main-h-screen flex-col items-centre justify-centre bg-blue-200 p-10">
         
              <h1 className="text-4xl font-mono font-bold text-black mb-5">CPRG 306: Web Development-2 Assignments</h1>
              <Link href="/week-2" className="bg-orange-300 text-black font-bold py-3 px-6 rounded hover: text-orange-900 transition duration-200">
                  Click here to see my Project!
              </Link>
          
      </main>
  );
}