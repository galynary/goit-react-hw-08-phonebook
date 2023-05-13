import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filterValue))
);
