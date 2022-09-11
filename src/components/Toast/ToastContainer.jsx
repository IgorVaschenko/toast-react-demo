import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '@/components/Errorboundary/Errorboundary';
import Portal from '@/components/Portal/Portal';

import {
  ToastWrapper,
  ContainerToasts,
} from "@/components/Toast/components";

const ToastContainer = ({ position, PortalInsertionPointId }) => {
  return (
    <ErrorBoundary>
      <Portal PortalInsertionPointId={PortalInsertionPointId}>
        <ToastWrapper>
          <ContainerToasts
            id='ContainerToasts'
            className={position}
          />
        </ToastWrapper>
      </Portal>
    </ErrorBoundary>
  );
};

export default ToastContainer;

ToastContainer.propTypes = {
  position: PropTypes.string,
  PortalInsertionPointId: PropTypes.string,
};