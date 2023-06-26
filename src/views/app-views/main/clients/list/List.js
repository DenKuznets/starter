import React, { Component } from "react";
import { Card, Table, Tag, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import userData from "assets/data/user-list.data.json";
import { ColorRing } from "react-loader-spinner";


// const myUsers = [
//     {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//         address: {
//             street: "Kulas Light",
//             suite: "Apt. 556",
//             city: "Gwenborough",
//             zipcode: "92998-3874",
//             geo: { lat: "-37.3159", lng: "81.1496" },
//         },
//         company: {
//             name: "Romaguera-Crona",
//             catchPhrase: "Multi-layered client-server neural-net",
//             bs: "harness real",
//         },
//     },
//     {
//         id: 2,
//         name: "ALeanne Graham",
//         username: "ABret",
//         email: "Sincere@april.biz",
//         address: {
//             street: "Kulas Light",
//             suite: "Apt. 556",
//             city: "AGwenborough",
//             zipcode: "92998-3874",
//             geo: { lat: "-37.3159", lng: "81.1496" },
//         },
//         company: {
//             name: "Romaguera-Crona",
//             catchPhrase: "Multi-layered client-server neural-net",
//             bs: "harness real",
//         },
//     },
// ];

export class List extends Component {
    // navigate = useNavigate();
    getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                this.setState({ newUsers: json });
            });

        // this.setState({ newUsers: myUsers });
    };

    state = {
        newUsers: null,
        users: userData,
        userProfileVisible: false,
        selectedUser: null,
    };

    componentDidMount() {
        this.getUsers();
    }

    deleteUser = (userId) => {
        this.setState({
            users: this.state.users.filter((item) => item.id !== userId),
        });
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    };

    showUserProfile = (userInfo) => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo,
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null,
        });
    };



    render() {
        const { newUsers, users, userProfileVisible, selectedUser } =
            this.state;

        const tableColumns = [
            {
                title: "Имя",
                dataIndex: "name",
                render: (_, record) => {
                    // console.log(record);
                    return (
                        <div className="d-flex">
                            <AvatarStatus
                                // src={record.img}
                                name={record.name}
                                subTitle={record.email}
                                id={record.id}
                                // onNameClick={ }
                            />
                        </div>
                    );
                },
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: "Никнейм",
                dataIndex: "username",
                sorter: {
                    compare: (a, b) => {
                        a = a.username.toLowerCase();
                        b = b.username.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: "Город",
                dataIndex: "address",
                render: (address) => <span>{address.city} </span>,
                sorter: {
                    compare: (a, b) => {
                        a = a.address.city.toLowerCase();
                        b = b.address.city.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },

            {
                title: "",
                dataIndex: "actions",
                render: (_, elm) => {
                    // console.log("elm", elm);
                    return (
                        <div className="text-right d-flex justify-content-end">
                            <Tooltip title="View">
                                <Button
                                    type="primary"
                                    className="mr-2"
                                    icon={<EyeOutlined />}
                                    onClick={() => {
                                        this.showUserProfile(elm);
                                    }}
                                    size="small"
                                />
                            </Tooltip>
                            <Tooltip title="Delete">
                                <Button
                                    danger
                                    icon={<DeleteOutlined />}
                                    onClick={() => {
                                        console.log(elm.id);
                                        this.deleteUser(elm.id);
                                    }}
                                    size="small"
                                />
                            </Tooltip>
                        </div>
                    );
                },
            },
        ];
        return newUsers ? (
            <Card
                onClick={() => {}}
                bodyStyle={{ padding: "0px" }}
            >
                <div className="table-responsive">
                    <Table
                        columns={tableColumns}
                        dataSource={newUsers}
                        rowKey="id"
                    />
                </div>
                <UserView
                    data={selectedUser}
                    visible={userProfileVisible}
                    close={() => {
                        this.closeUserProfile();
                    }}
                />
            </Card>
        ) : (
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{ width: "100%", height: "50%" }}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        );
    }
}

export default List;
