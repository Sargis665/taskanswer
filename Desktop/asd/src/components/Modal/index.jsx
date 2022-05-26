import React from 'react';
import ReactDOM from 'react-dom';
import ClickOutside from '../ClickOutside';
import './style.scss';
class Modal extends React.Component {
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.isOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else if (!nextProps.isOpen) {
    //         document.body.style.overflow = 'auto';
    //     }
    // }
    render() {
        return ReactDOM.createPortal(
            this.props.isOpen ? (
                <div className="P-modal">
                <div>
                  <ClickOutside onClickOutside={this.props.onClose}>
                    <div className={`P-modal-content ${this.props.className}`} >
                      {this.props.children}
                    </div>
                  </ClickOutside>
                </div>
              </div>
      
            ) : null,
            document.getElementById('modal')
        );
    }
}
export default Modal;

