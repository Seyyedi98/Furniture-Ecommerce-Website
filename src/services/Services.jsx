/* eslint-disable no-unused-vars */
import "./Services.css";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import DynamicIcons from "../assets/data/DynamicIcons";

import serviceDate from "../assets/data/serviceData";

function Services() {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceDate.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i>
                    <DynamicIcons type={item.icon} />
                  </i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
