// TODO
// 1 - send pixel update (position + color)
// 1.1 - create a fixed sized, shared buffer between sender & canvas
// 1.2 - create a buffer data export method, used when : a- full buffer, b- timeout 200ms, c- user execution
// idea : buffer is table using color as "main element".

use std::net::UdpSocket;
use std::result::Result::{Err, Ok};
use std::thread;
use std::thread::JoinHandle;


pub fn open_sender_thread(socket_address: String, socket_target: String) -> JoinHandle<()> {

    // Open a  sender thread
    let sender_handler = thread::spawn(move || {
            let sender = UdpSocket::bind(socket_address).unwrap();
            let mut data_to_send: [u8; 5] = [0; 5];
            // Wait a bit to be shure that the listener thread is up
            loop {
                thread::sleep_ms(200);
                sender.send_to(&data_to_send, &socket_target).unwrap();
                for i in 0..5 {
                    if data_to_send[i] < 255 {
                        data_to_send[i] += 1;
                    } else {
                        data_to_send[i] = i as u8;
                    }
                }
            }
        });

    //Return the handler for the parent to handle
    return sender_handler;
}


// 2 - send full data (complete map)