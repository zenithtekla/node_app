exp2014 sampleApp
=================

Start the application with the following:
    $ cd exp2014 && DEBUG=exp2014:* npm start
OR 
    $ "start": "nodemon ./bin/www"
OR
simply call 
    $ ./app2014
    
Launch MongoDB with     $ ./mongod 

Shell Access:           $ mongo

Parameter for mongoose.connect

A) connect to a mongoDb server which is running on the IP address  
127.0.0.1  at port number 3000

`mongoose.connect(mongodb://localhost:3000/somedb);`

B) Cloud Development, remote mongoDb server, the app is to be public (in production state)
B.1) IF there is not authentication:

`mongoose.connect('mongodb://10.10.15.17:27018/somedb')`

Where '10.10.15.17' is the public IP address of the PC on which the mongoDb server is running

B.2) Should there be an authentication:

`mongoose.connect('mongodb://<dbuser>:<dbpassword>@<IPAddress>:27018/somedb')`

Further instruction about remote accessing to MongoDb: https://www.mkyong.com/mongodb/mongodb-allow-remote-access/