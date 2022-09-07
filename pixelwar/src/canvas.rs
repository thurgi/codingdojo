use std::collections::HashMap;

#[derive(Hash, Eq, PartialEq, Debug)]
pub struct Position {
    x: u16,
    y: u16,
}

impl Position {
    pub fn new(x: u16, y: u16) -> Position {
        Position { x: x, y: y }
    }
}

#[derive(Clone, Copy, Debug)]
pub struct Pixel {
    color: PixelColor,
    user_id: u128,
}
impl Pixel {
    pub fn new(color: PixelColor, user_id: u128) -> Pixel {
        Pixel {
            color: color,
            user_id: user_id,
        }
    }
}

#[derive(Clone, Copy, Debug)]
pub enum PixelColor {
    Blue,
    Green,
    Yellow,
    Red,
    Purple,
    Orange,
    Black,
    White,
}

pub trait CanvaTrait {
    fn init_canvas() -> Self;
    fn set_pixel(self: &mut Self, position: Position, pixel: Pixel);
    fn serialize_pixel_at_position(self: &mut Self, pixel: Pixel, position: Position) -> Vec<u8>;
    fn get_pixel(self: &mut Self, position: Position) -> Pixel;
}

pub type Canvas = HashMap<Position, Pixel>;

impl CanvaTrait for Canvas {
    fn init_canvas() -> Canvas {
        let mut canvas: Canvas = Canvas::new();
        let x: u16 = 0b0000000001111111;
        let y: u16 = 0b0000000001111111;

        for pos_x in 0..x {
            for pos_y in 0..y {
                canvas.insert(
                    Position::new(pos_x, pos_y),
                    Pixel {
                        color: PixelColor::White,
                        user_id: 0 as u128,
                    },
                );
            }
        }
        return canvas;
    }

    fn set_pixel(self: &mut Canvas, position: Position, pixel: Pixel) {
        self.insert(position, pixel);
    }

    fn get_pixel(self: &mut Canvas, position: Position) -> Pixel {
        let pixel: Pixel = *self.get(&position).unwrap();
        return pixel;
    }

    fn serialize_pixel_at_position(self: &mut Canvas, pixel: Pixel, position: Position) -> Vec<u8> {
        return [
            (position.x >> 8) as u8,
            position.x as u8,
            (position.y >> 8) as u8,
            position.y as u8,
            pixel.color as u8,
        ]
        .to_vec();
    }
}
