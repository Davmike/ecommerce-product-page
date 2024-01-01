import React from "react";

interface MyComponentProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({ setHidden, hidden }: MyComponentProps) {
  return (
    <div>
      {hidden && (
        <div>
          <div
            className="fixed inset-0 bg-black opacity-75 z-10"
            onClick={() => {
              setHidden(!hidden);
            }}
          ></div>

          <nav className="bg-white w-64 z-10 absolute top-0 left-0 min-h-screen">
            <ul className="mt-16 ml-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
