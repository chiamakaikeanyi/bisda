import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { useToasts } from 'react-toast-notifications';
import Button from '../Button';
import Input from '../Input';
import styles from '../AddCategory/add_category.module.scss';
import { isObjectEmpty } from '../../utils';

const AddBusiness = ({ addBusiness, modalOpen, setModalOpen }) => {
  const [state, setState] = useState({});
  const { addToast } = useToasts();

  const currentCategory = localStorage.getItem('category') !== null ? JSON.parse(localStorage.getItem('category')) : [];
  const uniqueCategory = currentCategory ? [...new Set(currentCategory)] : [];

  function handleChange({ target }) {
    setState({
      ...state,
      id: Date.now(),
      [target.name]: target.value
    });
  }

  function handleCategory(value) {
    setState({ ...state, categories: value.map(option => option) });
  }

  return (
    modalOpen === 'add_business' && (
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
              <span className={styles.required}>All fields are required *</span>
              <Input
                defaultValue={state.name}
                id="name"
                inputClassName={styles.modal_input}
                label="Name"
                maxLength="20"
                minLength="3"
                name="name"
                onChange={handleChange}
                pattern="[a-zA-Z0-9 ]+"
                type="text"
              />
              <Input
                defaultValue={state.description}
                id="description"
                inputClassName={styles.modal_input}
                label="Description"
                maxLength="500"
                minLength="3"
                name="description"
                onChange={handleChange}
                pattern="[a-zA-Z0-9 ]+"
                type="text"
              />
              <Input
                defaultValue={state.phone}
                id="phone"
                inputClassName={styles.modal_input}
                label="Phone"
                maxLength="15"
                minLength="9"
                name="phone"
                onChange={handleChange}
                pattern="[0-9]+"
                type="text"
              />
              <Input
                defaultValue={state.email}
                id="email"
                inputClassName={styles.modal_input}
                label="Email"
                minLength="7"
                name="email"
                onChange={handleChange}
                pattern="[a-zA-Z0-9 ]+"
                type="email"
              />

              <Input
                defaultValue={state.website}
                id="website"
                inputClassName={styles.modal_input}
                label="Website"
                minLength="7"
                name="website"
                onChange={handleChange}
                pattern="[a-zA-Z0-9 ]+"
                type="website"
              />

              <ReactSelect
                data-testid="categories"
                getOptionLabel={option => option.name}
                getOptionValue={option => option.name}
                isMulti
                label="Select categories"
                name="categories"
                onChange={handleCategory}
                options={uniqueCategory}
                placeholder="Select categories"
                styles={selectStyle}
                theme={theme => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: '#f9f9fa',
                    primary: '#ccc'
                  }
                })}
                value={
                  currentCategory
                    ? currentCategory.filter(
                        option => state.categories && state.categories.some(category => category.id === option.id)
                      )
                    : []
                }
              />
            </div>

            <div className={styles.add_category_wrapper}>
              <Button
                className={styles.add_category}
                label="Add Category"
                onClick={() => setModalOpen('category')}
                type="submit"
              />
            </div>

            <div className={styles.modal_footer}>
              <Button className={styles.cancel_button} label="Cancel" onClick={() => setModalOpen('')} type="button" />
              <Button
                className={styles.accept_button}
                isDisabled={isObjectEmpty(state) || Object.values(state).length < 7}
                label="Add Business"
                onClick={() => {
                  addBusiness(state);
                  setState({});
                  setModalOpen('');
                  addToast('Business added successfully', {
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

const selectStyle = {
  container: styles => ({
    ...styles,
    fontSize: '14px',
    overflow: 'initial',
    marginTop: '15px'
  }),
  control: base => ({
    ...base,
    boxShadow: 'none',
    cursor: 'pointer',
    height: '45px'
  })
};

AddBusiness.propTypes = {
  addBusiness: PropTypes.func.isRequired,
  modalOpen: PropTypes.string.isRequired,
  setModalOpen: PropTypes.func.isRequired
};

export default AddBusiness;
