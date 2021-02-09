import React from 'react'
import {  notification } from 'antd';
import {connect} from "react-redux";
import './Notification.css'
const Notification = props =>{
    const key = 'updatable';
    const openNotification = () => {
        notification.open({
            key,
            message: props.notification.title,
            description: props.notification.body,
        });
        setTimeout(() => {
            notification.open({
                key,
                message: props.notification.title,
                description:  props.notification.body,
            });
        }, 1000);
    };
    return(
        <div>
            { props.notification.isOpen && openNotification()}
        </div>
    )
}
const mapStateToProps = state=>{
    return{
        notification: state.main.notification
    }
}
export default connect(mapStateToProps)(Notification)






