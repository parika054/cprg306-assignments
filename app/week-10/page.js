"use client";
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div className=" bg-slate-950 text-white h-screen flex content-center m-auto justify-around  flex-row align-middle w-full text-center">
      {user ? (
        <div className="m-4">
          <p className="text-xl font-bold">Welcome, {user.displayName} ({user.email})</p>
          <div className="flex gap-4 text-center align-middle content-center justify-around">
          <button onClick={handleSignOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Logout</button>
          <a href="./week-10/shopping-list" className="text-blue-500 hover:underline mt-4">Go to Shopping List</a>
          </div>
        </div>
      ) : (
        <button onClick={handleGitHubSignIn} className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-4 rounded m-4 h-20 w-fit">Login with GitHub</button>
      )}
    </div>
  );
};

export default LandingPage;