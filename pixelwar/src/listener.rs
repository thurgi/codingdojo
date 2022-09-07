use std::net::UdpSocket;
use std::result::Result::{Err, Ok};
use std::thread;
use std::thread::JoinHandle;
// from docs
// pub fn spawn<F, T>(f: F) -> JoinHandle<T>
pub fn open_listener_thread(socket_address: String) -> JoinHandle<()> {
    // --------------------------------------------------------------------------------
    // -> Open a thread in rust
    // The function thread::spawn() takes a clojure as an argument.
    // A clojure is a anonymous function that you declare immediately in the argument.
    //
    // The syntax is as follow :
    //
    // let handle = thread::spawn(|arg1, arg2, etc...| -> Return_type { function_body });
    //
    // The thread will return a "handle". This is a control var that allow the parent process
    // to "control" the child process.
    //
    // In this case, we do at the end of the main function :
    //
    // handle.join()
    //
    // This closes the thread and retrieve any value returned if any.
    // --------------------------------------------------------------------------------
    // Open a listener thread
    let listener_handler = thread::spawn(move || {
        let socket = UdpSocket::bind(socket_address).unwrap();
        let mut buffer: [u8; 5] = [0; 5];
        loop {
            // The listening loop start here
            match socket.recv(&mut buffer) {
                Ok(bits_length) => {
                    // We could use tcp or source_address to communicate the error to the client.
                    // and/or ask for the data to be sent again.
                    println!("Recieved {} {:?}", bits_length, &buffer[..bits_length]);
                }
                Err(err) => {
                    println!("Error in reception : {:?}", err);
                }
            }
        }
    });

    //Return the handler for the parent to handle
    return listener_handler;
}
