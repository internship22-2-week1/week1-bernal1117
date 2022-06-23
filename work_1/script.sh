echo 'Ingrese nombre del directorio'
read A
mkdir -p $A/assets/css
cd $A/assets
mkdir img
mkdir js
cd css
touch style.css
cd ..
cd ..
cd ..
cat prb.css > style.css
cd $A
touch index.html
cd ..
cat texto.html > index.html
cat index.html 
tree $A
