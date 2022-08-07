import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { People } from 'react-bootstrap-icons';
import { LikeOutlined, EyeOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';

import Data from "../data";

import "../styles/pages/project-list.css";


const data = Array.from({
    length: 100,
}).map((_, i) => ({
    id: i,
    title: `ant design part ${i}`,
    subTittle: "Fuck You...",
    totalMembers: 10,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    detailedDescription: "",
    durationInMonths: 8,
    projectType: "INTERMEDIATE",
    skills: Data.Courses,
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ProjectListPage = () => {

    const navigate = useNavigate();

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
                    <div className='project-list-card' onClick={() => { navigate(`/project/${item.id}`) }}>
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={EyeOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={People} text={item.totalMembers} key="list-vertical-message" />,
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
                                title={<NavLink to={`/project/${item.id}`}>{item.title}</NavLink>}
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
