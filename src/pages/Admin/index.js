import React, { useState } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Button from '../../components/Button';
import DefaultLayout from '../../components/DefaultLayout';
import styles from './admin.module.scss';
import AddBusiness from '../../components/AddBusiness';
import AddCategory from '../../components/AddCategory';
import UpdateBusiness from '../../components/UpdateBusiness';
import Confirm from '../../components/Confirm';
import emptyIcon from '../../images/empty.png';
import { isNotEmptyArray } from '../../utils';
import { ReactComponent as EditIcon } from '../../images/edit.svg';
import { ReactComponent as DeleteIcon } from '../../images/delete.svg';

function Admin() {
  const [modalOpen, setModalOpen] = useState('');
  const [list, setList] = useState({});

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
          <Button className={styles.cta} label="Add Business" onClick={() => setModalOpen('add_business')} />
        </div>
        <section>
          {currentListings && currentListings.length === 0 ? (
            <div className={styles.empty_state_wrapper}>
              <div className={styles.empty_state}>
                <img alt="Empty state" src={emptyIcon} width="200px" />
                <h2>No business listed at the moment</h2>
                <Button className={styles.button} label="Add Business" onClick={() => setModalOpen('add_business')} />
              </div>
            </div>
          ) : (
            <div>
              {currentListings.length > 0 && (
                <>
                  <div className={styles.page_title_wrapper}>
                    <h1 className={styles.page_title}>Business Listing</h1>
                    <p className={styles.count}>
                      <b>{currentListings.length}</b> business{currentListings.length > 1 && 'es'} listed
                    </p>
                  </div>

                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Categories</th>
                        <th>Edit/Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isNotEmptyArray(currentListings) &&
                        currentListings
                          .sort((a, b) => b.id - a.id)
                          .map(listing => (
                            <tr key={listing.id}>
                              <td>{listing.name}</td>
                              <td>{listing.description}</td>
                              <td>{listing.phone}</td>
                              <td>{listing.email}</td>
                              <td>{listing.website}</td>
                              <td className={styles.categories}>
                                {listing.categories.map(category => (
                                  <span key={category.id}>{`${category.name},`} </span>
                                ))}
                              </td>
                              <td>
                                <Button
                                  className={styles.icon}
                                  icon={<EditIcon />}
                                  onClick={() => {
                                    setList(listing);
                                    setModalOpen('edit_business');
                                  }}
                                  title="Edit"
                                  type="submit"
                                />

                                <Button
                                  className={styles.icon}
                                  icon={<DeleteIcon />}
                                  onClick={() => {
                                    setList(listing);
                                    setModalOpen('confirm');
                                  }}
                                  title="Delete"
                                  type="submit"
                                />
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          )}
        </section>

        <AddCategory addCategory={addCategory} modalOpen={modalOpen} setModalOpen={setModalOpen} />

        <AddBusiness addBusiness={addBusiness} modalOpen={modalOpen} setModalOpen={setModalOpen} />

        <UpdateBusiness list={list} modalOpen={modalOpen} setModalOpen={setModalOpen} />

        <Confirm listID={list.id} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </DefaultLayout>
    </ToastProvider>
  );
}

export default Admin;
