import React from "react";
import Button from "../button/Button";
import Layout from "../layout/layout";
import phones from "../../images/image-mockups.png";

import "./hero.css";
const hero = () => {
  return (
    <section className="heroBackground">
      <Layout>
        <div className="hero">
          <div className="text">
            <h1>Next Generation Digital Banking</h1>
            <p>
              Take your financial life online. Your Easy bank account will be a
              one-stop shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button value="Request Invite" />
          </div>

          <img src={phones} alt="phones" />
        </div>
      </Layout>
    </section>
  );
};

export default hero;
