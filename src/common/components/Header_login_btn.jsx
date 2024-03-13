import React from "react";

export default function Header_login_btn({class_add}) {
  return (
    <div>
      <button className={`border border-white px-3 py-2 rounded-lg ${class_add}`}>
        Login with Google
      </button>
    </div>
  );
}
