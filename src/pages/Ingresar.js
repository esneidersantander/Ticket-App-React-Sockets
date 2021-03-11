import React from 'react'
import { Form, Input, Button, InputNumber } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 14,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 14,
    },
};

export const Ingresar = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Nombre del agente"
                name="agente"
                rules={[
                    {
                        required: true,
                        message: 'Por favor ingrese su nombre',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Escritorio"
                name="escritorio"
                rules={[
                    {
                        required: true,
                        message: 'Por favor ingrese el número de escritorio',
                    },
                ]}
            >
                <InputNumber min={1} max={99}/>
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    <SaveOutlined />
                    Ingresar
                </Button>
            </Form.Item>
        </Form>
    )
}
