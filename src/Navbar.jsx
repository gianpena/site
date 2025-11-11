import { useState, useContext, useEffect } from "react"
import { UsernameContext } from "./UsernameContext.js"
import { Menu } from "@headlessui/react"
import Modal from "react-modal"
import { Link } from "react-router-dom"
import github from "./github.svg"
import linkedin from "./linkedin.svg"
import logo from "./logo.png"
import discord from "./discord.svg"
import instagram from "./instagram.svg"
import "./sections/Logos.css"

const THRESHOLD = 640

function SectionsDropdown({ sections, links }) {
  return (
    <Menu
      as="div"
      style={{
        position: "relative",
        display: "inline-block",
        marginLeft: "0px"
      }}
    >
      <Menu.Button
        className="general-site-font navbar-section"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#000",
          cursor: "pointer",
          padding: "4px 6px",
          fontSize: "inherit"
        }}
      >
        Menu
      </Menu.Button>

      <Menu.Items
        style={{
          position: "absolute",
          top: "100%",
          left: "0",
          backgroundColor: "#ffffff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          zIndex: 1001,
          minWidth: "120px",
          outline: "none"
        }}
      >
        {sections.map((section, index) => (
          <Menu.Item key={section}>
            {({ active }) => (
              <Link
                to={links[section]}
                className="general-site-font"
                style={{
                  display: "block",
                  padding: "10px 16px",
                  color: "#000",
                  textDecoration: "none",
                  borderBottom:
                    index < sections.length - 1 ? "1px solid #eee" : "none",
                  backgroundColor: active ? "#f5f5f5" : "transparent"
                }}
              >
                {section}
              </Link>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}

export function Navbar() {
  const [isModalOpen, setIsOpen] = useState(false);
  const [widthBelowThreshold, setWidthBelowThreshold] = useState(
    window.innerWidth <= THRESHOLD
  );
  const discordUsername = useContext(UsernameContext);
  const [currentlySelectedPage, setCurrentlySelectedPage] = useState(null);
  const sections = ["Projects", "About Me", "Speedtyping"];
  const contacts = [
    { source: discord, content: discordUsername },
    { source: instagram, content: "gian.pena1" }
  ];
  const sectionMap = {
    "Projects": "/projects",
    "About Me": "/about",
    "Speedtyping": "/speedtyping"
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= THRESHOLD) setWidthBelowThreshold(true)
      else setWidthBelowThreshold(false)
    }

    const path = window.location.pathname;
    const page = Object.keys(sectionMap).find(
      (key) => sectionMap[key] === path
    )
    setCurrentlySelectedPage(sectionMap[page] || null);

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#ffffff",
        borderRadius: "0",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center"
      }}
    >
      <a
        href="https://github.com/gianpena"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="logo-style" src={github} alt="GitHub" />
      </a>
      <a
        href="https://linkedin.com/in/gian-pena"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="logo-style" src={linkedin} alt="LinkedIn" />
      </a>
      <span
        style={{
          display: "inline-block",
          width: "4px",
          height: "32px",
          backgroundColor: "#787878",
          margin: "0 16px"
        }}
      />
      {!widthBelowThreshold &&
        sections.map((section, index) => (
          <Link
            key={section}
            to={sectionMap[section]}
            className={`navbar-section general-site-font`}
            style={{
              color: "#000",
              textDecoration: "none",
              paddingLeft: index ? "10px" : "0px",
              ...(currentlySelectedPage === sectionMap[section] ?
                { fontWeight: "bold" } : {}
              )
            }}
          >
            {section}
          </Link>
        ))}
      {widthBelowThreshold && (
        <SectionsDropdown sections={sections} links={sectionMap} />
      )}
      <div
        className="general-site-font navbar-section"
        style={{
          color: "#000",
          right: "80px",
          position: "absolute"
        }}
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Contact me!
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="test"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "300px",
            padding: "20px",
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#666",
            padding: "5px",
            lineHeight: "1",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onMouseEnter={e => (e.target.style.color = "#000")}
          onMouseLeave={e => (e.target.style.color = "#666")}
        >
          ×
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px"
          }}
        >
          <div className="general-site-font">
            These are the socials I tend to check more frequently, so don't
            hesitate to reach out if you wanna talk!
          </div>
          <div
            className="general-site-font"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            {contacts.map(contact => (
              <div
                key={contact.id || contact.content}
                className="general-site-font"
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <img
                  className="logo-style"
                  src={contact.source}
                  alt={contact.content}
                />
                <div
                  style={{
                    paddingLeft: "10px"
                  }}
                >
                  {contact.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <Link
        key="Home"
        to="/"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#000",
          borderRadius: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          right: "20px"
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "24px", height: "24px", paddingBottom: "2px" }}
        />
      </Link>
    </div>
  );
}
