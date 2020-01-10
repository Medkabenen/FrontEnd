/*
 Date: 09.01.2020
 Author: (jffry (dsr))
 Version: 1.0.0 'Swisher'
 */

import React, { useState } from "react";

const InfoModal = _ => {


    return (
        <div>
            <Button type="primary" onClick={() => this.setModal2Visible(true)}>
                Vertically centered modal dialog
        </Button>
            <Modal
                title="Vertically centered modal dialog"
                centered
                visible={this.state.modal2Visible}
                onOk={() => this.setModal2Visible(false)}
                onCancel={() => this.setModal2Visible(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </div>

    )
}

import { Modal, Button } from 'antd';

class App extends React.Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }
