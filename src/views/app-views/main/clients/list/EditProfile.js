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
import { useParams } from "react-router-dom";

function EditProfile(Component) {
    return function WrappedComponent(props) {
        const params = useParams();
        return <Component {...props} params={params} />;
    };
}

class EditProfileSimple extends Component {
    state = {
        name: null,
        username: null,
        email: null,
    };

    getUser() {
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
    }

    componentDidMount() {
        // this.getUser();
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
                message.success({ content: "Done!", key, duration: 2 });
            }, 1000);
        };

        const onFinishFailed = (errorInfo) => {
            console.log("Failed:", errorInfo);
        };

        

        const onRemoveAvater = () => {
            this.setState({
                avatarUrl: "",
            });
        };

        const {
            name,
            email,
            userName,
            dateOfBirth,
            phoneNumber,
            website,
            address,
            city,
            postcode,
            avatarUrl,
        } = this.state;
        return (
            <>
               
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        layout="vertical"
                        initialValues={{
                            name: this.name,
                            email: this.email,
                            username: this.username,
                            
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
        );
    }
}

export default EditProfile(EditProfileSimple);
