var os = require( 'os' );
var createTime = require( '../modules/formatTime' );

function getOSinfo() {
    var type = os.type();
    if( type === 'Darwin' ) {
        type = 'OSX';
    } else if( type === 'Windows_NT' ) {
        type = 'Windows';
    }
    var userInfo = os.userInfo();
    var release = os.release();
    console.log( 'User name: ', userInfo.username );
    console.log( 'Home dir: ', userInfo.homedir );
    createTime.print();
    console.log( 'System: ', type );
    console.log( 'Release: ', release );    
}

exports.print = getOSinfo;