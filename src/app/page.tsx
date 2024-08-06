"use client";
import React, { useRef } from "react";
import { Layout } from "./components/common/Layout";
import { Banner } from "./components/Home/Banner";
import { NimbiToken } from "./components/Home/NimbiToken";
import { Collection } from "./components/Home/Collection";
import { Team } from "./components/Home/Team";
import { FAQ } from "./components/Home/FAQ";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-10">
        <Banner />
        <NimbiToken />
        <Collection />
        <Team />
        <FAQ />
      </div>
    </Layout>
  );
};

export default Home;
