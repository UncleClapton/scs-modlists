use wasm_bindgen::{prelude::wasm_bindgen, JsError};

use crate::ets2::analyze_save_to_json;
use crate::file_type::decode_until_siin;

#[wasm_bindgen]
pub fn decode(input: &[u8]) -> Result<Vec<u8>, JsError> {
    match decode_until_siin(input) {
        Ok(decoded) => Ok(decoded),
        Err(err) => Err(JsError::new(&format!("Decoding error: {}", err))),
    }
}
