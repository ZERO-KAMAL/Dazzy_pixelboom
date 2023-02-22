import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './BaseModal.scss'

/**
 * Custom Modal Box Component
 *
 * @BaseModal
 * @example
 * @param   {<any>} openModal <Opens the Modal>
 * @param   {<any>} setOpenModal <Sets the state to open the modal>
 * @param   {<any>} Childern <the remaining contnts of modal>
 * )
 */

const BaseModal = ({ openModal, setOpenModal, children, width = '90' }) => {
  const handleClose = () => {
    setOpenModal(false)
  }
  return (
    <Modal show={openModal} backdrop={true} centered onHide={handleClose} className="baseModal"> 
      {children}
    </Modal>
  )
}

export default BaseModal
