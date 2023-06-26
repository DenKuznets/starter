export const NewList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [userProfileVisible, setUserProfileVisible] = useState(false);
    useEffect(() => {
        let download = true;
        if (download) {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    // return json;
                    setUsers(json);
                });
        }

        return () => {
            download = false;
        };
    }, []);
    const deleteUser = (userId) => {       
        setUsers((prev) => prev.filter((item) => item.id !== userId));
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    };
    const showUserProfile = (userInfo) => {
        // this.setState({
        //     userProfileVisible: true,
        //     selectedUser: userInfo,
        // });
    };

    const closeUserProfile = () => {
        // this.setState({
        //     userProfileVisible: false,
        //     selectedUser: null,
        // });
    };

    const tableColumns = [
        {
            title: "Имя",
            dataIndex: "name",
            render: (_, record) => {
                console.log(record);
                return (
                    <div className="d-flex">
                        <AvatarStatus
                            // src={record.img}
                            name={record.name}
                            subTitle={record.email}
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
                console.log("elm", elm);
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
    return (
        <Card bodyStyle={{ padding: "0px" }}>
            <div className="table-responsive">
                <Table
                    columns={tableColumns}
                    dataSource={users}
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
    );
};