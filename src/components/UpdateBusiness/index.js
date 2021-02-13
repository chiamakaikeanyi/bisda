import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { useToasts } from 'react-toast-notifications';
import Button from '../Button';
import Input from '../Input';
import styles from '../AddCategory/add_category.module.scss';

const UpdateBusiness = ({ list, modalOpen, setModalOpen }) => {
  const [state, setState] = useState({});
  const { addToast } = useToasts();

  useEffect(() => {
    setState(list);
  }, [list]);

  const currentCategory = localStorage.getItem('category') !== null ? JSON.parse(localStorage.getItem('category')) : [];
  const uniqueCategory = currentCategory ? [...new Set(currentCategory)] : [];

  function handleChange({ target }) {
    setState({
      ...state,
      [target.name]: target.value
    });
  }

  function handleCategory(value) {
    setState({ ...state, categories: value.map(option => option) });
  }

  function updateBusiness(business) {
    const currentBusinesses =
      localStorage.getItem('listings') !== null ? JSON.parse(localStorage.getItem('listings')) : [];

    const filteredBusinesses = currentBusinesses.filter(data => data.id !== business.id);

    const updatedBusinesses = filteredBusinesses.concat(state);

    localStorage.setItem('listings', JSON.stringify(updatedBusinesses));
  }

  return (
    modalOpen === 'edit_business' && (
      <section className={styles.modal}>
        <div className={styles.modal_dialog}>
          <div className={styles.modal_content}>
            <div className={styles.modal_title_wrapper}>
              <h1 className={styles.modal_title}>Update Business</h1>
              <Button
                arial-label="Close edit business modal"
                className={styles.modal_close}
                label="x"
                onClick={() => setModalOpen('')}
                type="button"
              />
            </div>
            <div className={styles.modal_body}>
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
                className={styles.modal_input}
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

            <div className={styles.modal_footer}>
              <Button className={styles.cancel_button} label="Cancel" onClick={() => setModalOpen('')} type="button" />
              <Button
                className={styles.accept_button}
                label="Update Business"
                onClick={() => {
                  updateBusiness(state);
                  setState({});
                  setModalOpen('');
                  addToast('Business updated successfully', {
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
    margin: '10px 0',
    height: '40px'
  }),
  control: base => ({
    ...base,
    boxShadow: 'none',
    cursor: 'pointer'
  })
};

UpdateBusiness.propTypes = {
  list: PropTypes.object,
  modalOpen: PropTypes.string.isRequired,
  setModalOpen: PropTypes.func.isRequired
};

export default UpdateBusiness;
