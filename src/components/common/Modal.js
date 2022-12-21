import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Modal({ children, isOpen, setIsOpen }) {

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 overflow-hidden rounded-lg"
      >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/90" aria-hidden="true" onClick={() => setIsOpen(false)}/>

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4 2xl:p-6 h-full w-full">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto w-5/6 h-5/6 flex flex-col shadow overflow-hidden rounded-lg">
          {/* <Dialog.Title>Complete your order</Dialog.Title> */}
          {children}
        </Dialog.Panel>
        
      </div>
    </Dialog>
    </>
  )
}
