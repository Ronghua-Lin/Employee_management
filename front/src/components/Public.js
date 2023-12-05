import React from "react";
import { Link } from "react-router-dom";
const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Employee Management Project!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          There are Admin and Employee roles. where Admin can assign notes to everyone and employee can view and manage their notes. Admin can also manage employees/users in the system!
        </p>
        <address className="public__addr">
          Ryan Lin
          <br />
          Queens, NY 11354
          <br />
          <a href="tel:+15555555555">(646) 207-1769</a>
        </address>
        <br />
        <p>Owner: Ronghua</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
