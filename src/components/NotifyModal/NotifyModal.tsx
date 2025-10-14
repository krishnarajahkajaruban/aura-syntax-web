import { Dialog } from 'primereact/dialog';
import styles from './NotifyModal.module.css';

interface NotifyModalProps {
  show: boolean;
  onClose: () => void;
  projectName: string;
}

const NotifyModal = ({ show, onClose, projectName }: NotifyModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll notify you about ${projectName}.`);
    onClose();
  };

  return (
    <Dialog
      visible={show}
      onHide={onClose}
      header={`Get notified about ${projectName}`}
      className={styles.notifyDialog}
      modal
      draggable={false}
      resizable={false}
    >
      <form onSubmit={handleSubmit} className={styles.notifyForm}>
        <div className={styles.formGroup}>
          <label htmlFor="notify-name">Name</label>
          <input
            type="text"
            id="notify-name"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="notify-email">Email</label>
          <input
            type="email"
            id="notify-email"
            required
            placeholder="Enter your email"
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Subscribe <i className="bi-check-circle"></i>
        </button>
      </form>
    </Dialog>
  );
};

export default NotifyModal;
