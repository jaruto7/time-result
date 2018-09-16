var os = require( 'os' );
var sec;
var min;
var hour;

function getOSinfo() {
    var type = os.type();
    if( type === 'Darwin' ) {
        type = 'OSX';
    } else if( type === 'Windows_NT' ) {
        type = 'Windows';
    }
    var userInfo = os.userInfo();
    var uptime = os.uptime();
    var release = os.release();
    console.log( 'User name: ', userInfo.username );
    console.log( 'Home dir: ', userInfo.homedir );
    /*Stwórz moduł, który będzie poprawnie formatował czas. Zależy nam na napisaniu funkcji:
    do przekształcania sekund na minuty - przykładowo, podając 125 sekund wyświetli 2 min. 5 sek.
    sekund na godziny - podając 3700 sekund wyświetli 1 godz. 1 min. 40 sek.
    dodaj moduł do katalogu modules i skorzystaj z niego w module OSinfo do poprawnego formatowania czasu działania systemu*/
    
    // console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    var uptimeFormat = ((uptime / 60).toFixed(0));
    sec = 0; 
    min = 0;
    hour = 0;
    if ( uptimeFormat > 0 ) {
        hour++;
        console.log( sec + ' sec' );
        if( uptimeFormat > 60 ) {
            min++;
            console.log( min + ' min' );
            sec++;
            if( uptimeFormat > 3600 ) {
                console.log( hour + ' hour' );
            }
        }
    } else {
        console.log( hour + ' hour ' + min + ' min ' + sec + ' sec' );
    }
            
    // console.log( 'Uptime: ~', ( uptime / 1708674).toFixed( 0 ), 'min' + ' ' + ( uptime / 60).toFixed( 0 ), 'sec' );
    console.log( 'System: ', type );
    console.log( 'Release: ', release );    
}

exports.print = getOSinfo;