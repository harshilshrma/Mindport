import React from "react";

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>
            <p>
                Copyright &copy; {year} MindPort
            </p>
            <p>
            Keep noting down those ideas! 📝✨ And give this project a star on <a href="https://github.com/harshilshrma/Mindport" target="_blank" rel="noopener noreferrer">GitHub</a>  to show your support!⭐️
            </p>
        </footer>
    )
}

export default Footer; 