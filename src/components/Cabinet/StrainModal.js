/*
 Date: 10.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */

import React, { useState } from "react";
import { Modal, Button } from "antd";

const StrainModal = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div>
            <Button type="primary" onClick={setModalVisible(true)}>
                {props.buttonName}
            </Button >
            <Modal
                title={props.title}
                centered
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
            >
                {props.info}
            </Modal>
        </div>

    )
}

export default StrainModal;