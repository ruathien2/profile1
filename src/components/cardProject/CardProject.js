import React from "react";

export default function CardProject() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <a
        target="_blank"
        href="https://tictac-0mcz.onrender.com/"
        className="w-full rounded-lg shadow-lg"
      >
        <img
          className="w-full h-[200px] bg-red-200 shadow-lg"
          src="../xo.png"
          alt="house-cat"
        />
        <div className="flex flex-col p-2 ">
          <span>Name: Tictac toe</span>
          <span>Design: Anh Pham</span>
          <span>Date: 23/7/2024</span>
        </div>
      </a>
      <a
        target="_blank"
        href="https://cat15.onrender.com/"
        className="w-full rounded-lg shadow-lg"
      >
        <img
          className="w-full h-[200px] bg-red-200 shadow-lg"
          src="../banner_house-cat.png"
          alt="house-cat"
        />
        <div className="flex flex-col p-2 ">
          <span>Name: House cat</span>
          <span>Design: Anh Pham</span>
          <span>Date: 24/8/2024</span>
        </div>
      </a>
      <a
        target="_blank"
        href="https://ruathien2.github.io/game_memory/"
        className="w-full rounded-lg shadow-lg"
      >
        <img
          className="w-full h-[200px] bg-red-200 shadow-lg"
          src="../memory_game.png"
          alt="house-cat"
        />
        <div className="flex flex-col p-2 ">
          <span>Name: Memory Game</span>
          <span>Design: Anh Pham</span>
          <span>Date: 24/8/2024</span>
        </div>
      </a>
      <a
        target="_blank"
        href="https://todo-sxon.onrender.com/"
        className="w-full rounded-lg shadow-lg"
      >
        <img
          className="w-full h-[200px] bg-red-200 shadow-lg object-cover object-right"
          src="../todolist.png"
          alt="house-cat"
        />
        <div className="flex flex-col p-2 ">
          <span>Name: Todo List</span>
          <span>Design: Anh Pham</span>
          <span>Date: 24/8/2024</span>
        </div>
      </a>
    </div>
  );
}
