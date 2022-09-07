use std::result::Result::{Ok, Err};
use std::net::UdpSocket;
use std::thread;
// ------------------------------------------------------------------------------
// // => Listen and send data via UDP socket between 2 threads in rust.
// ------------------------------------------------------------------------------
fn main() -> std::io::Result<()> {
    {
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
        let listener_thread = thread::spawn(|| {
            let listener = UdpSocket::bind("127.0.0.1:1200").unwrap();
            let mut buffer = [0; 10];
            while true { // The listening loop start here
                match listener.recv_from(&mut buffer) {
                    Ok((bits_length, source_address)) => {
                        // let data = buffer[0..bits_length][0];
                        for data in buffer[0..bits_length] {
                            println!("Recieved : {:?}", data);
                        }
                    }
                    Err(err) => {
                        println!("Error in reception : {:?}", err);
                    }
                }
            }
        });

        // Open a sender thread
        let sender_thread = thread::spawn(|| {
            let sender = UdpSocket::bind("127.0.0.1:1300").unwrap();
            let mut data_to_send = vec![5u8, 7u8, 6u8];
            // Wait a bit to be shure that the listener thread is up
            thread::sleep_ms(2000);
            sender.send_to(&data_to_send, "127.0.0.1:1200").unwrap();
        });
        listener_thread.join();
        sender_thread.join();
    }
    Ok(())
}