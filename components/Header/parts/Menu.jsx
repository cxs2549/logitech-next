import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { FcMenu } from "react-icons/fc"
import { GrClose } from "react-icons/gr"
import { BsChevronRight } from "react-icons/bs"

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const shop = {
    name: "shop",
    links: [
      {
        title: "products",
        sublinks: [
          {
            name: "mice & keyboards",
            children: [
              "mice",
              "keyboards",
              "combos",
              "iPad keyboards",
              "tablet keyboards",
            ],
          },
          { name: "streaming", children: ["webcams"] },
        ],
      },
      {
        title: "for business",
        sublinks: [
          {
            name: "mice & keyboards",
            children: [
              "mice",
              "keyboards",
              "combos",
              "iPad keyboards",
              "tablet keyboards",
              "presenters",
              "shop all",
            ],
          },
        ],
      },
    ],
  }
  const learn = {
    name: "learn",
    links: [
      {
        title: "products",
        sublinks: [
          {
            name: "mice & keyboards",
            children: [
              "mice",
              "keyboards",
              "combos",
              "iPad keyboards",
              "tablet keyboards",
            ],
          },
          { name: "streaming", children: ["webcams"] },
        ],
      },
      {
        title: "for business",
        sublinks: [
          {
            name: "mice & keyboards",
            children: [
              "mice",
              "keyboards",
              "combos",
              "iPad keyboards",
              "tablet keyboards",
              "presenters",
              "shop all",
            ],
          },
        ],
      },
    ],
  }
  const business = {
    name: "business",
    links: [
      {
        title: "products",
        sublinks: [
          {
            name: "mice & keyboards",
            children: [
              "mice",
              "keyboards",
              "combos",
              "iPad keyboards",
              "tablet keyboards",
            ],
          },
          { name: "streaming", children: ["webcams"] },
        ],
      },
      {
        title: "for business",
        sublinks: [
          {
            name: "mice & keyboards",
            children: [
              "mice",
              "keyboards",
              "combos",
              "iPad keyboards",
              "tablet keyboards",
              "presenters",
              "shop all",
            ],
          },
        ],
      },
    ],
  }
  const support = {
    name: "support",
    links: [
      {
        title: "products",
        sublinks: [
          {
            name: "mice & keyboards",
            children: [
              "mice",
              "keyboards",
              "combos",
              "iPad keyboards",
              "tablet keyboards",
            ],
          },
          { name: "streaming", children: ["webcams"] },
        ],
      },
      {
        title: "for business",
        sublinks: [
          {
            name: "mice & keyboards",
            children: [
              "mice",
              "keyboards",
              "combos",
              "iPad keyboards",
              "tablet keyboards",
              "presenters",
              "shop all",
            ],
          },
        ],
      },
    ],
  }

  return (
    <div>
      <React.Fragment>
        {/* initial Menu toggle */}
        <button onClick={toggleDrawer("left", true)}>
          <FcMenu size={30} />
        </button>

        {/* first Drawer */}
        <Drawer
          PaperProps={{
            sx: {
              width: "calc(100% - 72px)",
            },
          }}
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {/* close Item */}
          <ListItem disablePadding>
            <div className=" w-full h-16 flex items-center justify-between px-5 border-b">
                <div>
                    MY ACCOUNT
                </div>
              <GrClose
                onClick={toggleDrawer("left", false)}
                className="translate-y-1 cursor-pointer"
                size={24}
              />
            </div>
          </ListItem>

          <div className="flex flex-col divide-y">
            <BlockItem data={shop} />
            <BlockItem data={learn} />
            <BlockItem data={business} />
            <BlockItem data={support} />
            <ListItem
            disablePadding
            >
              <div className="pl-6 pr-4 h-16 flex items-center justify-between w-full bg-neutral-100">
                <h4 className="uppercase font-semibold text-sm">our brands</h4>

                <BsChevronRight size={24} className="" />
              </div>
            </ListItem>
            <ListItem>
            <div className="pl-2 pr-2 h-16 flex items-center justify-between w-full border-b">
                <input type="text" placeholder="Search" className="border rounded w-full px-4 h-12 -translate-y-1.5" />
              </div>

                </ListItem>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  )
}

const BlockItem = ({ data }) => {
  const [open2, setOpen2] = React.useState(false)

  return (
    <ListItem>
      <div
        onClick={() => setOpen2(true)}
        className=" w-full h-16 flex items-center justify-between cursor-pointer"
      >
        <p className="uppercase font-semibold px-2 text-sm">{data.name}</p>
        <BsChevronRight size={24} className="" />
      </div>
      {data.links && (
        <Drawer
          open={open2}
          PaperProps={{
            sx: {
              width: "calc(100% - 72px)",
            },
          }}
          anchor={"left"}
        >
          <ListItem className="h-16">
            <button
              className="uppercase text-sm font-semibold"
              onClick={() => setOpen2(false)}
            >
              &larr; {data.name}
            </button>
          </ListItem>

          {data.links.map((child, i) => (
            <div key={i}>
              <ListItem className="h-16 bg-neutral-100 uppercase font-semibold text-sm">
                {child.title}
              </ListItem>
              <ListItem>
                <div className="flex flex-col items-center justify-between w-full">
                  {child.sublinks.map((item, i) => (
                    <ListItem key={i}>
                      <div
                        key={i}
                        className="w-full flex items-center justify-between"
                      >
                        <p className="capitalize text-sm">{item.name}</p>
                        <BsChevronRight size={16} />
                      </div>
                    </ListItem>
                  ))}
                </div>
              </ListItem>
            </div>
          ))}
        </Drawer>
      )}
    </ListItem>
  )
}
