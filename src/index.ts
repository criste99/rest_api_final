import app from './app';

function main(){
    app.listen(app.get('port'));
    console.log('Hellos! 4000',app.get('port'))
}

main();
