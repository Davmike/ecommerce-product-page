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
            className="fixed inset-0 bg-black opacity-75 z-20"
            onClick={() => {
              setHidden(!hidden);
            }}
          ></div>

          <nav className="bg-white w-64 z-30 absolute top-0 left-0 min-h-screen">
            <ul className="mt-[90px] ml-[25px]">
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
