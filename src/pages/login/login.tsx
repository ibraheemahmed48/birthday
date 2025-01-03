import { LockOutlined } from '@ant-design/icons';
import { Button, Form, message, Input } from 'antd';
import { useNavigate, } from 'react-router-dom'
import { useEffect } from 'react';
import { IMAGE_BASE_URL } from '../../api';
type FormValues = {
    password: string;
};
const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const isLogin = localStorage.getItem('isLogin');

    const navigate = useNavigate();
    const onFinish = (values: FormValues) => {
        console.log('Success:', values);
        if (values.password === import.meta.env.VITE_APP_PASSWORD) {
            console.log('Success:', values);
            navigate('/birthday');
            localStorage.setItem('isLogin', "true");
        } else {
            messageApi.error('You are not the one 🦉');
        }
    };
    useEffect(() => {
        if (isLogin && isLogin == 'true') {
            navigate('/birthday');
        }
    },);

    return (
        <section className="h-screen m-5">
            {contextHolder}
            <div className="mb-40 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                    src={`${IMAGE_BASE_URL}Birthday cake-cuate.svg`}
                    className="w-full"
                    alt="Phone"
                />
            </div>
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12 mt-10">
                <Form
                    name="login"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                        className="w-full"
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Enter your password"
                            className="max-h-full"
                            style={{ height: '50px', borderColor: '#22C55E' }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            block
                            type="primary"
                            htmlType="submit"
                            className="w-full text-white"
                            style={{ backgroundColor: '#22C55E', height: '50px', borderColor: '#22C55E' }}
                        >
                            GO IN 🦉
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};
export default Login;
