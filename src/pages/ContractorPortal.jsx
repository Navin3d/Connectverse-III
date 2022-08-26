import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
import { Avatar, Button, List, Skeleton, message } from 'antd';
import { Container } from "react-bootstrap";

import { getEmployerId, getToken, getUserId } from '../utils/auth';

import Data from "../data";

import "../styles/pages/project-joining.css";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const INITIALDATA = [
    {
        id: 0,

    }
];

const ContractorPortal = () => {

    const navigate = useNavigate();

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    const initData = async () => {
        const employerId = getEmployerId();
        const baseUrl = Data.AppSettings.baseUrl;
        const headers = { Authorization: getToken() };

        try {
            const request = await axios.get(`${baseUrl}/contractor/${employerId}`, { headers });
            if(request.status == 200) {
                setData(request.data);
                message.success("Data Feched...")
                console.log(request.data);
            }
        } catch (e) {
            message.error("Error fetching Data.")
        }
        
    }

    useEffect(() => {
        // fetch(fakeDataUrl)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setInitLoading(false);
        //         setData(res.results);
        //         setList(res.results);
        //     });
        initData();
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
                loading={false}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item className='project-joining-card'
                        // actions={[<Button key="list-loadmore-edit" className='btn btn-outline-success' onClick={() => { handleAccept(item.id) }}>Willing</Button>, <Button key="list-loadmore-more" className='btn btn-outline-warning' onClick={() => { handleReject(item.id) }}>Not Willing</Button>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={<NavLink href={`/contractor/employee/${item.id}`}>{item.firstName}</NavLink>}
                                description={`Hi! My name is ${item.firstName} i wish to join your project...`}
                            />
                            {/* <div>content</div> */}
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Container>
    );
};

export default ContractorPortal;
