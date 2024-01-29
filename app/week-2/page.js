import StudentInfo from './student-info.js';

export default function Page() {
    return (
      <main className="flex main-h-screen flex-col items-centre justify-centre p-10">
        <div className=" bg-purple-300 p-7 rounded-lg w-full text-centre">
          <h1 className="text-4xl font-mono font-bold text-black mb-5">Shopping List</h1>
        <StudentInfo />
        </div>
      </main>
     
    );
  }
  