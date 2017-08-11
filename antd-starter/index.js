import { Button, DatePicker, Icon, message, LocaleProvider } from 'antd';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import enUS from 'antd/lib/locale-provider/en_US';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }

    handleChange(date) {
        message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }

    render() {
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>

                <Button type="primary"><Icon type="smile" /> Button</Button>;
            </div>
        );
    }
}

ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <App />
    </LocaleProvider>,
    document.getElementById('root'));