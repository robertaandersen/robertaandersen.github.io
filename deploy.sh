rm -rf docs
cd React
rm -rf build
npm run build
mv build ..
cd ..
mv build docs
