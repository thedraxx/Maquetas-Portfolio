// pages/_app.js
import React from 'react';
import App from 'next/app';
import Modal from 'react-modal';
import { UploadProvider } from '@/components/context/Upload';
import { DeleteProvider } from '@/components/context/Delete';
import '@/styles/globals.css';

Modal.setAppElement('#__next');

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UploadProvider>
        <DeleteProvider>
          <Component {...pageProps} />
        </DeleteProvider>
      </UploadProvider>
    );
  }
}

export default MyApp;