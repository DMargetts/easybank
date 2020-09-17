import React from "react";
import Card from "./card/card";
import Layout from "../layout/layout";
import "./services.css";
import online from "../../images/icon-online.svg";
import budgeting from "../../images/icon-budgeting.svg";
import onboarding from "../../images/icon-onboarding.svg";
import api from "../../images/icon-api.svg";
const services = () => {
  return (
    <section className="servicesBackground">
      <Layout>
        <div className="services">
          <div className="servicesText">
            <h2>Why Choose Easybank?</h2>
            <p>
              We leverage open banking to turn your bank account into you
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="cardList">
            <Card
              icon={online}
              header="Online Banking"
              paragraph="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
            />
            <Card
              icon={budgeting}
              header="Simple Budgeting"
              paragraph="See exactly where your money goes each month. Receive notifications when your close to hitting your limit."
            />
            <Card
              icon={onboarding}
              header="Fast Onboarding"
              paragraph="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
            />
            <Card
              icon={api}
              header="Open API"
              paragraph="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
            />
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default services;
