import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Avatar, Button, List, Skeleton } from 'antd';
import { Container } from "react-bootstrap";

import "../styles/pages/project-joining.css";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const INITIALDATA = [
    {
        id: 0,

    }
];

const JobJoining = () => {

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);


    const handleAccept = () => {

    }

    const handleReject = () => {

    }

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                })),
            ),
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

                window.dispatchEvent(new Event('resize'));
            });
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;
    return (
        <Container>
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item className='project-joining-card'
                        actions={[<NavLink key="list-loadmore-edit" onClick={handleAccept}>Accept</NavLink>, <NavLink key="list-loadmore-more" onClick={handleReject}>Reject</NavLink>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<NavLink href="https://ant.design">{item.name?.last}</NavLink>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            {/* <div>content</div> */}
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Container>
    );
};

export default JobJoining;
