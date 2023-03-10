import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'

export default function NotificationCancel({ show, setShow, title = '', message = '', onClickAccept = null, onClickCancel = null, loading = false  }) {

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="flex flex-col items-start justify-start px-4 py-2 pointer-events-none sm:p-2 sm:items-start w-full"
      >
        <div className="w-full h-90 flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  {/* <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div> */}
                  <div className="ml-3 w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <pre className="mt-1 text-xs text-gray-500 whitespace-pre-wrap bg-gray-800 p-2 max-h-128 overflow-y-scroll">{message}</pre>
                    <div className="mt-4 flex">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={onClickAccept}
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        className="ml-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={onClickCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  {/* <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
