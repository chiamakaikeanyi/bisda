import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import styles from '../AddCategory/add_category.module.scss';

const AddBusiness = ({ addBusiness, modalOpen, setModalOpen }) => {
  const [state, setState] = useState('');

  return (
    modalOpen === 'business' && (
      <section className={styles.modal}>
        <div className={styles.modal_dialog}>
          <div className={styles.modal_content}>
            <div className={styles.modal_title_wrapper}>
              <h1 className={styles.modal_title}>Add Business</h1>
              <Button
                arial-label="Close add business modal"
                className={styles.modal_close}
                label="x"
                onClick={() => setModalOpen('')}
                type="button"
              />
            </div>
            <div className={styles.modal_body}>
              <Input
                id="business"
                label="Business Name"
                onChange={e => setState(e.target.value)}
                pattern="[a-zA-Z0-9 ]+"
                placeholder="Business Name"
                type="text"
                value={state}
                visuallyHidden
              />
            </div>
            <div className={styles.modal_footer}>
              <Button className={styles.cancel_button} label="Cancel" onClick={() => setModalOpen('')} type="button" />
              <Button
                className={styles.accept_button}
                label="Add Business"
                onClick={() => {
                  addBusiness(state);
                  setState('');
                }}
                type="submit"
              />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

AddBusiness.propTypes = {
  addBusiness: PropTypes.func.isRequired,
  modalOpen: PropTypes.string.isRequired,
  setModalOpen: PropTypes.func.isRequired
};

export default AddBusiness;
