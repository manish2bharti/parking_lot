# Add script to:
# * Install dependencies
# * Build/Compile
# * Run Test Suit to validate
#
# After this is run, bin/parking_lot
# should Just Work.
cd ..
npm install

npm test

node index.js

$SHELL
