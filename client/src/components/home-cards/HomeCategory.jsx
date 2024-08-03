import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import one from "../../public/images/shoping_category/1f2ab0ea-e6a3-4efe-b248-cbec95a900161559216808913-Men-category-cards_04_jeans.jpg";
import two from "../../public/images/shoping_category/2a0ce60a-4d10-4e61-8c0a-f59f377213d51559216916390-women-category-cards_05_jeans.jpg";
import three from "../../public/images/shoping_category/3c637a0a-0cda-45a7-8ce8-5bb212d4b6411559216808935-Men-category-cards_02_shirts.jpg";
import four from "../../public/images/shoping_category/3fd040fc-431d-4060-9469-f0c11b7329121559216916380-women-category-cards_06_tshirts.jpg";
import five from "../../public/images/shoping_category/b2d6cb61-2796-46ba-b813-bf723c8fc27e1559216808945-Men-category-cards_01_tshirts.jpg";
import six from "../../public/images/shoping_category/f8262050-fe52-4390-98b8-21c634e09bae1559216808891-Men-category-cards_06_trousers.jpg";
function HomeCategory() {
  return (
    <Container>
      <Row>
        <Col sm>
          < img className="m-auto d-flex" src={one} />
        </Col>
        <Col sm>
          < img className="m-auto d-flex" src={two} />
        </Col>
        <Col sm>
          < img className="m-auto d-flex" src={three} />
        </Col>
        <Col sm>
          < img className="m-auto d-flex" src={four} />
        </Col>
        <Col sm>
          < img className="m-auto d-flex" src={five} />
        </Col>
        <Col sm>
          < img className="m-auto d-flex" src={six} />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeCategory;
