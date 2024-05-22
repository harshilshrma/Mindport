import React from "react";

function Header() {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <h1>Mindport</h1>
                <h5>A portal for your thoughts.</h5>
            </div>
            <div>
                <a 
                    href="https://github.com/harshilshrma/Mindport"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: "none", fontFamily: "Montserrat"}}
                >
                    GitHub ↗
                </a>
            </div>
        </header>
    )
}

export default Header;