import { useState, useEffect, createElement } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { People } from "react-bootstrap-icons";
import { LikeOutlined, EyeOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";

import Data from "../data";

import "../styles/pages/project-list.css";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  id: i,
  title: `Project Tittle ${i}`,
  subTittle: "Fuck You...",
  totalMembers: 10,
  description:
    "This project is basically designed to take up my life and sleep and also litttle amount f existing peace from me",
  detailedDescription: "",
  durationInMonths: 8,
  projectType: "INTERMEDIATE",
  skills: Data.Courses,
  content:
    "This project is basically designed to take up my life and sleep and also litttle amount f existing peace from me.",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

const ProjectListPage = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {}, []);

  return (
    <Container>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 6,
        }}
        dataSource={data}
        // footer={
        //   <div>
        //     <b>ant design</b> footer part
        //   </div>
        // }
        renderItem={(item) => (
          <div
            className="project-list-card"
            onClick={() => {
              navigate(`/project/${item.id}`);
            }}
          >
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={EyeOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={People}
                  text={item.totalMembers}
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src={`${item.skills[0].imageUrl}`}
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={
                  <NavLink to={`/project/${item.id}`}>{item.title}</NavLink>
                }
                description={item.description}
              />
              {item.content}
            </List.Item>
          </div>
        )}
      />
    </Container>
  );
};

export default ProjectListPage;
