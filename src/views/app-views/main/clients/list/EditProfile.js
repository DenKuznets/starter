import React, { Component } from "react";
import {
    Form,
    Avatar,
    Button,
    Input,
    DatePicker,
    Row,
    Col,
    message,
    Upload,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";
import { useNavigate, useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

function EditProfile(Component) {
    return function WrappedComponent(props) {
        const params = useParams();
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} params={params} />;
    };
}

class EditProfileSimple extends Component {
    state = {
        name: null,
        username: null,
        email: null,
    };

    getUser = () => {
        fetch(
            `https://jsonplaceholder.typicode.com/users/${this.props.params.id}`
        )
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    name: json.name,
                    username: json.username,
                    email: json.email,
                });
            });
    };

    componentDidMount() {
        this.getUser();
    }

    render() {
        const onFinish = (values) => {
            const key = "updatable";
            message.loading({ content: "Updating...", key });
            setTimeout(() => {
                this.setState({
                    name: values.name,
                    email: values.email,
                    userName: values.userName,
                });
                message.success({ content: "Done!", key, duration: 1 });
                this.props.navigate(-1);
            }, 1000);
        };

        const onFinishFailed = (errorInfo) => {
            console.log("Failed:", errorInfo);
        };

        const { name, email, username } = this.state;
        // const { name, email, username } = {
        //     name: "den",
        //     email: "dadsa@mail.ru",
        //     username: "adsdass",
        // };

        return name ? (
            <>
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={{
                            name: name,
                            email: email,
                            username: username,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <Row gutter={ROW_GUTTER}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your name!",
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your username!",
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    type: "email",
                                                    message:
                                                        "Please enter a valid email!",
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Button type="primary" htmlType="submit">
                                    Save Change
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </>
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

export default EditProfile(EditProfileSimple);
