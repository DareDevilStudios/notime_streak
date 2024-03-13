"use client"
import React,{useState, useEffect} from "react";
import supabase from '../../supabase/supabase'
import {log} from "next/dist/server/typescript/utils";

export default function Header() {

    const[User, setUser] = useState("")

  async function handleSignInWithGoogle(response) {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });


      if (error) {
        console.error('Error signing in with Google:', error.message);
        return null;
      }

    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  }

  const handleUser = async () => {
      // Retrieve user data from Supabase
      const {data: { user } } = await supabase
          .auth.getUser()


      console.log(user?.user_metadata)
      setUser(user?.user_metadata.name)

  };

    const handleSignInOut = async () => {
      await supabase.auth.signOut({ scope: 'local' })
      setUser("")

  }

  useEffect(() => {
    handleUser()
  }, []);



  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-green-400">NoTime Streak meter</a>
      </div>
      <div className="navbar-end">
        {User  ? (
            <div className="flex gap-x-7">
              <button onClick={handleSignInWithGoogle} className="border border-white px-3 py-2 rounded-lg">
                Welcome {User}
              </button>
              <button onClick={handleSignInOut} className="border border-white px-3 py-2 rounded-lg">
                Logout
              </button>
            </div>
        ) :
        (
            <button onClick={handleSignInWithGoogle} className="border border-white px-3 py-2 rounded-lg">
              Login with Google
          </button>
        )
        }
        {/* <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> */}
      </div>
    </div>
  );
}
