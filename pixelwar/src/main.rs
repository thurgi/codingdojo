#![allow(dead_code)]
mod canvas;
mod listener;
mod sender;
use canvas::{CanvaTrait, Canvas, Pixel, PixelColor, Position};
use listener::{open_listener_thread};
use sender::{open_sender_thread};

fn main() -> std::io::Result<()> {
    // Initialize a new white canvas, A canvas is a HashMap
    println!("INIT CANVA");
    let mut canvas: Canvas = Canvas::init_canvas();
    println!("DONE INIT CANVA");

    canvas.set_pixel(
        Position::new(0b1111000000001111u16, 0b1100110000110011u16),
        Pixel::new(PixelColor::Red, 1u128),
    );
    let pixel = canvas.get_pixel(Position::new(0b1111000000001111u16, 0b1100110000110011u16));
    println!(
        "Canvas at (0:0)\n{:?}",
        // canvas.get(&Position::new(0u16, 0u16)),
        canvas.serialize_pixel_at_position(
            pixel,
            Position::new(0b1111000000001111u16, 0b1100110000110011u16)
        )
    );

    // Open a thread to listen on "127.0.0.1:1200", expecting data of 5 u8
    let listener_handle = listener::open_listener_thread(String::from("127.0.0.1:1200"));
    let sender_handle = sender::open_sender_thread(String::from("127.0.0.1:1300"), "127.0.0.1:1200".to_string());

    listener_handle.join();
    sender_handle.join();
    Ok(())
}
