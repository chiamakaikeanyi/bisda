import React from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import Button from '../Button';
import styles from '../AddCategory/add_category.module.scss';

const Confirm = ({ listID, modalOpen, setModalOpen }) => {
  const { addToast } = useToasts();

  function handleDelete() {
    const currentBusinesses =
      localStorage.getItem('listings') !== null ? JSON.parse(localStorage.getItem('listings')) : [];
    const updatedBusinesses = currentBusinesses.filter(business => business.id !== listID);

    localStorage.setItem('listings', JSON.stringify(updatedBusinesses));

    setModalOpen('');
    addToast('Listing deleted successfully', {
      appearance: 'success',
      autoDismiss: true,
      placement: 'bottom-left'
    });
  }

  return (
    modalOpen === 'confirm' && (
      <section className={styles.modal}>
        <div className={styles.modal_dialog}>
          <div className={styles.modal_content}>
            <div className={styles.modal_title_wrapper}>
              <h1 className={styles.modal_title}>Confirm</h1>
              <Button
                arial-label="Close confirm modal"
                className={styles.modal_close}
                label="x"
                onClick={() => setModalOpen('')}
                type="button"
              />
            </div>
            <div className={styles.modal_body}>Are you sure you want to continue?</div>
            <div className={styles.modal_footer}>
              <Button className={styles.cancel_button} label="Cancel" onClick={() => setModalOpen('')} type="button" />
              <Button className={styles.accept_button} label="OK" onClick={() => handleDelete()} />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

Confirm.propTypes = {
  listID: PropTypes.number.isRequired,
  modalOpen: PropTypes.string.isRequired,
  setModalOpen: PropTypes.func.isRequired
};

export default Confirm;
