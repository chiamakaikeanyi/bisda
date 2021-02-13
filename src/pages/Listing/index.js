import React, { useState, useEffect } from 'react';
import Search from '../../components/Search';
import DefaultLayout from '../../components/DefaultLayout';
import styles from './listing.module.scss';
import constants from '../../constants';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg';
import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as GlobeIcon } from '../../images/globe.svg';
import emptyIcon from '../../images/empty.png';

const Listing = () => {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const currentListings = localStorage.getItem('listings') !== null && JSON.parse(localStorage.getItem('listings'));

  useEffect(() => {
    setListings(currentListings);
  }, [currentListings]);

  function handleSearch({ target }) {
    setSearchTerm(target.value);
  }

  function clearSearch() {
    setSearchTerm('');
  }

  const filteredList = listings
    ? listings.filter(
        listing =>
          listing.name.toLowerCase().includes(searchTerm.toLowerCase()) || listing.description.includes(searchTerm)
      )
    : [];

  return (
    <DefaultLayout>
      <div className={styles.cta_wrapper}>
        <h1 className={styles.page_title}>Listings</h1>
        <Search
          className={styles.search}
          onChange={handleSearch}
          onClear={clearSearch}
          pattern="[a-zA-Z0-9 ]+"
          placeholder="Search by business name"
          searchTerm={searchTerm}
        />
      </div>

      {filteredList.length > 0 && (
        <p className={styles.count}>
          We've found <b>{filteredList.length}</b> business{filteredList.length > 1 && 'es'} listed
        </p>
      )}

      {filteredList.length === 0 ? (
        <section className={styles.empty_state_wrapper}>
          <div className={styles.empty_state}>
            <img alt="Empty state" src={emptyIcon} width="200px" />
            <h2>No business listed at the moment</h2>
            <p>When businesses are added, we'll show them here</p>
          </div>
        </section>
      ) : (
        <section>
          <ul className={styles.list_wrapper}>
            {filteredList.map(listing => (
              <li className={styles.list_item} key={listing.id}>
                <img
                  alt={`${listing.name} office`}
                  className={styles.business_logo}
                  height="160px"
                  src={`${constants.imageEndpoint}?random${listing.id}`}
                  width="160px"
                />
                <div className={styles.business_details}>
                  <h2 className={styles.business_name}>
                    {listing.name}
                    <div>
                      {listing.categories &&
                        listing.categories.map((category, index) => (
                          <span className={styles.business_category} key={index}>
                            {category}
                          </span>
                        ))}
                    </div>
                  </h2>
                  <p className={styles.business_description}>{listing.description}</p>
                  <div className={styles.business_contact_wrapper}>
                    <div className={styles.business_contact}>
                      <PhoneIcon />
                      <div className={styles.contact_wrapper}>
                        <div>
                          <a href={`tel:${listing.phone}`}>{listing.phone}</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.business_contact}>
                      <EmailIcon />
                      <div className={styles.contact_wrapper}>
                        <div>
                          <a href={`mailto${listing.email}`}>{listing.email}</a>
                        </div>
                      </div>
                    </div>
                    <div className={styles.business_contact}>
                      <GlobeIcon />
                      <div className={styles.contact_wrapper}>
                        <div>
                          <a href={listing.website} rel="noreferrer noopener" target="_blank">
                            {listing.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </DefaultLayout>
  );
};

export default Listing;
