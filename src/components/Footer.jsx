import React from "react";
const currentyear=new Date().getFullYear();

function Footer(){
    return(
        <footer>
         
    Copyright @ {currentyear}

        </footer>


    );
}

export default Footer;