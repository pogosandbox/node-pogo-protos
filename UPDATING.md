# Updating to latest protos

1. Clone/pull latest [POGOProtos](https://github.com/AeonLucid/POGOProtos)
1. Add/Modify needeed files in `proto` directory
3. Execute in node-pogo-protos directory:
    - `npm run compile`
    - `npm run minjs`
    - `npm run js`
    - `npm run ts`
4. Bump version number (same version as POGOProtos) in `package.json` and add version tag
