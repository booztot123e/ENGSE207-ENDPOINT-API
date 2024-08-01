var dbconfig = {
    web_labDB: {
        server: '192.168.1.119',
        database:'team6_web_labDB',
        user:'sa',
        password:'123456789BOOZtot',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.1.119'  // SQL Server instance name
        }
    },

};
module.exports = dbconfig;
