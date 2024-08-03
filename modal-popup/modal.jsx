import './modal.css'


export default function Modal({ id, header, body, footer, onClose }) {


    return (
        <div id={id || 'Modal'} className="modal">
            <div className="modal-content">
                <div className="header">
                    <span onClick={onClose} className="close-modal-idon">&times;</span>
                    <h2>{header ? (header) : 'Header by default - 13627316'}</h2>
                </div>
                <div className="body">
                    {
                        body ? (body) : <div>This is our modal body by default - 2734782364</div>
                    }
                </div>
                <div className="footer">
                    {
                        footer ? (footer) :
                        <h2>Footer by default - 327462374</h2>
                    }
                </div>
            </div>

        </div>
    )
}