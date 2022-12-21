/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function SlidePanel({ title, open, setOpen, children }) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden min-w-1/2 h-full" onClose={setOpen}>
        <div className="absolute overflow-hidden h-full">
          {/* <Dialog.Overlay className="fixed inset-0 border-l border-gray-800 bg-gray-800 bg-opacity-80" /> */}
          <Dialog.Overlay className="absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />


          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16 h-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-3xl p-4 h-full">
                <div className="flex h-full flex-col overflow-hidden shadow-xl m-2">
                  {title && (
                    <div className="pt-4  px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-bold text-gray-200">{title}</Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                                <button
                                    type="button"
                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={() => setOpen(false)}
                                >
                                <span className="sr-only">Close panel</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                          </div>
                        </div>
                    </div>
                  )}
                  <div className="relative flex-1 focus:outline-none overflow-hidden">
                    {children}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
