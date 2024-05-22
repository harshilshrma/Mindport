import React from "react";

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>
            <p>
                Copyright &copy; {year} MindPort
            </p>
            <p>
            Keep noting down those ideas! 📝✨
            </p>
        </footer>
    )
}

export default Footer; 