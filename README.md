# SCS ModList Utility

A toolbox for creating and applying sharable mod lists for Euro Truck Simulator 2 and American Truck Simulator.

## Motivation

When players of ETS2/ATS want to play together in convoy mode, all players must have 100% identical mod lists in both contents and load order. When using large numbers of mods, synchronizing mods between players can become tedious and error-prone.

## How to Use

You can use the web interface at <https://uncleclapton.github.io/scs-modlists>

**More in depth documentation on using the tool is coming soon.**

In short, however. the "Create ModList" tab allows you to create your own mod list file from your user profile. Find and upload your `profile.sii` file for your save, and fill in the list details as desired.

This mod list can then be shared with other players, who can use the "Apply ModList" tab to apply the mod list to their own `profile.sii` files.

This will synchronize the mods active between the players, but will not synchronize the mod files themselves. Each player will still need to obtain the mod files, and subscribe to the same workshop mods themselves.

**IMPORTANT**: Never share your `profile.sii` files directly between each other. This file contains the login credentials to your World of Trucks account, if you have one linked. This tool process the file entirely within your browser, and never shares the file with any server, including Github.

## Acknowledgements

This project would not have been possible without the hard work of the SCS Modding Community. In particular, thanks to [Fangyi Zhou (sii-decode-rs)](https://github.com/fangyi-zhou/sii-decode-rs) for the Rust WASM module, as well as the web interface of which this project is a fork of.

Additionally, thanks to [František Milt (SII_Decrypt)](https://github.com/TheLazyTomcat/SII_Decrypt) and [Joshua Menzel (sii-decryptsharp)](https://gitlab.com/jammerxd/sii-decryptsharp) for their work on their respective decoding tools, which aided the development of the rust implementation.

## Technical Notes

The `src` directory contains the source code of the Rust library. The library
handles 3 types of files, identified by their header types: scsc (encrypted,
compressed data files), bsii (binary data files), and siin (textual data types).

The Rust library is then compiled into Web Assembly using `wasm-pack`, so that
the library can be used in browsers. The `web` directory contains the source
code of the web interface. This allows the decoding work to be performed in the
browser, so that users can use the tool in their browser without the need to
upload their files to a server.

## Contributing

See [HACKING.md](./HACKING.md).

## Roadmap

- [ ] Implement a proper CLI for the binary tool.
- [ ] Add unit tests for serialising BSII files
- [ ] Define the WebAssembly API
- [X] Provide the tool as a web application (using WebAssembly)
- [ ] Use the decode result to make an achievement tracker tool
