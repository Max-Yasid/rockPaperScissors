import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/modal.module.css';
import { useEffect } from 'react';

export default function RulesModal(props) {
    let [deviceWidth, setDeviceWidth] = useState();
    let closeModalIcon = <img onClick={props.closeModal} className={`${styles["c-pointer"]}`} src="/images/icon-close.svg" width={20} height={20} alt="close" />;
    useEffect(() => {
        setDeviceWidth(screen.width);
    }, []);
    return (
        <Modal 
            dialogClassName={styles["modal-width"]}
            show={props.isModalShowing}
            onHide={props.closeModal}
            animation={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            
            <Modal.Body className={`${styles["modal-container"]}`}>
                <div>
                    <div className={`${styles["modal-header"]}`}>
                        <h2 className={`${styles["rules-title"]}`}>RULES</h2>
                        {
                            deviceWidth > 375 &&
                                <div className="close-modal-container">
                                    {closeModalIcon}
                                </div>
                        }
                    </div>
                    <br />
                    <div className={`${styles["modal-body"]} text-center`}>
                        <Image src={"/images/image-rules-bonus.svg"} width={300} height={300} alt="rules" />
                    </div>
                    
                    {deviceWidth < 375 && 
                        <div className="close-modal-container text-center">
                            {closeModalIcon}
                        </div>
                    }
                </div>
            </Modal.Body>
        </Modal>
    );
  }