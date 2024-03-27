import React from 'react'

const NavItems = ({props1, props2}) => {
  return (
    <div className="flex items-center py-4 hover:bg-zinc-500 hover:rounded-xl">
      <div className="pr-3">
        <img src={props1} alt="" className="w-10" />
      </div>
      <div>
        <button>
          <h1 className="text-[2rem]">{props2}</h1>
        </button>
      </div>
    </div>
  );
}

export default NavItems