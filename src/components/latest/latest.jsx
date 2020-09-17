import React from "react";
import Layout from "../layout/layout";
import ArticleCard from "./articleCard/articleCard";

import currency from "../../images/image-currency.jpg";
import confetti from "../../images/image-confetti.jpg";
import restaurant from "../../images/image-restaurant.jpg";
import plane from "../../images/image-plane.jpg";
const latest = () => {
  return (
    <div className="latestBackground">
      <Layout>
        <div className="latest">
          <h1>Latest Articles</h1>
          <div className="cardList">
            <ArticleCard
              image={currency}
              author="Claire Robinson"
              header="Recieve money in any currency with no fees"
              paragraph="The world is getting smaller and we're becoming more mobile. So why should you be fored to only receive money in a single..."
            />
            <ArticleCard
              image={restaurant}
              author="Wilson Hutton"
              header="Treat yourself without worrying about money"
              paragraph="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
            />
            <ArticleCard
              image={plane}
              author="Wilson Hutton"
              header="Take your Easybank card wherever you go"
              paragraph="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
            />
            <ArticleCard
              image={confetti}
              author="Claire Robinson"
              header="Our invite-only Beta accound are now live"
              paragraph="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default latest;
