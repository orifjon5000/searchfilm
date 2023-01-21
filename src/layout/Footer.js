import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">© {new Date().getFullYear()} Copyright Text
        {/* <a href="" className="grey-text text-lighten-4 right" >Movie</a> */}
        </div>
      </div>
    </footer>
  );
}
