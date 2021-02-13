import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import Button from '../Button';
import Input from '../Input';
import styles from './add_category.module.scss';

const AddCategory = ({ addCategory, modalOpen, setModalOpen }) => {
  const [category, setCategory] = useState({});
  const { addToast } = useToasts();

  function handleChange({ target }) {
    setCategory({
      id: Date.now(),
      name: target.value
    });
  }

  return (
    modalOpen === 'category' && (
      <section className={styles.modal}>
        <div className={styles.modal_dialog}>
          <div className={styles.modal_content}>
            <div className={styles.modal_title_wrapper}>
              <h1 className={styles.modal_title}>Add Category</h1>
              <Button
                arial-label="Close add category modal"
                className={styles.modal_close}
                label="x"
                onClick={() => setModalOpen('')}
                type="button"
              />
            </div>
            <div className={styles.modal_body}>
              <Input
                defaultValue={category.name}
                id="category"
                label="Category"
                onChange={handleChange}
                pattern="[a-zA-Z0-9 ]+"
                placeholder="Category Name"
                type="text"
                visuallyHidden
              />
            </div>
            <div className={styles.modal_footer}>
              <Button className={styles.cancel_button} label="Cancel" onClick={() => setModalOpen('')} type="button" />
              <Button
                className={styles.accept_button}
                label="Add Category"
                onClick={() => {
                  addCategory(category);
                  setCategory({});
                  setModalOpen('');
                  addToast('Category added successfully', {
                    appearance: 'success',
                    autoDismiss: true,
                    placement: 'bottom-left'
                  });
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

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
  modalOpen: PropTypes.string.isRequired,
  setModalOpen: PropTypes.func.isRequired
};

export default AddCategory;
