import React, { Fragment } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { ReactComponent as Notificationicon } from "../../assets/icons/NotificationIcon.svg";
import { ReactComponent as MessageNewIcon } from "../../assets/icons/MessageNewIcon.svg";
import { Popover, Transition, Menu } from "@headlessui/react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-slate-950 h-16 px-4">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-grey-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-80 pl-11 border border-grey-300 rounded-xl"
        />
      </div>
      <div className="flex items-center gap-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-green-700",
                  "inline-flex items-center text-grey-700 hover:text-opacity-100 focus:outline-none active:bg-green-500 p-1.5 rounded-sm"
                )}
              >
                <MessageNewIcon fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute w-80 right-0 z-10 mt-2">
                  <div className="bg-blue-600 text-white rounded-sm shadow-md ring-1 ring-opacity-5 px-2 py-2.5">
                    <strong className="text-white font-medium">Messages</strong>
                    <div className="mt-2 py-1 text-sm">
                      This is Messages Panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-green-700",
                  "inline-flex items-center text-grey-700 hover:text-opacity-100 focus:outline-none active:bg-green-500 p-1.5 rounded-sm"
                )}
              >
                <Notificationicon fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute w-80 right-0 z-10 mt-2">
                  <div className="bg-blue-600 text-white rounded-sm shadow-md ring-1 ring-opacity-5 px-2 py-2.5">
                    <strong className="text-white font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is Notification Panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-yellow-500 bg-cover bg-no-repeat bg-center "
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/80x80?face')",
                }}
              >
                <span className="sr-only">Hugh jackson</span>
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounder-sm shadow-md p-1 bg-blue-500 ring-1 ring-black ring-opacity-5 focus:outline-none ">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-grey-100",
                      "text-white focus:bg-green-500 hover:bg-blue-400 block cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => navigate("/profile")}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-grey-100",
                      "text-white focus:bg-green-500 hover:bg-blue-400 block cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => navigate("/Settings")}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-grey-100",
                      "text-white focus:bg-green-500 hover:bg-blue-400 block cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => navigate("/logout")}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
