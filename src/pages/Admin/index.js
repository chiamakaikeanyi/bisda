import React, { useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Button from '../../components/Button';
import DefaultLayout from '../../components/DefaultLayout';
import styles from './admin.module.scss';
import AddBusiness from '../../components/AddBusiness';
import AddCategory from '../../components/AddCategory';
import emptyIcon from '../../images/empty.png';

function Admin() {
  const [modalOpen, setModalOpen] = useState('');

  const currentListings = localStorage.getItem('listings') !== null ? JSON.parse(localStorage.getItem('listings')) : [];

  function addCategory(category) {
    const currentCategory =
      localStorage.getItem('category') !== null ? JSON.parse(localStorage.getItem('category')) : [];
    const updatedCategory = currentCategory.concat(category);

    localStorage.setItem('category', JSON.stringify(updatedCategory));
  }

  function addBusiness(business) {
    const currentBusinesses =
      localStorage.getItem('listings') !== null ? JSON.parse(localStorage.getItem('listings')) : [];
    const updatedBusinesses = currentBusinesses.concat(business);

    localStorage.setItem('listings', JSON.stringify(updatedBusinesses));
  }

  return (
    <ToastProvider>
      <DefaultLayout>
        <div className={styles.cta_wrapper}>
          <Button className={styles.cta} label="Add Category" onClick={() => setModalOpen('category')} />
          <Button className={styles.cta} label="Add Business" onClick={() => setModalOpen('business')} />
        </div>
        <section>
          {currentListings && currentListings.length === 0 ? (
            <div className={styles.empty_state_wrapper}>
              <div className={styles.empty_state}>
                <img alt="Empty state" src={emptyIcon} width="200px" />
                <h2>No business listed at the moment</h2>
                <Button className={styles.button} label="Add Business" onClick={() => setModalOpen('business')} />
              </div>
            </div>
          ) : (
            <div>List</div>
          )}
        </section>

        <AddBusiness addBusiness={addBusiness} modalOpen={modalOpen} setModalOpen={setModalOpen} />

        <AddCategory
          addCategory={addCategory}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          ToastProvider={ToastProvider}
        />
      </DefaultLayout>
    </ToastProvider>
  );
}

export default Admin;
