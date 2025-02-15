"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { DropdownMenu } from "../ui/dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, CircleX } from "lucide-react";
import { options } from "@/lib/data";
import { Dialog, DialogTrigger } from "../ui/dialog";
import SigninModal from "../authentication/AuthModal";
import AuthModal from "../authentication/AuthModal";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchItem("");
  };

  return (
    <div className="flex justify-between h-28 px-28 items-center border-b border-gray-300">
      <div>
        <h1 className="font-extrabold text-4xl">SkillUp!</h1>
      </div>
      <div className="flex items-center border-2 border-gray-300 h-[40px] w-[400px] rounded-full relative">
        <input
          type="text"
          placeholder="Search"
          value={searchItem}
          onChange={handleChange}
          className="absolute h-full w-full px-3 rounded-full focus:outline-none hover:bg-gray-300"
          style={{ borderRadius: "inherit", appearance: "none" }}
        />
        {searchItem && (
          <span onClick={handleClearSearch} className="absolute right-14 cursor-pointer px-4 py-3 mr-12 text-red-500">
            <CircleX />
          </span>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={selectedOption ? "default" : "outline"}
              className={`
                ${selectedOption ? "bg-primary text-white" : ""}
                rounded-full
                border-2
                px-4
                py-2
                flex items-center justify-between
                hover:bg-gray-300
                absolute right-0
                h-full
                focus:outline-none
                hover:border-2
                hover:border-gray-300
                text-black
                bg-white
              `}
            >
              {selectedOption?.label || "Select"}
              <ChevronDown size={18} className="ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-100 rounded-md p-8">
            {options.map((option) => (
              <DropdownMenuItem key={option.value} onClick={() => setSelectedOption(option)} className="py-2">
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex space-x-10">
        <AuthModal status = 'signup'/>
        <AuthModal status = 'signin'/>
      </div>
    </div>
  );
};

export default Navbar;