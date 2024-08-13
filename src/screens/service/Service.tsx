import React from "react";
import { motion } from "framer-motion";

import Card from "../../components/card/Card";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";

function Service() {
  return (
    <section id="home">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 10 }}
      >
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <Card title="Android Development" imgsrc={img1} />
                <Card title="Web Development" imgsrc={img2} />
                <Card title="Database Management" imgsrc={img3} />
                <Card title="Business Analytics" imgsrc={img4} />
                <Card title="Digital Marketing" imgsrc={img5} />
                <Card title="Video Creation" imgsrc={img6} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Service;
